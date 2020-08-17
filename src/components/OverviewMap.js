import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Card from '../components/UI/Card';
import { BarChartIcon } from '../components/UI/Icons';

import Map from './Map';

const OverviewMapWrapper = styled.div`
  display: block;
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
    width: 100%;
    margin-right: 10px;
  }

  .list-header {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }

  .map {
    width: 99%;
    background-color: darkgrey;
  }

  @media (min-width: 1200px) {
    display: flex;

    .list {
      width: 40%;
    }
    .map {
      width: 60%;
    }
  }
`;

const OverviewMap = ({ countryList, mapData }) => {
  return (
    <Card bg='white' border='none'>
      <OverviewMapWrapper>
        <div className='list'>
          <div className='list-header'>
            <BarChartIcon size={35} />
            &nbsp;
            <h2>Most Cases</h2>
          </div>
          <ul>
            {countryList.map((c, i) => {
              return (
                <li key={i}>
                  <span>
                    <Link to={`/country/${c.slug}`}>{c.country}</Link>
                  </span>
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
