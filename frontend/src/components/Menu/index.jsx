import React, {useContext} from "react";

import {AuthContext} from '../../context/authContext'
import { Menu as MenuComponent } from "./styles";


const Menu = () => {
  const {auth, token} = useContext(AuthContext)

  return (
      <MenuComponent>
        <ul>
          <li>
            <a href='/'>HOME</a>
          </li>
          <li>
            <a href='/rastreio'>Rastreio</a>
          </li>
          <li>
            {auth || token ? <a href="/dashboard">Dashboard</a> : <a href="/login">Login</a>}
          </li>
        </ul>
      </MenuComponent> 
  );
};

export default Menu;
