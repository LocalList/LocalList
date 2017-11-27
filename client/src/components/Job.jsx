import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import MarkButton from './MarkButton';

const Job = props => (
  <div>
    <NavLink activeClassName="active" to={`/jobs/${props.job.id}`}>
      <h4>{props.job.name}</h4>
    </NavLink>
    <p>{props.job.location}</p>
    { props.user.id === props.job.userId ? null : <button onClick={() => { props.onClaimed(props.job); }}>Claim this job!</button> }
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
