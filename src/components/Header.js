import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink exact to="/" activeClassName="active">
              About
            </NavLink></li>
          <li> <NavLink to="/portfolio" activeClassName="active">
              Portfolio
            </NavLink></li>
          <li>  <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink></li>
          <li>   <NavLink to="/testimony" activeClassName="active">
              Testimonials
             </NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
