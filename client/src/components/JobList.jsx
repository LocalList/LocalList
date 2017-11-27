import React from 'react';
import Job from './Job';

const JobList = props => (
  <div>
    {props.jobs.map(job => <Job user={props.user} onClaimed={props.onClaimed} job={job} key={job.id} />) }
  </div>
);

export default JobList;
