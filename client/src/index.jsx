import React from 'react';
import renderDom from 'react-dom';
import Home from './components/Home.jsx';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
const Nav = require('./components/Nav.jsx');
const Signup = require('./components/Signup.jsx');
import Login from './components/Login.jsx';

const auth = {
  user: null,
  authenticate(cb) {
    this.user = {id: 100, username: 'Jin'};
    setTimeout(cb, 100) // fake async
  },
  logout(cb) {
    this.user = null
    setTimeout(cb, 100)
  }
}

//move to new file

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.user ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const Protected = () => <h3>Protected</h3>

//end

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      posterSearch: '',
      handymanSearch: ''
    }

    this.posterSearch = this.posterSearch.bind(this);
    this.handymanSearch = this.handymanSearch.bind(this);
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
          <PropsRoute path="/login" component={Login} someProp={'hello'} login={() => { auth.authenticate(console.log('logged in')); }}/>
          <Route path="/signup" component={Signup}/>
          <PrivateRoute path="/protected" component={Protected}/>
        </div>
      </Router>
    )
  }
}

renderDom.render(<App/>, document.getElementById('app'));