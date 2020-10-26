import React, { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Form } from "@unform/web";
import { useHistory } from "react-router-dom";

import {
  Main,
  Container,
  Box,
  Wrapper,
  Typography,
  WrapperForm
} from "./styles";
import Input from "../../components/Input";

import { login } from "../../services/auth";

const Login = props => {
  const [auth, setAuth] = useState(false);
  const [loadinf, setLoading] = useState(true);

  // const history = useHistory();

  // useEffect(() => {
  //   const isAuth = !!localStorage.getItem("auth")
  //     ? setAuth(true)
  //     : setAuth(false);

  //   return isAuth;
  // });

  // useEffect((data) => {
  //   const isLogin = login(data)

  //   await login(data);
  //   setAuth(true)
  // }, [])

  const fetchData = async data => {
    try {
      const isLogin = await login(data);
      setLoading(false);
      return isLogin;
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const formRef = useRef(null);

  const isAuth = () => {
    const hasToken = localStorage.getItem("token");
    if (!hasToken) {
      setAuth(false);
    }
    return hasToken;
  };

  async function handleSubmit(data) {
    setLoading(true);
    const authData = fetchData(data);
    console.log(authData);

    if (authData) {
      const timer = setTimeout(() => {
        props.history.push("/dashboard", data);
      }, 1000);
      return () => clearTimeout(timer);
    }
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
            <Form ref={formRef} onSubmit={handleSubmit}>
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
