import React from 'react';
import Job from './Job.jsx';

class JobList extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        {this.props.jobs.map((job) => <Job user={this.props.user} onClaimed={this.props.onClaimed} job={job} key={job.id} />) }
      </div>
    )
  }
}

export default JobList;
