import React, { useCallback, useEffect, useRef } from 'react';
import { Text } from 'anibook-ui';
import { useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import TextFiled from '../../components/TextField';
import { Container, PasswordFields, StyledButton } from './styles';
import Navbar from '../../components/Navbar';
import api from '../../services/api';
import { validEmail, passwordCrypto } from '../../utils/formFields';
import 'react-toastify/dist/ReactToastify.css';
import showToast, { showToastWithCallback } from '../../utils/Toast';
import useQuery from '../../utils/useQuery';
import setPageTitle from '../../utils/setPageTitle';

const SingUp = () => {
  const history = useHistory();
  const userNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const query = useQuery();

  const validate = () => {
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

    return true;
  };

  const cleanFields = () => {
    [userNameRef, emailRef, passwordConfirmRef, passwordRef].forEach((i) => {
      if (i.current?.value) i.current.value = '';
    });
  };

  useEffect(() => {
    setPageTitle('Cadastro');
  }, []);

  const singup = useCallback(
    async () => {
      try {
        if (validate()) {
          const res = await api.post(
            '/graph/user',
            {
              name: userNameRef.current?.value,
              email: emailRef.current?.value,
              password: passwordCrypto(passwordRef.current?.value || '')
            }
          );

          if (res.status === 201) {
            showToastWithCallback('success', 'Usuário criado', () => {
              if (query.has('origin')) {
                history.replace(`/login?origin=${query.get('origin')}`);
              } else {
                history.push('/');
              }
            });
            cleanFields();
          }
        }
      } catch (error: any) {
        if (!error.response.status) history.push('request/fail');
        else if (error.response.status === 409) {
          showToast('error', 'Usuário já registrado');
        } else {
          history.push(`/request/fail?status=${error.response.status}`);
        }
      }
    },
    [history, query]
  );

  return (
    <>
      <Navbar />
      <Container>
        <Text
          text="Cadastro"
          props={[
            { name: 'text-transform', value: 'capitalize' },
            { name: 'font-size', value: '2rem' },
            { name: 'font-weight', value: '600' },
            { name: 'padding-bottom', value: '1.25rem' }
          ]}
          lang="pt-br"
        />
        <TextFiled title="Nome de usuário" itemType="text" ref={userNameRef} aria-required />
        <TextFiled title="E-mail" itemType="email" ref={emailRef} aria-required />
        <PasswordFields>
          <TextFiled title="Senha" itemType="password" ref={passwordRef} aria-required />
          <TextFiled title="Confirme a senha" itemType="password" ref={passwordConfirmRef} aria-required />
        </PasswordFields>
        <StyledButton onClick={singup}>Cadastrar</StyledButton>
      </Container>
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

export default SingUp;
