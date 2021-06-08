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
            <a href="/menu1">Menu 1</a>
          </span>
          <span>
            <a href="/menu2">Menu 2</a>
          </span>
          <span>
            <a href="/menu3">Menu 3</a>
          </span>
        </div>
        <div className="social-header">
          <a href="www.facebook.com">
            <img src={facebook} alt="logo" />
          </a>
          <a href="www.google.com">
            <img src={google} alt="logo" />
          </a>
          <a href="www.youtube.com">
            <img src={youtube} alt="logo" />
          </a>
        </div>
      </div>
    );
  }
}
export default Header;
