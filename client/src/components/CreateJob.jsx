import React from 'react';

// maybe doesnt have to be a stateful component 
// could possibly attach this component to JobList

class CreateJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    // stops full refresh of page
    e.preventDefault();

    const job = e.target.job.value;

    if (job) {
      // add to JobList for that particular location
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="job"/>
          <button>Post my job</button>
        </form>
      </div>
    )
  }
}


module.exports = CreateJob;