import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => (
  <div className="navbar navbar-toggleable-md navbar-light bg-faded" role="navigation">
    <img className="navbar-brand" src="../../dist/eco-green-leaf-icon-152-170142.png" />
    <NavLink activeClassName="active" to="/"><button className="btn btn-outline-secondary">Home</button></NavLink>
    <NavLink activeClassName="active" to="/login"><button className="btn btn-outline-secondary">Log in</button></NavLink>
    <NavLink activeClassName="active" to="/logout"><button className="btn btn-outline-secondary">Log out</button></NavLink>
    <NavLink activeClassName="active" to="/signup"><button className="btn btn-outline-secondary">Sign up</button></NavLink>
    <NavLink activeClassName="active" to="/create-job"><button className="btn btn-outline-secondary">Create Job</button></NavLink>
    {props.user && <NavLink activeClassName="active" to={`/users/${props.user.id}`}><button className="btn btn-outline-secondary">My Profile</button></NavLink>}
  </div>
);


export default Nav;
