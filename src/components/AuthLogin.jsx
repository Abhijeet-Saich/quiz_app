import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import loginHandler from '../services/authService';
import '../css_files/authLogin.css';

const AuthLogin = () => {

  const navigate = useNavigate();
  const {username,password,token,authDispatch} = useAuth();

  const handleCredChange = (type,val) =>{
    
    if(type === "username"){
        authDispatch({
            type  : "USERNAME",
            payload : val
        })

    }else if(type === "password"){
        authDispatch({
            type  : "PASSWORD",
            payload : val
        })
    }else{

    }
  }

  const handleLoginClick = async (e) =>{
    e.preventDefault();
    const token = await loginHandler(username,password);
    console.log(token)
    if(token){
        navigate('/');
    }
    authDispatch({
        type : "TOKEN",
        payload : token
    })
    authDispatch({
        type : "CLEAR_CREDENTIALS"
    })
  }

  const handleTestCredentialsClick = () => {
    // const token = loginHandler("prakashsakari", "ps12345");
    authDispatch({
        type: "TEST",
        payload: {
            ID : "quiz_user",
            passcode : "password"
            }
        })
    // if(token){
    //     navigate("/");
    //     }
    }

  return (
    <div className='d-grid'>
        <div className="login-auth d-flex direction-column justify-center">
            <h2 className="auth-title">LogIn</h2>
            <form onSubmit={handleLoginClick}>
                <div className="form-container">
                    <label className="form-label">Username</label>
                    <input value={username}  className="form-input lh-ls" onChange={(e)=>handleCredChange("username",e.target.value)} placeholder='quiz_user  <-- ID'/>
                </div>
                <div className="form-container">
                    <label className="form-label">Password</label>
                    <input value={password}  className="form-input lh-ls" onChange={(e)=>handleCredChange("password",e.target.value)} placeholder='password  <-- passcode'  />
                </div>
                <div className="cta">
                    <button className="button login-btn btn-margin cursor sign-up-btn">Log In</button>
                </div>
            </form>
            <div >
                <button className="button login-btn btn-outline-primary btn-margin sign-up-btn" onClick={handleTestCredentialsClick}>Log In with test credentials</button>
            </div>
        </div>
    </div>
  )
}

export default AuthLogin