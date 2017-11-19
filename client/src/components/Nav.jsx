const React = require('react');
const NavLink = require('react-router-dom').NavLink;

let Nav = () => {
    return (
        <ul className="nav">
            <li> 
                <NavLink exact activeClassName="active" to="/home">
                Home
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/Logout">
                    Logout
                </NavLink>
            </li>
        </ul>
    )
}

module.exports = Nav;