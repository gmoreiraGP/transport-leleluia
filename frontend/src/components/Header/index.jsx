import React from "react";

import { Header as HeaderComponent, Logo, LogoImage } from "./styles";
import Menu from "../Menu";

const Header = () => {
  return (
    <HeaderComponent>
      <Logo>
        <LogoImage src='/logo-wht.png' />
      </Logo>
      <Menu />
    </HeaderComponent>
  );
};

export default Header;
