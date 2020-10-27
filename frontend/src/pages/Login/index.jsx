import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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


const Login = () => {
  const [loading, setLoading] = useState(false)
  const history = useHistory();
 const handleSubmit = (data) => {
    axios.post('/auth', data).then(res => {
        return(
          localStorage.setItem('token', res.data.token),
          localStorage.setItem('user', JSON.stringify(res.data.user)),
          function redirect(){
            setTimeout(() => {
              history.push('/dashboard')
              setLoading(!loading)
            },1000)
          }(),
          function clear(redirect){
            clearTimeout(redirect)
            setLoading(!loading)
          }
        )
      })
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
              <Input name='email' placeholder="Email" />
              <Input type='password' name='password' placeholder="Senha" />
              <button type='submit'>{loading ? 'Carregando' : 'Entrar'}</button>
            </Form>
          </WrapperForm>
        </Box>
      </Container>
    </Main>
  );
};

export default Login;
