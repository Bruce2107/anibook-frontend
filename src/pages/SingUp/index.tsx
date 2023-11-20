import React, { useCallback, useRef, useState } from 'react';
import { Text } from 'anibook-ui';
import { useHistory } from 'react-router-dom';
import TextFiled from '../../components/TextField';
import { Container, PasswordFields, StyledButton } from './styles';
import Navbar from '../../components/Navbar';
import api from '../../services/api';
import { validEmail, passwordCrypto } from '../../utils/formFields';

const SingUp = () => {
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();
  const userNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  const validate = () => {
    if (userNameRef.current?.value === '' || !userNameRef.current?.value) {
      console.log('preencha o nome');
      return false;
    }

    if (emailRef.current?.value === '' || !emailRef.current?.value) {
      console.log('preencha o email');
      return false;
    }

    if (!validEmail(emailRef.current.value)) {
      console.log('preencha um email valido');
      return false;
    }

    if (passwordRef.current?.value === '' || !passwordRef.current?.value) {
      console.log('preencha a senha');
      return false;
    }

    if (passwordConfirmRef.current?.value === '' || !passwordConfirmRef.current?.value) {
      console.log('preencha a senha de confirmação');
      return false;
    }

    if (passwordConfirmRef.current.value !== passwordRef.current.value) {
      console.log('senhas n conferem');
      return false;
    }
    console.log('valido');

    return true;
  };

  const singup = useCallback(
    async () => {
      try {
        if (validate()) {
          setLoading(true);
          const res = await api.post(
            '/graph/user',
            {
              name: userNameRef.current?.value,
              email: emailRef.current?.value,
              password: passwordCrypto(passwordRef.current?.value || '')
            }
          );

          if (res.status === 201) {
            console.log('criado');
          }
        } else {
          setLoading(false);
        }

        // history.replace('/search?page=1');
      } catch (error: any) {
        if (!error.response.status) history.push('request/fail');
        else if (error.response.status === 409) {
          console.log('conflito');
        } else {
          history.push(`/request/fail?status=${error.response.status}`);
        }
      } finally {
        setLoading(false);
      }
    },
    [history]
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
    </>
  );
};

export default SingUp;
