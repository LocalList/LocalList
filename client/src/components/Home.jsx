import React from 'react';

const Home = (props) => {
    return (
        <div>
            <h1>Local List</h1>
            <div>
                <h3>Have a job you would like done?</h3>
                <h5>Enter a location to post a job in your community:</h5>
                <input onChange={props.posterSearch} type="text" />
                <button>Go!</button>
            </div>
            <div>
                <h3>Are you a handyman?</h3>
                <h5>Enter a location to search jobs near you:</h5>
                <input onChange={props.handymanSearch} type="text" />
                <button>Go!</button>
            </div>
        </div>
    )
}

module.exports = Home;