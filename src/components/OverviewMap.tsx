import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ReactCountryFlag from 'react-country-flag';

import Card from './UI/Card';
import { BarChartIcon } from './UI/Icons';

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
    width: 100%;
    background-color: ${(props) => props.theme.colors.cardBackground};
  }

  @media (min-width: 1200px) {
    display: flex;

    .list {
      width: 40%;
      padding: 0 10px;
    }
    .map {
      width: 60%;
    }
  }
`;

type country = {
  countryCode: string;
  slug: string;
  confirmed: number;
  country: string;
};

interface Props {
  countryList: country[];
  mapData: any[];
}

const OverviewMap: React.FunctionComponent<Props> = ({
  countryList,
  mapData,
}) => {
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
