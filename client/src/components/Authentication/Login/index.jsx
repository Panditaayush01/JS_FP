import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <>
      <Header title="Login">
        <p className="text-light">
          Welcome Shaun! Login and view our latest worship
        </p>
      </Header>

      <Container>

        <LoginForm />
      </Container>
    </>
  );
}

export default Login;