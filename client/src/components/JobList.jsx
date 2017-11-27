import React from 'react';
import Job from './Job';
import { ListGroupItem } from 'react-bootstrap';

const JobList = props => (
  <div>
      {props.jobs.map(job => <ListGroupItem bsStyle="success" key={job.id}><Job user={props.user} onClaimed={props.onClaimed} job={job} /></ListGroupItem>) }
  </div>
);

export default JobList;
