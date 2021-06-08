import React, { Component } from 'react';
import logo from '../logo.svg';
import facebook from '../assets/icon/facebook.png';
import google from '../assets/icon/google-plus.png';
import youtube from '../assets/icon/youtube.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo-header">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-bar">
          <span>
            <a href="www">Menu 1</a>
          </span>
          <span>
            <a href="aaaa">Menu 2</a>
          </span>
          <span>
            <a href="aaaa">Menu 3</a>
          </span>
        </div>
        <div className="social-header">
          <span>
            <img src={facebook} alt="logo" />
          </span>
          <span>
            <img src={google} alt="logo" />
          </span>
          <span>
            <img src={youtube} alt="logo" />
          </span>
        </div>
      </div>
    );
  }
}
export default Header;
