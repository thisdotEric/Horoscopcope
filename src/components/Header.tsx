import React from 'react';
import './Header.css';
import { ReactComponent as Github } from '../assets/github.svg';
import horoscopecope_logo from '../assets/horoscopecope_logo.png';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="header">
      <div className="brand">
        <img src={horoscopecope_logo} alt="" />
        <p className="horoscopecope">Horoscopecope</p>
      </div>
      <div className="icons">
        <Github className="github-icon" onClick={() => console.log('jj')} />
      </div>
    </div>
  );
};

export default Header;
