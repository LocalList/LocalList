import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import JobList from './JobList';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      averageRating: 0,
    };

    this.onClaimed = this.onClaimed.bind(this);
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

  onClaimed(claimedJob) {
    // remove job from jobs array
    axios.get(`/api/jobs/${claimedJob.id}/claim`)
      .then(() => {

        this.setState((prevState) => {
          prevState.user.jobs.forEach((job, index) => {
            if (job.id === claimedJob.id) {
              job.doerId = this.props.user.id;
            }
          });
          return {
            user: prevState.user,
          };
        });
      });
  }

  getUser() {
    return axios.get(`../api/users/${this.props.match.params.id}`)
      .then((response) => {
        console.log(response.data);
        this.setState({ user: response.data });
      });
  }

  render() {
    if (this.state.user) {
      return (
        <div className="container">
          <ListGroup>
            <ListGroupItem bsStyle="info">
              <strong>User: </strong><span>{this.state.user.username}</span>
              <br />
              <div>{this.state.averageRating === null ? 'No rating yet!' : `Rating: ${this.state.averageRating}` }</div>
            </ListGroupItem>
          </ListGroup>
          <Panel header={'Jobs that you have claimed on or done so far:'}>
            <JobList user={this.props.user} jobs={this.state.user.claimedJobs} />
          </Panel>
          <Panel header="Jobs that you have posted">
            <JobList user={this.props.user} jobs={this.state.user.jobs} onClaimed={this.onClaimed} />
          </Panel>
        </div>
      );
    }
    return (
      'Loading...'
    );
  }
}

export default Profile;
