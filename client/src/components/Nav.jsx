const React = require('react');
const NavLink = require('react-router-dom').NavLink;

const Nav = () => {
    return (
        <div className="nav">
            <NavLink activeClassName="active" to="/login"><button>Log in</button></NavLink>
            <NavLink activeClassName="active" to="/signup"><button>Sign up</button></NavLink>
            <NavLink activeClassName="active" to="/protected"><button>Members Only!</button></NavLink>
        </div>
    )
}

module.exports = Nav;