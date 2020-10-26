import React from "react";
import { Helmet } from "react-helmet";
import { Form } from "@unform/web";
import axios from "axios";

import {
  Main,
  Container,
  Box,
  Wrapper,
  Typography,
  WrapperForm
} from "./styles";
import Input from "../../components/Input";


const Login = props => {

 const handleSubmit = (data) => {
    axios.post('/auth', data).then(res => {
      return(
        localStorage.setItem('token', res.data.token),
        localStorage.setItem('user', JSON.stringify(res.data.user)),
        props.history.push('/dashboard')
    )})
  }

  return (
    <Main>
      <Helmet>
        <title>LOGIN | Leleluia Transportes</title>
      </Helmet>
      <Container>
        <Wrapper>
          <img src='/drive.png' alt='Drive' />
        </Wrapper>
        <Box>
          <Typography>
            <h1>Login</h1>
            <p>Faça seu login para continuar</p>
          </Typography>
          <WrapperForm>
            <Form  onSubmit={handleSubmit}>
              <Input name='email' />
              <Input type='password' name='password' />
              <button type='submit'>Entrar</button>
            </Form>
          </WrapperForm>
        </Box>
      </Container>
    </Main>
  );
};

export default Login;
