import React from 'react';
import axios from 'axios';

// expect job to be an object with unique information about that job

class MarkButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      job: this.props.job,
    };
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick() {
    axios.put(`/api/jobs/${this.props.job.id}`)
      .then((res) => {
        this.setState({
          job: res.data,
        });
      })
      .catch((err) => {
        if (err) {
          throw err;
        }
      });
  }

  render() {
    if (this.props.user == null) {
      return <p>{this.state.job.complete ? 'Complete' : 'Not Complete Yet'}</p>;
    }
    if (this.props.user === undefined || this.props.user === null) {
      return <p>{this.state.job.complete ? 'Complete' : 'Not Complete Yet'}</p>;
    }
    if (!this.state.job.complete && this.props.user.id === this.state.job.doerId) {
      return (
        <div>
          <button onClick={this.handlerClick}>Mark Complete</button>
          <p>Not Complete Yet</p>
        </div>
      );
    } else if (this.state.job.complete) {
      return <p>complete</p>;
    } else if (!this.state.job.complete) {
      return <p>not Complete Yet</p>;
    } else {
      return <span />;
    }
  }
}

export default MarkButton;
