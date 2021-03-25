import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//Import react routes and its other modules
import {Link} from 'react-router-dom';

class Header extends React.Component
{
  render()
  {
    return (
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item active">
        <Link class="nav-link" to={'/home'}>Home</Link>
        </li>
        <Link class="nav-link" to={'/adduser'}>Add User</Link>
        <Link class="nav-link" to={'/login'}>Login</Link>
        
      </ul>
    </nav>
      
    )
  }
}
export default Header;