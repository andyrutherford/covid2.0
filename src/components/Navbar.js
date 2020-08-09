import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

const NavbarWrapper = styled.div`
  color: red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 100vh;
  padding: 30px;

  ul {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  li {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className='nav-top'>
        <h1>COVID-19 Tracker</h1>
        <ul>
          <li>
            <Link to='/'>Overview</Link>
          </li>
          <li>
            <Link to='/world'>World</Link>
          </li>
          <li>
            <Link to='/country'>Country</Link>
          </li>
          <li>
            {' '}
            <Link to='/map'>Map</Link>
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
