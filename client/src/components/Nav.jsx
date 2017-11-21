const React = require('react');
const NavLink = require('react-router-dom').NavLink;

const Nav = () => {
    return (
        <ul className="nav">
            <li>
                <NavLink activeClassName="active" to="/signup">
                    Sign up
                </NavLink>
            </li>
        </ul>
    )
}

module.exports = Nav;