import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Card from '../components/UI/Card';

const OverviewMapWrapper = styled.div`
  display: flex;

  padding: 5px;

  ul {
    margin: 20px 0;
  }

  li {
    border-top: 0.5px solid lightgrey;
    padding: 10px;
  }

  .list {
    width: 50%;
    margin-right: 10px;
  }

  .map {
    display: block;
    height: 400px;
    width: 100%;
    background-color: darkgrey;
  }
`;

const OverviewMap = () => {
  return (
    <Card bg='white'>
      <OverviewMapWrapper>
        <div className='list'>
          <h2>Most Affected Countries</h2>
          <ul>
            <li>111</li>
            <li>222</li>
            <li>333</li>
            <li>444</li>
            <li>555</li>
            <li>666</li>
            <li>777</li>
            <li>888</li>
          </ul>
          <Link to='/'>See more</Link>
        </div>
        <div className='map'>map</div>{' '}
      </OverviewMapWrapper>
    </Card>
  );
};

export default OverviewMap;
