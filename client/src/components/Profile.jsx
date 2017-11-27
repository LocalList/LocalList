import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import JobList from './JobList';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      averageRating: 0,
    };
  }

  componentDidMount() {

    this.getUser()
      .then(() => {
        return axios.get(`/api/reviews?doerId=${this.state.user.id}`);
      })
      .then((response) => {
        this.setState({
          averageRating: response.data.averageRating,
        });
      });
  }

  getUser() {
    return axios.get(`../api/users/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({ user: response.data });
      });
  }

  render() {
    if (this.state.user) {
      return (
        <div>
          <div>
            <strong>User: </strong><span>{this.props.user ? this.props.user.username : 'Jinxuan'}</span>
            <br />
            <div>{this.state.averageRating === null ? 'No rating yet!' : `Rating: ${this.state.averageRating}` }</div>
          </div>
          <h3>Jobs that you have claimed on or done so far:</h3>
          <JobList user={this.props.user} jobs={this.state.user.claimedJobs} />

          <h3>Jobs that you have posted</h3>
          <JobList user={this.props.user} jobs={this.state.user.jobs} />
        </div>
      );
    }

    return (
      'Loading...'
    );
  }
}

export default Profile;
