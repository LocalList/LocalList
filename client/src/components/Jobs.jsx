import React from 'react';
import JobList from './JobList.jsx';

class Jobs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <JobList jobs={this.props.jobs} />
    )
  }
}

module.exports = Jobs;