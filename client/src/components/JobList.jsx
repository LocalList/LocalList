import React from 'react';
import Job from './job';
import dummyData from '../dummyData.js';


class JobList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        }
    }

    render () {
        return (
            <div>
                {this.state.jobs.map((job) => {
                    <Job job={job} key={job.id} />
                })}
            </div>
        )
    }
}

module.exports = JobList;