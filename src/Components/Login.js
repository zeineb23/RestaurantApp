import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Login.css";
import { Navigate } from 'react-router-dom'; // Import Navigate instead of Redirect
import LoginIcon from '@mui/icons-material/Login';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./config"; 
const strengthLabels = ["Weak", "Medium", "Strong"];

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      strength: '',
      redirectToSignUp: false // Move redirectToSignUp state here
    };
  }

  getStrength(password) {
    let indicator = -1;
    if (/[a-z]/.test(password)) indicator++;
    if (/[A-Z]/.test(password)) indicator++;
    if (/\d/.test(password)) indicator++;
    if (/[^a-zA-Z0-9]/.test(password)) indicator++;
    if (password.length >= 16) indicator++;
    return strengthLabels[indicator];
  }

  handleSignUpClick = () => {
    this.setState({ redirectToSignUp: true });
  };

  handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // User signed in successfully
        const user = result.user;
        console.log('User signed in with Google:', user);
        // Optionally, you can redirect the user to another page
        localStorage.setItem("email", user.email);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error signing in with Google:', error);
      });
  };

  render() {
    const { redirectToSignUp } = this.state;

    if (redirectToSignUp) {
      return <Navigate to="/signup" />; // Use Navigate instead of Redirect
    }

    return (
      <div className='container'>
        <div className='centered'>
          <div className="background"></div>
          <div className="card">
            <div className="logo"><LoginIcon fontSize="large" /></div>
            <h2>Welcome Back</h2>
            
            <h6 className='signin-msg'>Sign In with Google</h6>
              <button className="google" onClick={this.handleGoogleLogin}>
                <img src="https://d172mw7nx82lso.cloudfront.net/assets/landing/auth/google-d33f9eb20af60f124ea3de0def9116700064e558db8a63275354162d46ae09cb.png" width="140px" height="40px" />
              </button>
            <div className="footer"> Need an account? <button className="sign" onClick={this.handleSignUpClick}>Sign Up</button>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;