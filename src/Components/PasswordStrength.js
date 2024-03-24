import React, { Component } from "react";

const strengthLabels = ["weak", "medium", "medium", "strong"];

class PasswordStrength extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strength: ""
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

  handleChange = (event) => {
    const password = event.target.value;
    const strength = this.getStrength(password);
    this.setState({ strength });
    this.props.onChange(password);
  };

  render() {
    const { placeholder } = this.props;
    const { strength } = this.state;

    return (
      <div>
        <input
          name="password"
          spellCheck="false"
          className="control"
          type="password"
          placeholder={placeholder}
          onChange={this.handleChange}
        />
        <div className={`bars ${strength}`}>
          <div></div>
        </div>
        <div className="strength">{strength && `${strength} password`}</div>
      </div>
    );
  }
}

export default PasswordStrength;
