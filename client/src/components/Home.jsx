import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
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
    const updatedJobs = this.state.jobs.slice(0);

    updatedJobs.forEach((updatedJob, index) => {
      if (job.id === updatedJob.id) {
        updatedJobs.splice(index, 1);
      }
    });

    this.setState({
      jobs: updatedJobs,
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
          <JobList onClaimed={this.onClaimed} jobs={this.state.jobs} />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Local List</h1>
          <div>
            <h3>Have a job you would like done?</h3>
            {<NavLink activeClassName="active" to="/jobs/create"><button>Post a Job</button></NavLink>}
          </div>
          <div>
            <h3>Are you a handyman?</h3>
            <h5>Enter a location to search jobs near you:</h5>
            <input onChange={this.updateHandymanSearch} type="text" />
            <button onClick={this.handymanSearch}>Go!</button>
          </div>
        </div>
      );
    }
  }
}

module.exports = Home;
