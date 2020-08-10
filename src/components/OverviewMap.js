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
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .list {
    width: 50%;
    margin-right: 10px;
  }

  .map {
    display: block;
    height: 500px;
    width: 100%;
    background-color: darkgrey;
  }

  @media (max-width: 1100px) {
    display: block;

    .list {
      width: 100%;
    }
  }
`;

const OverviewMap = ({ countryList }) => {
  return (
    <Card bg='white'>
      <OverviewMapWrapper>
        <div className='list'>
          <h2>Most Affected Countries</h2>
          <ul>
            {countryList.map((c, i) => {
              return (
                <li key={i}>
                  <span>{c.country}</span>
                  <span>{c.confirmed.toLocaleString()}</span>
                </li>
              );
            })}
          </ul>
          <Link to='/'>See more</Link>
        </div>
        <div className='map'>map</div>{' '}
      </OverviewMapWrapper>
    </Card>
  );
};

export default OverviewMap;
