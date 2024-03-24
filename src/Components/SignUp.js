import React, { useEffect, useState } from 'react'
import { auth, provider } from './config'
import { signInWithPopup } from 'firebase/auth'
import '../CSS/SignIn_Up.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faLock,
  faChevronRight,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'

function SignUp () {
  const [value, setValue] = useState('')
  const handleClick = () => {
    signInWithPopup(auth, provider).then(data => {
      setValue(data.user.email)
      localStorage.setItem('email', data.user.email)
    })
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'))
  })

  return (
        <div className='screen'>
          <div className='screen__content'>
            <form className='login'>
              <div className='signIn'>
                <h1>Registration</h1>
              </div>
              <div className='login__field'>
                <FontAwesomeIcon icon={faUser} />
                <input
                  type='text'
                  className='login__input'
                  placeholder='Username'
                />
              </div>
              <div className='login__field'>
                <FontAwesomeIcon icon={faEnvelope} />
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
              <div className='login__field'>
                <FontAwesomeIcon icon={faLock} />
                <input
                  type='password'
                  className='login__input'
                  placeholder='Retype password'
                />
              </div>
              <button className='button login__submit'>
                <div id='login__'>
                  <span className='button__text'>Sign Up Now</span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </button>
              <div className='create'>
                <a className='signup' href='/signin'>
                  I'm already signed up
                </a>
              </div>
            </form>

          </div>
          <div className='screen__background'>
            <span className='screen__background__shape screen__background__shape4'></span>
            <span className='screen__background__shape screen__background__shape3'></span>
            <span className='screen__background__shape screen__background__shape2'></span>
            <span className='screen__background__shape screen__background__shape1'></span>
          </div>
        </div>
  )
}
export default SignUp
