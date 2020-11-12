import React, { useState } from 'react';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

import { LogoIcon } from './UI/Icons';
import { ChartIcon, WorldIcon, FlagIcon, MapIcon } from './UI/Icons';
import moon from '../assets/moon.svg';
import sun from '../assets/sun.svg';

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
    background: #3b5892;
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
    background: ${(props) => props.theme.colors.cardBackground};
    padding: 0.5em;
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
    background-color: ${(props) => props.theme.colors.background};
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
    align-items: center;
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

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: block;
    width: 48px;
    height: 27px;
    margin: auto;
    margin-bottom: 2rem;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 32px;
    width: 32px;
    left: 0px;
    bottom: 4px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    box-shadow: 0 0px 15px #2020203d;
    background: white url(${sun});
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: center;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(19px);
    -ms-transform: translateX(19px);
    transform: translateX(19px);
    background: white url(${moon});
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: center;
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  @media (max-width: 600px) {
    .bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 18px;
      top: 18px;
    }
  }
`;

interface Props {
  themeHandler(): any;
  isDarkMode: boolean;
}

const Navbar: React.FunctionComponent<Props> = ({
  themeHandler,
  isDarkMode,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state: { isOpen: boolean }) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavbarWrapper>
      <Menu isOpen={isOpen} onStateChange={(state) => handleStateChange(state)}>
        <div className='menu-top'>
          <div className='logo'>
            <LogoIcon size={60} />
            <div className='logo-text'>
              <h1>COVID-19</h1>
              <span>Dashboard</span>
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
          </ul>
        </div>
        <div className='menu-bottom'>
          <label id='switch' className='switch' htmlFor='slider'>
            <input
              type='checkbox'
              onChange={() => themeHandler()}
              id='slider'
              defaultChecked={isDarkMode}
            />
            <span className='slider round'></span>
          </label>
          <hr style={{ border: '0.5px solid grey' }} />
          <a
            href='https://github.com/andyrutherford/covid2.0'
            target='_blank'
            rel='noopener noreferrer'
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
