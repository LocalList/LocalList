import React from 'react';

// expect job to be an object with unique information about that job

const Job = (props) => {
    return (
        <div>
            <h2>{props.job.name}</h2>
            <p>{props.job.location}</p>
            <button>Claim this job!</button>
        </div>
    )
}

// module.exports = Job;
export default Job