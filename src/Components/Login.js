import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Login.css";
import { Navigate } from 'react-router-dom'; // Import Navigate instead of Redirect
import LoginIcon from '@mui/icons-material/Login';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "./config"; 
const strengthLabels = ["Weak", "Medium", "Strong"];

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        strength: '',
        value: '',
        redirectToSignIn: false ,// State to handle redirection to sign in
        redirectToHome: false // State to handle redirection to sign in
      };// Move redirectToSignUp state here
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem('user', JSON.stringify(user));
      this.setState({ redirectToHome: true }); 
    } catch (error) {
      console.log(error);
    }
  };

  handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log('User signed in with Google:', user);
        localStorage.setItem("email", user.email);
        this.setState({ redirectToHome: true }); 
      })
      .catch((error) => {
        // Handle errors
        console.error('Error signing in with Google:', error);
      });
  };

  render() {
    const { email, password, redirectToSignUp , redirectToHome} = this.state;

    if (redirectToSignUp) {
      return <Navigate to="/signup" />; // Use Navigate instead of Redirect
    }
    if (redirectToHome) {
      return <Navigate to="/" />;
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
              <form onSubmit={this.handleSubmit} className="form"> 
                <input type="email" placeholder="Username" value={email} onChange={(e) => this.setState({ email: e.target.value })} /> 
                <input 
                  type="password" 
                  placeholder="Password"
                  value={password}
                  onChange={(e) => this.setState({ password: e.target.value })} 
                />
                
                <button type="submit">Sign In</button> 
            </form>
            <div className="footer"> Need an account? <button onClick={this.handleSignUpClick}>Sign Up</button>
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