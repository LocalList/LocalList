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
          <Home posterSearch={this.posterSearch} handymanSearch={this.handymanSearch} />
          <Route path="/signup" component={Signup} />
        </div>
      </Router>
    )
  }
}

renderDom.render(<App/>, document.getElementById('app'));