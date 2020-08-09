import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import logo from '../assets/coronavirus.svg';
import { ChartIcon, WorldIcon, FlagIcon, MapIcon } from './UI/Icons';

const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  height: 100vh;
  padding: 30px;

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

  a {
    color: ${(props) => props.theme.colors.navy};
    display: flex;
    align-items: center;
  }

  span {
    padding-left: 10px;
  }

  .logo {
    display: flex;
  }

  .logo img {
    width: 50px;
  }

  .logo-text {
    padding-left: 10px;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className='nav-top'>
        <div className='logo'>
          <img src={logo} alt='covid' />
          <div className='logo-text'>
            <h1>COVID-19</h1>
            <span>caption</span>
          </div>
        </div>
        <ul>
          <li>
            <Link to='/'>
              <ChartIcon size={28} />
              <span>Overview</span>
            </Link>
          </li>
          <li>
            <Link to='/world'>
              <WorldIcon size={28} />
              <span>World</span>
            </Link>
          </li>
          <li>
            <Link to='/country'>
              <FlagIcon size={28} />
              <span>Country</span>
            </Link>
          </li>
          <li>
            {' '}
            <Link to='/map'>
              <MapIcon size={28} />
              <span>Map</span>
            </Link>
          </li>
          <Button variant='contained' color='primary'>
            Button
          </Button>
        </ul>
      </div>
      <div className='nav-bottom'>Bottom</div>
    </NavbarWrapper>
  );
};

export default Navbar;
