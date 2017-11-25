import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handymanSearch: ''
    }
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

  handleClick() {
    this.props.handleHandyClick(this.state.handymanSearch);
  }

  render() {
    return (
      <div>
        <h1>Local List</h1>
        <div>
          <h3>Have a job you would like done?</h3>
          <h5>Enter a location to post a job in your community:</h5>
          <input onChange={this.props.posterSearch} type="text" />
          <button>Go!</button>
        </div>
        <div>
          <h3>Are you a handyman?</h3>
          <h5>Enter a location to search jobs near you:</h5>
          <input onChange={this.handymanSearch.bind(this)} type="text" />
          <button onClick={this.handleClick.bind(this)}>Go!</button>
        </div>
      </div>
    )
  }
}

module.exports = Home;