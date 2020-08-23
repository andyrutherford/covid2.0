import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactCountryFlag from 'react-country-flag';

import Card from '../components/UI/Card';

const TopListWrapper = styled.div`
  li {
    border-top: 0.5px solid lightgrey;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const TopList = ({ countryList, type, title }) => {
  return (
    <Card>
      <TopListWrapper>
        <div className='list-header'>
          <h3>{title}</h3>
        </div>
        <div className='list'>
          <ul>
            {countryList.map((c, i) => {
              return (
                <li key={i}>
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <ReactCountryFlag
                      countryCode={c.countryCode}
                      svg
                      style={{
                        fontSize: '1.5em',
                        lineHeight: '1.5em',
                        marginRight: '0.5em',
                        objectFit: 'cover',
                        borderRadius: '100px',
                      }}
                    />
                    <Link to={`/country/${c.slug}`}>{c.country}</Link>
                  </span>
                  <span>{c[type].toLocaleString()}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </TopListWrapper>
    </Card>
  );
};

export default TopList;
