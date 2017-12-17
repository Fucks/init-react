import React, { Component } from 'react';

import './Header.css';

class Header extends Component {

  render() {
    return (
      <header id="header" className="header">
        <div className="logo"></div>
        <div className="left">

        </div>

        <div className="right">
          <div className="user">
            <span>Wellington</span>
          </div>
        </div>

      </header>
    )
  }

}
export default Header;
