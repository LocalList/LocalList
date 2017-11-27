import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Jumbotron, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import JobList from './JobList';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handymanSearchText: '',
      redirect: false,
      jobs: [],
    };

    this.onClaimed = this.onClaimed.bind(this);
    this.updateHandymanSearch = this.updateHandymanSearch.bind(this);
    this.handymanSearch = this.handymanSearch.bind(this);
  }

  onClaimed(job) {
    // remove job from jobs array
    axios.get(`/api/jobs/${job.id}/claim`)
      .then((res) => {
        const updatedJobs = this.state.jobs.slice(0);

        updatedJobs.forEach((updatedJob, index) => {
          if (job.id === updatedJob.id) {
            updatedJobs.splice(index, 1);
          }
        });

        this.setState({
          jobs: updatedJobs,
        });
      });
  }

  updateHandymanSearch(e) {
    this.setState({
      handymanSearchText: e.target.value,
    });
  }

  handymanSearch() {
    axios.get(`/api/jobs?location=${this.state.handymanSearchText}`)
      .then((res) => {
        this.setState({
          jobs: res.data,
          redirect: !this.state.redirect,
        });
      });
  }

  render() {
    if (this.state.redirect) {
      return (
        <div>
          <JobList onClaimed={this.onClaimed} jobs={this.state.jobs} user={this.props.user} />
        </div>
      );
    } else {
      return (
        <div>
          <Jumbotron bsStyle="info">
            <h1>Local List</h1>
            <p>Local List is a simple app that makes it easy to be a good neighbor</p>
            <p><Button bsStyle="primary">Learn more</Button></p>
          </Jumbotron>
          <ListGroup>
            <ListGroupItem bsStyle="success">
              <h3>Have a job you would like done?</h3>
              {<NavLink activeClassName="active" to="/jobs/create"><Button bsStyle="primary">Post a Job</Button></NavLink>}
            </ListGroupItem>
            <ListGroupItem bsStyle="success">
              <h3>Are you a handyman?</h3>
              <h5>Enter a location to search jobs near you:</h5>
              <input onChange={this.updateHandymanSearch} type="text" />
              <Button bsStyle="primary" onClick={this.handymanSearch}>Go!</Button>
            </ListGroupItem>
          </ListGroup>
        </div>
      );
    }
  }
}

export default Home;
