import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Login.css";
import LoginIcon from '@mui/icons-material/Login';
import { signInWithPopup } from "firebase/auth";
import { auth,provider} from "./config"; // Import necessary Firebase modules
const strengthLabels = ["Weak", "Medium", "Strong"];


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      strength: '',
      value: ''
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

  HandleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      this.state.value = data.user.email;
      localStorage.setItem("email", data.user.email)
    })
  }

  handleChange = (event) => {
    const password = event.target.value;
    const strength = this.getStrength(password);
    this.setState({ password, strength });
    // You can perform additional actions here, such as calling a prop function
    // For example: this.props.onChangePassword(password);
  };

  render() {
    const { password, strength } = this.state;
    const strengthClassName = strength ? strength.toLowerCase() : '';

    return (
      <div className='container'>
        <div className='centered'>
          <div className="background"></div>
          <div className="card">
            <div className="logo"><LoginIcon fontSize="large" /></div>
            <h2>Welcome</h2>
            <form className="form">
            <input type="email" placeholder="E-mail" />
              <input type="text" placeholder="Username" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />

              <div className={`strength ${strengthClassName}`}>
                {strength && `${strength} password`}
              </div>
              <button>Sign Up</button>
             </form>
            <button className="google" onClick={this.HandleClick}><img src="https://d172mw7nx82lso.cloudfront.net/assets/landing/auth/google-d33f9eb20af60f124ea3de0def9116700064e558db8a63275354162d46ae09cb.png" width="140px" height="40px" /></button>
            <br/>
            <div className="footer"> Have an account? Sign in <a href="#">here</a>
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
