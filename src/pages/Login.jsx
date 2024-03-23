import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import AuthLogin from '../components/AuthLogin';

const Login = () => {
  return (
    <Fragment>
      <Navbar route='login' />
      <AuthLogin />
    </Fragment>
  )
}

export default Login