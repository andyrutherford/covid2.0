import React, { useState } from 'react';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

import { LogoIcon } from './UI/Icons';
import { ChartIcon, WorldIcon, FlagIcon, MapIcon } from './UI/Icons';

const NavbarWrapper = styled.nav`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 24px;
    top: 24px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #a90000;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    // background: #fff;
    background: ${(props) => props.theme.colors.cardBackground};
    padding: 1em;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

  ul {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  li {
    padding: 10px;
    padding-left: 20px;
  }

  li:hover {
    border-radius: 10px;
    background-color: lightgrey;
  }

  li svg {
    stroke: ${(props) => props.theme.colors.linkColor};
  }

  h1 {
    color: #3b5892;
    font-size: 3.5rem;
  }

  a {
    color: ${(props) => props.theme.colors.linkColor};
    display: flex;
    align-items: center;
  }

  .logo {
    display: flex;
  }

  .logo-text {
    padding-left: 10px;
  }

  .logo-text span {
    display: block;
    text-align: center;
    border-radius: 6px;
    background-color: #3b5892;
    color: #fff;
    margin: 0 30px;
    margin-top: 0px;
    margin-top: -5px;
    line-height: 1;
    font-size: 1.8rem;
  }
  .navlink-text {
    margin-left: 10px;
  }
  .menu-bottom {
    border-top: 1px solid grey;
  }
`;

const Navbar = ({ themeHandler }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavbarWrapper>
      <Menu isOpen={isOpen} onStateChange={(state) => handleStateChange(state)}>
        <div className='menu-top'>
          <div>
            <div className='logo'>
              <LogoIcon />
              <div className='logo-text'>
                <h1>COVID-19</h1>
                <span>Dashboard</span>
              </div>
            </div>
          </div>
          <ul>
            <li>
              <NavLink to='/' onClick={() => closeMenu()}>
                <ChartIcon size={28} />
                <span className='navlink-text'>Overview</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/world' onClick={() => closeMenu()}>
                <WorldIcon size={28} />
                <span className='navlink-text'>World</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/country' onClick={() => closeMenu()}>
                <FlagIcon size={28} />
                <span className='navlink-text'>Country</span>
              </NavLink>
            </li>
            <li>
              {' '}
              <NavLink to='/map' onClick={() => closeMenu()}>
                <MapIcon size={28} />
                <span className='navlink-text'>Map</span>
              </NavLink>
            </li>
            <li>
              <button onClick={() => themeHandler()}>Theme</button>
            </li>
          </ul>
        </div>
        <div className='menu-bottom'>
          <a
            href='#!'
            target='_blank'
            style={{ justifyContent: 'center', padding: '5px 0' }}
          >
            <span>Github</span>
          </a>
        </div>
      </Menu>
    </NavbarWrapper>
  );
};

export default Navbar;
