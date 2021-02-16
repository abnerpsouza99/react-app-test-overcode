import React from 'react';

import './Header.css';

import {ReactComponent as Logo} from '../../assets/Logo.svg';

class Header extends React.Component {
  render(){
    return (
      <div className="Header">
        <div className="Logo">
          <Logo/>
        </div>
        <div className="line"/>
        <ul className="menu">
          <li className="li-flex-menu">
            <div className="menu-number">01</div>
            <div className="menu-name">Empresa</div>
          </li>
          <li className="li-flex-menu">
            <div className="menu-number">02</div>
            <div className="menu-name">Serviços</div>
          </li>
          <li className="li-flex-menu">
            <div className="menu-number">03</div>
            <div className="menu-name">Projetos</div>
          </li>
          <li className="li-flex-menu">
            <div className="menu-number">04</div>
            <div className="menu-name">Como fazemos</div>
          </li>
        </ul>
        <div className="flex-button">
          <button className="dark-mode-button"></button>
          <button className="start-button">Começar!</button>
        </div>
      </div>
    )
  }
}

export default Header;