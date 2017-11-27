import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import MarkButton from './MarkButton';

const Job = props => (
  <div>
    <NavLink activeClassName="active" to={`/jobs/${props.job.id}`}>
      <h4>{props.job.name}</h4>
    </NavLink>
    <h5>Posted by:
      <NavLink activeClassName="active" to={`/users/${props.job.userId}`}>
        {props.job.user.username}
      </NavLink>
    </h5>
    <p>{props.job.location}</p>
    { !props.job.doerId && props.user && props.user.id !== props.job.userId &&
      <Button bsStyle="primary" onClick={() => {props.onClaimed(props.job)}}>Claim this job!</Button> }
    <MarkButton user={props.user} job={props.job} />
  </div>
);

Job.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default Job;
