import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Card from '../components/UI/Card';

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
`;

const MostDeaths = ({ countryList }) => {
  return (
    <Card bg='white' border='none'>
      <MostDeathsWrapper>
        <div>
          <h2>Most Deaths</h2>
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
