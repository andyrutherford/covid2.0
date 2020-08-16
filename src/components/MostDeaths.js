import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Card from '../components/UI/Card';
import { BarChartIcon } from '../components/UI/Icons';

const MostDeathsWrapper = styled.div`
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

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
`;

const MostDeaths = ({ countryList }) => {
  return (
    <Card bg='white' border='none'>
      <MostDeathsWrapper>
        <div>
          <div className='header'>
            {' '}
            <BarChartIcon size={35} />
            &nbsp;
            <h2>Most Deaths</h2>
          </div>
          <ul>
            {countryList.map((c, i) => {
              return (
                <li key={i}>
                  <span>
                    <Link to={`/country/${c.slug}`}>{c.country}</Link>
                  </span>
                  <span>{c.deaths.toLocaleString()}</span>
                </li>
              );
            })}
          </ul>
          <Link to='/country'>See more</Link>
        </div>
      </MostDeathsWrapper>
    </Card>
  );
};

export default MostDeaths;
