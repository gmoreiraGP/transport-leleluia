import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import {AuthContext} from '../../context/authContext'

import { getJwt } from '../../services/getJwt';


const AuthComponent = (props) => {
  const {user, token} = useContext(AuthContext)

  useEffect(() => {
    getUser()
  })

  const getUser = () => {    
    if (!user.id || !token) {
      props.history.push('/login')
    } else{
      axios.get(`http:/locahost:1337/users/${user.id}`, { headers: { Authorization: getJwt() } }).then(res => {
        console.log(res.data)
      });
    }
  }
  return <div>{props.children}</div>
}

export default withRouter(AuthComponent);