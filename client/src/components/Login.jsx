import React from 'react';

const Login = (props) => {
    return (
        <div>
            {`Prop: ${props.someProp}`}
            <div>
                <label>Username:</label>
                <input type="text" name="username" />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" />
            </div>
            <div>
                <button onClick={props.login}>Log In</button>
            </div>
        </div>
    )
}

module.exports = Login;