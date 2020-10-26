import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { getJwt } from '../../services/getJwt';
import api from '../../services/api'

const AuthComponent = (props) => {
  const   [user, setUser] = useState([])

  useEffect(() => {
    getUser()
  },[])

  const getUser = () => {
    const jwt = getJwt();
    if (!jwt) {
      setUser([]);
    }

    api.get('/auth', { headers: { Authorization: getJwt() } }).then(res => {
      setUser(res.data)
    });

  }
  return !user ? <div>Loading...</div> : user === null ? props.history.push('/login') : <div>{props.children}</div>
}

export default withRouter(AuthComponent);