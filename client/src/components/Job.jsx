import React from 'react';
import { NavLink } from 'react-router-dom';

const Job = (props) => {
  return (
    <div>
      <NavLink activeClassName="active" to={`/jobs/${props.job.id}`}>
        <h4>{props.job.name}</h4>
      </NavLink>
      <p>{props.job.location}</p>
      <button onClick={ () => {props.onClaimed(props.job)} }>Claim this job!</button>
    </div>
  )
}

export default Job;