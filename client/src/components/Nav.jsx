import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div className="navbar navbar-toggleable-md navbar-light bg-faded" role="navigation">
    <NavLink activeClassName="active" to="/"><button className="btn btn-outline-secondary">Home</button></NavLink>
    <NavLink activeClassName="active" to="/login"><button className="btn btn-outline-secondary">Log in</button></NavLink>
    <NavLink activeClassName="active" to="/logout"><button className="btn btn-outline-secondary">Log out</button></NavLink>
    <NavLink activeClassName="active" to="/signup"><button className="btn btn-outline-secondary">Sign up</button></NavLink>
    <NavLink activeClassName="active" to="/protected"><button className="btn btn-outline-secondary">Members Only!</button></NavLink>
    <NavLink activeClassName="active" to="/profile"><button className="btn btn-outline-secondary">Profile</button></NavLink>
    <NavLink activeClassName="active" to="/create-job"><button className="btn btn-outline-secondary">Create Job</button></NavLink>
  </div>
);


export default Nav;
