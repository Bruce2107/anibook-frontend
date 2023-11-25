import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Text } from 'anibook-ui';
import { useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AxiosResponse } from 'axios';
import TextFiled from '../../../components/TextField';
import { Container, SidedItem, StyledButton } from './styles';
import Navbar from '../../../components/Navbar';
import api from '../../../services/api';
import { passwordCrypto, validEmail } from '../../../utils/formFields';
import 'react-toastify/dist/ReactToastify.css';
import showToast, { showToastWithCallback } from '../../../utils/Toast';
import { useLogin } from '../../../hooks/login';
import { User } from '../../../recoil/atoms/login';
import Loading from '../../../components/Loading';
import setPageTitle from '../../../utils/setPageTitle';

const Edit = () => {
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);
  const userNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const currentPasswordRef = useRef<HTMLInputElement>(null);
  const [requestUser, setRequestUser] = useState<User | undefined>(undefined);
  const { user, setUser } = useLogin();

  const validate = useCallback(() => {
    if (userNameRef.current?.value === '' || !userNameRef.current?.value) {
      showToast('warn', 'Informe um nome');
      return false;
    }

    if (emailRef.current?.value === '' || !emailRef.current?.value) {
      showToast('warn', 'Informe um e-mail');
      return false;
    }

    if (!validEmail(emailRef.current.value)) {
      showToast('error', 'Informe um e-mail válido');
      return false;
    }

    if (currentPasswordRef.current?.value === '' || !currentPasswordRef.current?.value) {
      showToast('warn', 'Informe a senha atual');
      return false;
    }

    if (passwordRef.current?.value === '' || !passwordRef.current?.value) {
      showToast('warn', 'Informe uma senha');
      return false;
    }

    if (passwordConfirmRef.current?.value === '' || !passwordConfirmRef.current?.value) {
      showToast('warn', 'Digite a senha novamente');
      return false;
    }

    if (passwordConfirmRef.current.value !== passwordRef.current.value) {
      showToast('error', 'As senhas não conferem');
      return false;
    }

    if (emailRef.current.value === requestUser?.email
      && userNameRef.current.value === requestUser.name
      && passwordCrypto(passwordConfirmRef.current.value) === requestUser.password) {
      showToast('info', 'Altere ao menos uma informação');
      return false;
    }

    if (passwordCrypto(currentPasswordRef.current.value) !== requestUser?.password) {
      showToast('error', 'Senha incorreta');
      return false;
    }

    return true;
  }, [requestUser]);

  useEffect(() => {
    setPageTitle('Editar perfil');
    setLoading(true);
    api
      .get(`/graph/user/${user.name}`)
      .then((res: AxiosResponse<{ user: Array<User> }>) => {
        setRequestUser(res.data.user[0]);
      })
      .catch((error) => {
        if (!error.response) history.push('request/fail');
        else {
          history.push(`/request/fail?status=${error.response.status}`);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [history, user]);

  const edit = useCallback(
    async () => {
      try {
        if (validate()) {
          const res = await api.patch(
            `/graph/user/${user.name}`,
            {
              name: userNameRef.current?.value,
              email: emailRef.current?.value,
              password: passwordCrypto(passwordRef.current?.value || '')
            }
          );

          if (res.status === 204) {
            showToastWithCallback('success', 'Edição bem sucedida', () => {
              setUser({
                name: userNameRef.current?.value || '',
                email: '',
                password: passwordCrypto(passwordRef.current?.value || '')
              });
              history.replace('/profile');
            });
          }
        }
      } catch (error: any) {
        if (!error.response.status) history.push('request/fail');
        else if (error.response.status === 404) {
          showToast('error', 'Usuário não encontrado');
        } else {
          history.push(`/request/fail?status=${error.response.status}`);
        }
      }
    },
    [history, setUser, user, validate]
  );

  return (
    <>
      <Navbar />
      {isLoading && <Loading />}
      {!isLoading && (
        <Container>
          <Text
            text="Editar perfil"
            props={[
              { name: 'text-transform', value: 'capitalize' },
              { name: 'font-size', value: '2rem' },
              { name: 'font-weight', value: '600' },
              { name: 'padding-bottom', value: '1.25rem' }
            ]}
            lang="pt-br"
          />
          <TextFiled
            title="Nome de usuário"
            itemType="text"
            ref={userNameRef}
            aria-required
            initialValue={requestUser?.name}
          />
          <TextFiled
            title="Email"
            itemType="email"
            ref={emailRef}
            aria-required
            initialValue={requestUser?.email}
          />
          <TextFiled
            title="Senha"
            itemType="password"
            ref={currentPasswordRef}
            aria-required
          />
          <SidedItem>
            <TextFiled
              title="Nova senha"
              itemType="password"
              ref={passwordRef}
              aria-required
            />
            <TextFiled
              title="Confirmar nova senha"
              itemType="password"
              ref={passwordConfirmRef}
              aria-required
            />
          </SidedItem>
          <StyledButton onClick={edit}>Salvar</StyledButton>
        </Container>
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Edit;
