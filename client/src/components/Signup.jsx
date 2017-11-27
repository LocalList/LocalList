import React from 'react';
import { Redirect } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    if (this.props.user) {
      return (
        <Redirect to={{pathname: '/'}}/>
      );
    }

    return (
      <div>
        {`Prop: ${this.props.someProp}`}
        <div>
          <label>Username:</label>
          <input type="text" name="username" onChange={this.handleChange}/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" onChange={this.handleChange}/>
        </div>
        <div>
          <button onClick={() => {this.props.signup(this.state)}}>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default Signup;
