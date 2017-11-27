import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    if (this.props.user) {
      return (
        <Redirect to={{ pathname: '/' }} />
      );
    }

    return (
      <div>
        <div>
          Username:
          <input type="text" name="username" onChange={this.handleChange} />
        </div>
        <div>
          Password:
          <input type="password" name="password" onChange={this.handleChange} />
        </div>
        <div>
          <button
            onClick={() => {
              this.props.signup({
                usernme: this.state.username,
                password: this.state.password,
              });
            }}
          >
          Sign Up
          </button>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  signup: PropTypes.func.isRequired,
};

export default Signup;
