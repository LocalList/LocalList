import React from 'react';

const Job = (props) => {
  return (
    <div>
      <h4>{props.job.name}</h4>
      <p>{props.job.location}</p>
      <button onClick={ () => {props.onClaimed(props.job)} }>Claim this job!</button>
    </div>
  )
}

export default Job;