import React, { useRef } from 'react';
import { Text } from 'anibook-ui';
import TextFiled from '../../components/TextField';
import { Container, PasswordFields } from './styles';
import Navbar from '../../components/Navbar';

const SingUp = () => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
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
          ]}
          lang="pt-br"
        />
        <TextFiled title="username" itemType="text" ref={userNameRef} />
        <TextFiled title="email" itemType="email" ref={emailRef} />
        <PasswordFields>
          <TextFiled title="password" itemType="password" ref={passwordRef} />
          <TextFiled title="password" itemType="password" ref={passwordRef} />
        </PasswordFields>
      </Container>
    </>
  );
};

export default SingUp;
