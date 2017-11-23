import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import renderDom from 'react-dom';
import axios from 'axios';

import { PropsRoute, PrivateRoute } from './components/RouteHelpers.jsx';
import Home from './components/Home.jsx';
import Nav from './components/Nav.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Logout from './components/Logout.jsx';
import CreateJob from './components/CreateJob.jsx';
import Profile from './components/Profile.jsx';

//simple page for testing / debugging
const Protected = (props) => <h3>What is good, {props.user.username}?</h3>


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      posterSearch: '',
      handymanSearch: ''
    }

    this.authenticate();

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.signup = this.signup.bind(this);
    this.posterSearch = this.posterSearch.bind(this);
    this.handymanSearch = this.handymanSearch.bind(this);
  }

  authenticate() {
    return axios.get('/api/auth')
    .then(res => {
      if (res.data) {
        this.setState({
          user: res.data
        });
      }
    })
  }

  login({ username, password }) {
    return axios.post('/api/login', { username, password })
    .then(res => {
      this.setState({
        user: res.data
      })
    })
    .catch(err => {
      if (err && err.response && (err.response.status === 400 || err.response.status === 401)) {
        //flash message
        console.error(err.response.data);
      } else {
        throw err;
      }
    });
  }

  logout() {
    this.setState({
      user: null
    })
    return axios.get('/api/logout');
  }

  signup({ username, password }) {
    return axios.post('/api/signup', { username, password })
    .then(res => {
      this.setState({
        user: res.data
      })
    })
    .catch(err => {
      if (err && err.response && (err.response.status === 400)) {
        //flash message
        console.error(err.response.data);
      } else {
        throw err;
      }
    });
  }

  posterSearch(e) {
    this.setState({
      posterSearch: e.target.value
    });
  }
    
  handymanSearch(e) {
    this.setState({
      handymanSearch: e.target.value 
    });
  }

  render () {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path='/' posterSearch={this.posterSearch} handymanSearch={this.handymanSearch} component={Home} />
          <Route path="/job/creation" component={CreateJob} />
          <PropsRoute path="/profile" component={Profile} user={this.state.user} />
          <PropsRoute path="/login" component={Login} user={this.state.user} login={this.login}/>
          <PropsRoute path="/signup" component={Signup} user={this.state.user} signup={this.signup}/>
          <PrivateRoute path="/logout" component={Logout} user={this.state.user} logout={this.logout}/>
          <PrivateRoute path="/protected" component={Protected} user={this.state.user}/>
        </div>
      </Router>
    )
  }
}

renderDom.render(<App/>, document.getElementById('app'));