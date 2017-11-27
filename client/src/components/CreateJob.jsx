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

  updateState(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
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

export default CreateJob;
