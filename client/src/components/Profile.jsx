import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import JobList from './JobList';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doerJobs: [],
      posterJobs: [],
      averageRating: 0,
    };
  }

  componentDidMount() {
    if (this.props.user) {
      axios.get('/api/jobs')
        .then((jobs) => {
          let doerJobs = jobs.data.filter(job => {
            return job.doerId === this.props.user.id;
          });
          let posterJobs = jobs.data.filter(job => {
            return job.userId === this.props.user.id;
          });

          this.setState({
            doerJobs: doerJobs,
            posterJobs: posterJobs,
          });
        })
        .catch(err => {
          if (err) {
            throw err;
          }
        });

      axios.get(`/api/reviews?doerId=${this.props.user.id}`)
        .then((response) => {
          this.setState({
            averageRating: response.data.averageRating,
          });
        });
    }
  }

  render() {
    if (this.props.user === null) {
      return <Redirect to={{ pathname: '/login' }} />
    }
    return (
      <div>
        <div><strong>User: </strong><span>{this.props.user ? this.props.user.username : 'Jinxuan'}</span>
        <br />
        {/*<strong>Address:</strong><span>{this.props.profile.Address}</span>*/}
        <div>{this.state.averageRating === null ? 'No rating yet!' : `Rating: ${this.state.averageRating}` }</div>
        </div>
        <h3>Jobs that you have claimed on or done so far:</h3>
        <JobList user={this.props.user} jobs={this.state.doerJobs} />

        <h3>Jobs that you have posted</h3>
        <JobList user={this.props.user} jobs={this.state.posterJobs} />
      </div>
    )
  }
}

module.exports = Profile;