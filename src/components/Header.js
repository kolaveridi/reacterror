
import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => (
    <Header> 
    <h1> Portfolio </h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboardpage</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense </NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit expense </NavLink>
    <NavLink to="/help" activeClassName="is-active">Help </NavLink>
    </Header>
  );
  export default Header;