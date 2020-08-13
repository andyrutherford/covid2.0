import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Card from '../components/UI/Card';

import Map from './Map';

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
    width: 99%;
    background-color: darkgrey;
  }

  @media (max-width: 1100px) {
    display: block;

    .list {
      width: 100%;
    }
  }
`;

const OverviewMap = ({ countryList, mapData }) => {
  return (
    <Card bg='white' border='none'>
      <OverviewMapWrapper>
        <div className='list'>
          <h2>Most Cases</h2>
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
          <Link to='/country'>See more</Link>
        </div>
        <div className='map'>
          <Map mapData={mapData} source='cases' />
        </div>{' '}
      </OverviewMapWrapper>
    </Card>
  );
};

export default OverviewMap;
