import React from "react";

import { Container } from "./styles";
import Routes from "./Routes";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalStyle from "../styles/global";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Routes />
      <Footer />
      <GlobalStyle />
    </Container>
  );
};

export default Layout;
