import React, { Fragment } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useQuiz } from '../context/quizContext';
import { useAuth } from '../context/authContext';

const Navbar = ({route}) => {

  const navigate = useNavigate();
  const {quizDispatch} = useQuiz();
  const {token  :t,authDispatch} = useAuth();
  const token = localStorage.getItem('token') || t;

  const handleEndGameClick = () =>{
    quizDispatch({
      type : "QUIT"
    })
  }

  const logOutHandler = () =>{
    if(token){
      localStorage.clear();
      quizDispatch({
        type : 'QUIT'
      })
      authDispatch({
        type : 'CLEAR_TOKEN'
      })
    }
    navigate('/');
  }

  return (
    
    <header className='heading d-flex grow-shrink-basis align-center'>
      <div className='heading-title-icon d-flex grow-shrink-basis align-center'>
          <h1 className="heading-title">
            {
              route === "home" || route === "login" ? (<Link to="/" className="link">Quizify</Link>) : "Quizify"
            }
          </h1>
      </div>
      <nav className="navigation">
        <ul className="list-non-bullet">
          {
            route === 'home' && (<li><Link to='login' className="link cursor" onClick={logOutHandler}>{token ? "Log Out" : "Log In"}</Link></li>)
          }
          {
            route === 'result' && 
              <Fragment>
                <li  className="list-item-inline">
                  <Link to='/' className="link cursor" onClick={handleEndGameClick}>Home</Link>
                </li>
                <li className="list-item-inline">
                  <Link to='/' className="link cursor" onClick={logOutHandler}>Log Out</Link>
                </li>
              </Fragment>  
          }
        </ul>
      </nav>
    </header>
  )
}

export default Navbar