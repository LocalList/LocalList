import React from 'react';
import MarkButton from './MarkButton';

class Job extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>{this.props.job.name}</h4>
        <p>{this.props.job.location}</p>
        <button onClick={() => {props.onClaimed(props.job)} }>Claim this job!</button>
        <MarkButton user={this.props.user} job={this.props.job}/>
      </div>
    );
  }
}

export default Job;
