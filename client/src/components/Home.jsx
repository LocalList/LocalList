import React from 'react';
import { NavLink } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handymanSearchText: '',
    };

    this.updateHandymanSearch = this.updateHandymanSearch.bind(this);
  }

  updateHandymanSearch(e) {
    this.setState({
      handymanSearchText: e.target.value,
    });
  }

  handymanSearch() {
    // TODO
  }

  render() {
    return (
      <div>
        <h1>Local List</h1>
        <div>
          <h3>Have a job you would like done?</h3>
          <NavLink activeClassName="active" to="/jobs/create"><button>Post a Job</button></NavLink>
        </div>
        <div>
          <h3>Are you a handyman?</h3>
          <h5>Enter a location to search jobs near you:</h5>
          <input onChange={this.updateHandymanSearch} type="text" />
          <button onClick={this.handymanSearch}>Go!</button>
        </div>
      </div>
    );
  }
}

module.exports = Home;
