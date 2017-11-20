import React from 'react';
import renderDom from 'react-dom';
import Home from './components/Home.jsx';


const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Nav = require('./components/Nav.jsx');
const Signup = require('./components/Signup.jsx');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      value: ''
    }

    this.search = this.search.bind(this);
  }
    
  search(e) {
    console.log('here--->', e.target.value)
    this.setState({
      value: e.target.value 
    });
  }

  render () {
    return (
      <Router>
        <div>
          <Nav />
          <div>
            <h1>Have a job you would like done?</h1>
            <h3>Enter a location to post your job:</h3>
            <input type="text" />
            <button>Go!</button>
          </div>
          <div>
            <h1>Are you a handyman?</h1>
            <h3>Enter a location to search jobs near you:</h3>
            <input onChange={this.search} type="text" />
            <button>Go!</button>
          </div>
          <Route path="/signup" component={Signup} />
        </div>
      </Router>
    )
  }
}

renderDom.render(<App/>, document.getElementById('app'));