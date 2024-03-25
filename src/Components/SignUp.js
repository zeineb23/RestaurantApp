import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Login.css";
import LoginIcon from '@mui/icons-material/Login';
import { Navigate } from 'react-router-dom'; // Import Navigate for redirection
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./config";
const strengthLabels = ["Weak", "Medium", "Strong"];

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      strength: '',
      value: '',
      redirectToSignIn: false // State to handle redirection to sign in
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

  handleGoogleLogin = () => {
    signInWithPopup(auth, provider).then((data) => {
      this.setState({ value: data.user.email });
      localStorage.setItem("email", data.user.email);
    });
  };

  handleChange = (event) => {
    const password = event.target.value;
    const strength = this.getStrength(password);
    this.setState({ password, strength });
  };

  handleSignInRedirect = () => {
    this.setState({ redirectToSignIn: true });
  };

  render() {
    const { password, strength, redirectToSignIn } = this.state;
    const strengthClassName = strength ? strength.toLowerCase() : '';

    if (redirectToSignIn) {
      return <Navigate to="/signin" />;
    }

    return (
      <div className='container'>
        <div className='centered'>
          <div className="background"></div>
          <div className="card">
            <div className="logo"><LoginIcon fontSize="large" /></div>
            <h2>Welcome</h2>
            <h6 className='signin-msg'>Sign Up with Google</h6>
           
            <button className="google" onClick={this.handleGoogleLogin}>
              <img src="https://d172mw7nx82lso.cloudfront.net/assets/landing/auth/google-d33f9eb20af60f124ea3de0def9116700064e558db8a63275354162d46ae09cb.png" width="140px" height="40px" />
            </button>
            <br/>
            <div className="footer"> 
              Have an account? 
              <button className="sign" onClick={this.handleSignInRedirect}>Sign in</button>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;