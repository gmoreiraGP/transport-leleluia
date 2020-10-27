import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import AuthProvider from './context/authContext'
import theme from "./styles/theme";

import Layout from "./layout";

const App = () => {

  return (
    <AuthProvider>
    <ThemeProvider theme={theme}>
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
