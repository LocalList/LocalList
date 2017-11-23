import React from 'react';
import axios from 'axios';
import JobList from './JobList.jsx'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
  }

  componentDidMount() {
    axios.get('/api', {
      params: {
        userId: this.props.profile.id
      }
    })
    .then((jobs) => {
      this.setState({
        jobs: jobs
      })
    })
    .catch(err => {
      if (err) {
        throw err;
      }
    }
  }

  render() {
    return (
      <div>
        <div><strong>User: </strong><span>{this.props.profile.username}</span>
        <br />
        {/*<strong>Address:</strong><span>{this.props.profile.Address}</span>*/}
        </div>
        <h3>Jobs that you have claimed on or done so far:</h3>
          {/*list all jobs that had been completed or claimed by user
          */}
          <JobList jobs={this.state.jobs} />

          {/*I want to list jobs done by user and jobs posted by user separately
          so will need to add extra filed in jobs table to indicate jobs poster and jobs claimer*/}
      </div>
    )
  }
}

module.exports = Profile;
