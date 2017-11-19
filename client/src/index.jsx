import React from 'react';
import renderDom from 'react-dom';
import Home from './components/Home.jsx';


const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Nav = require('./components/Nav.jsx');

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Nav />
          <Route path="/home" component={Home} />
        </div>
      </Router>
    )
  }
}

renderDom.render(<App/>, document.getElementById('app'));