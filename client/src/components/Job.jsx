import React from 'react';

// expect job to be an object with unique information about that job

const Job = (props) => {
    return (
        <div>
            {console.log(props.job)}
            <h4>{props.job.name}</h4>
            <p>{props.job.location}</p>
            <button>Claim this job!</button>
        </div>
    )
}

export default Job;