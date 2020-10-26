import React, {useEffect, useState} from "react";

import { Menu as MenuComponent } from "./styles";


const Menu = () => {
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    const verifyToken = () => localStorage.getItem("token")
    return setIsLogged(verifyToken)
  },[])

  return (
    <MenuComponent>
      <ul>
        <li>
          <a href='/'>HOME</a>
        </li>
        <li>
          <a href='/rastreio'>Rastreio</a>
        </li>
        {isLogged && <li><a href="/dashboard">Dashboard</a></li>}
        {!isLogged && <li><a href="/Login">Login</a></li>}
      </ul>
    </MenuComponent>
  );
};

export default Menu;
