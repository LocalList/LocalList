import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// maybe doesnt have to be a stateful component
// could possibly attach this component to JobList

class CreateJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      submitted: false,
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  onFormSubmit(e) {
    // stops full refresh of page
    e.preventDefault();

    console.log(this.props.user.id);

    axios.post('/api/jobs', {
      name: this.state.name,
      location: this.state.location,
      userId: this.props.user.id,
    })
      .then(() => {
        this.setState({
          submitted: true,
        });
      });
  }

<<<<<<< 4de55b5370ef5557645dea4f7257dfe0cd7fba92
  updateState(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
=======
    if (job) {
      // push to jobs in JobList for that particular location
      // e.target.job.value = '';
    }
>>>>>>> add create job
  }

  render() {
    return (
      <div>
        {this.state.submitted ?
          <Redirect to={{ pathname: '/' }} /> :
          <form onSubmit={this.onFormSubmit}>
            <input type="text" name="name" onChange={this.updateState} />
            <input type="text" name="location" onChange={this.updateState} />
            <button>Post my job</button>
          </form>
        }
      </div>
    );
  }
}


module.exports = CreateJob;
