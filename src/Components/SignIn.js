import React, { useEffect, useState } from "react";
import {auth,provider} from "./config";
import {signInWithPopup} from "firebase/auth";
import Home from "./Home";
import '../CSS/SignIn_Up.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook , faGoogle } from "@fortawesome/free-brands-svg-icons"
import {faUser,faLock,faChevronRight} from "@fortawesome/free-solid-svg-icons"



const SignIn = () => {
  const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

  return (
  
 <div>
      <div className='container'>
        <div className='screen'>
          <div className='screen__content'>
            <form className='login'>
              <div className='signIn'>
                <h1>Sign In</h1>
              </div>
              <div className='login__field'>
                <FontAwesomeIcon icon={faUser} />
                <input
                  type='text'
                  className='login__input'
                  placeholder='User name / Email'
                />
              </div>
              <div className='login__field'>
                <FontAwesomeIcon icon={faLock} />
                <input
                  type='password'
                  className='login__input'
                  placeholder='Password'
                />
              </div>
              <button className='button login__submit'>
                <div id='login__'>
                  <span className='button__text'>Log In Now</span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </button>
              <div className='sso_text'>
                <h2>Or sign in with:</h2>
              </div>
              <p>
              <a className='twitter-before'>
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              {value ? (
                <Home />
              ) : (
                <button className='twitter' onClick={handleClick}>
                  Signin With Google
                </button>
              )}
              </p>
            </form>
            <div className='social-login'>
              <div className='social-icons'>
                <a href='#' className='social-login__icon fab fa-instagram'></a>
                <a href='#' className='social-login__icon fab fa-facebook'></a>
                <a href='#' className='social-login__icon fab fa-twitter'></a>
              </div>
            </div>
          </div>
          <div className='screen__background'>
            <span className='screen__background__shape screen__background__shape4'></span>
            <span className='screen__background__shape screen__background__shape3'></span>
            <span className='screen__background__shape screen__background__shape2'></span>
            <span className='screen__background__shape screen__background__shape1'></span>
          </div>
        </div>
      </div>
    </div>

  );
}

export default SignIn;
