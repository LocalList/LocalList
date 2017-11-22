import React from 'react';

// expect job to be an object with unique information about that job

const Job = (props) => {
    return (
        <div>
            <h2>{props.job.jobTitle}</h2>
            <p>{props.job.jobDescription}</p>
            <button>Claim this job!</button>
        </div>
    )
}

module.exports = Job;