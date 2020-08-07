import React from 'react';

import './Header.css';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import youtube_logo from './youtube_logo.PNG';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img className="header__logo" src={youtube_logo} alt="" />
      </div>

      <div className="header__input">
        <input placeholder="Search" type="text" />
        <SearchIcon className="header__inputButton" />
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" /> 
        <NotificationsIcon className="header__icon"/>
        <Avatar alt="DK" src="avatar.png" />
      </div>
    </div>
  );
}

export default Header;
