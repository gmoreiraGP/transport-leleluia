import React from "react";

import { Menu as MenuComponent } from "./styles";

import { isLogged } from "../../services/auth";

const Menu = () => {
  return (
    <MenuComponent>
      <ul>
        <li>
          <a href='/'>HOME</a>
        </li>
        <li>
          <a href='/rastreio'>Rastreio</a>
        </li>
        {!!isLogged() ? (
          <li>
            <a href='/dashboard'>
              {/* <img src='/login.png' alt='iconLogin' /> */}
              DASHBOARD
            </a>
          </li>
        ) : (
          <li>
            <a href='/login'>
              {/* <img src='/login.png' alt='iconLogin' /> */}
              LOGIN
            </a>
          </li>
        )}
      </ul>
    </MenuComponent>
  );
};

export default Menu;
