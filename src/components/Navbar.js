import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Navbar.css';

class Navbar extends React.Component {

  render() {
    const {leftMenus} = this.props;

    return (
      <nav id="navbar" className="navbar">
          <ul>
            {leftMenus.map((menu, index) => (
              <NavLink
                key={index}
                to={menu.path}
                strict
                activeClassName="active"><li className="nav">{menu.name}</li></NavLink>
            ))}
          </ul>

          <ul>
            <li><i className="fa fa-cog"></i></li>
            <li><i className="fa fa-credit-card"></i></li>
            <li><i className="fa fa-question-circle-o "></i></li>
          </ul>
      </nav>
    )
  }
}
Navbar.propTypes = {
  leftMenus : PropTypes.array,
  rightMenus: PropTypes.array
}
Navbar.defaultProps = {
  leftMenus: [],
  rightMenus: []
}
export default Navbar;
