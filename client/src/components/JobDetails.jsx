import React from 'react';
import axios from 'axios';

import ReviewForm from './ReviewForm';

class JobDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      job: null,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.getJob();
  }

  getJob() {
    return axios.get(`../api/jobs/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({ job: response.data });
      });
  }

  onSubmit(e) {
    e.preventDefault();
    axios.post('../api/reviews', {
      jobId: this.state.job.id,
      message: e.target.message.value,
      rating: e.target.rating.value,
    })
      .then((response) => {
        this.getJob();
      });
  }

  render() {
    if (this.state.job) {
      return (
        <div>
          <h1>{this.state.job.name}</h1>
          <h4>{this.state.job.location}</h4>
          <p>Posted by {this.state.job.user.username}</p>
          {this.state.job.doer ?
            <div>
              <p>Claimed by {this.state.job.doer.username}</p>
              {this.state.job.review ?
                <div>
                  {this.state.job.user.username} wrote:
                  <p>{this.state.job.review.message}</p>
                  <p>{this.state.job.review.rating} stars</p>
                </div> : 
                this.props.user && this.state.job.userId === this.props.user.id ?
                  <ReviewForm onSubmit={this.onSubmit} /> : ''
              }
            </div> : ''
          }
        </div>
      );
    }

    return (
      <div>
        Loading...
      </div>
    );
  }
}

export default JobDetails;
