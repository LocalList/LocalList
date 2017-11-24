import React from 'react';
import axios from 'axios';

// maybe doesnt have to be a stateful component
// could possibly attach this component to JobList

class CreateJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    // stops full refresh of page
    e.preventDefault();

    console.log(e);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          Job name:
          <input type="text" name="name" />
          Job location:
          <input type="text" name="location" />
          <button>Post my job</button>
        </form>
      </div>
    );
  }
}


module.exports = CreateJob;