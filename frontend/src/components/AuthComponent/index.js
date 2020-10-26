import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { getJwt } from '../../services/getJwt';
import api from '../../services/api'

const AuthComponent = (props) => {
  const [user, setUser] = useState([])
  const [token, setToken] = useState([])
  const [storage, setStorage] = useState([])

  useEffect(() => {
    getUser()
  },[])

  const getUser = () => {
    const userId = JSON.parse(localStorage.getItem('user'))
    const jwt = getJwt();
    
    if (!userId || !jwt) {
      props.history.push('/login')
    } else{
      axios.get(`http:/locahost:1337/users/${userId.id}`, { headers: { Authorization: getJwt() } }).then(res => {
        setUser(res.data)
      });
    }
  }
  return <div>{props.children}</div>
}

export default withRouter(AuthComponent);