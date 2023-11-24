import React, { useCallback, useRef } from 'react';
import { Text } from 'anibook-ui';
import { useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import TextFiled from '../../components/TextField';
import { Container, SidedItem, StyledButton } from './styles';
import Navbar from '../../components/Navbar';
import api from '../../services/api';
import { passwordCrypto } from '../../utils/formFields';
import 'react-toastify/dist/ReactToastify.css';
import showToast, { showToastWithCallback } from '../../utils/Toast';
import { useLogin } from '../../hooks/login';
import useQuery from '../../utils/useQuery';

const Login = () => {
  const history = useHistory();
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const query = useQuery();
  const { setUser } = useLogin();

  const validate = () => {
    if (userNameRef.current?.value === '' || !userNameRef.current?.value) {
      showToast('warn', 'Informe um nome');
      return false;
    }

    if (passwordRef.current?.value === '' || !passwordRef.current?.value) {
      showToast('warn', 'Informe uma senha');
      return false;
    }

    return true;
  };

  const login = useCallback(
    async () => {
      try {
        if (validate()) {
          const res = await api.post(
            '/graph/report/login',
            {
              name: userNameRef.current?.value,
              email: '',
              password: passwordCrypto(passwordRef.current?.value || '')
            }
          );

          if (res.status === 204) {
            showToastWithCallback('success', 'Login bem sucedido', () => {
              setUser({
                name: userNameRef.current?.value || '',
                email: '',
                password: passwordCrypto(passwordRef.current?.value || '')
              });
              if (query.has('origin')) {
                history.replace(`/${query.get('origin')}`);
              } else {
                history.push('/');
              }
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
    [history, setUser, query]
  );

  const goToSingUp = () => {
    history.push(`/singup?origin=${query.get('origin')}`);
  };
  return (
    <>
      <Navbar />
      <Container>
        <Text
          text="Login"
          props={[
            { name: 'text-transform', value: 'capitalize' },
            { name: 'font-size', value: '2rem' },
            { name: 'font-weight', value: '600' },
            { name: 'padding-bottom', value: '1.25rem' }
          ]}
          lang="pt-br"
        />
        <TextFiled title="Nome de usuário" itemType="text" ref={userNameRef} aria-required />
        <TextFiled title="Senha" itemType="password" ref={passwordRef} aria-required />
        <SidedItem>
          <StyledButton onClick={goToSingUp} secondary>Cadastre-se</StyledButton>
          <StyledButton onClick={login}>Login</StyledButton>
        </SidedItem>
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

export default Login;
