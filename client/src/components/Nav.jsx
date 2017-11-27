import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div className="nav">
    <NavLink activeClassName="active" to="/"><button>Home</button></NavLink>
    <NavLink activeClassName="active" to="/login"><button>Log in</button></NavLink>
    <NavLink activeClassName="active" to="/logout"><button>Log out</button></NavLink>
    <NavLink activeClassName="active" to="/signup"><button>Sign up</button></NavLink>
    <NavLink activeClassName="active" to="/protected"><button>Members Only!</button></NavLink>
    <NavLink activeClassName="active" to="/profile"><button>Profile</button></NavLink>
    <NavLink activeClassName="active" to="/create-job"><button>Create Job</button></NavLink>
  </div>
);

export default Nav;
