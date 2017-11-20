import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h3>Search for Jobs near me:</h3>
                <input type="text" />
                <button>Go!</button>
            </div>
        )
    }
}

module.exports = Home;