import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactCountryFlag from 'react-country-flag';
import Card from '../components/UI/Card';
import { BarChartIcon } from '../components/UI/Icons';
import SankeyChart from '../components/charts/SankeyChart';

const MostDeathsWrapper = styled.div`
  display: block;
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

  .list {
    width: 100%;
  }

  .list-header {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }

  .chart {
    width: 100%;
  }

  @media (min-width: 600px) {
    .list {
      padding: 0 50px;
    }
    .header {
      margin-left: -25px;
    }
    .chart {
      padding: 0 25px;
    }
  }

  @media (min-width: 1200px) {
    display: flex;

    .list {
      width: 40%;
      margin-left: 10px;
      padding: 0 10px;
    }
    .chart {
      width: 60%;
    }
  }
`;

const MostDeaths = ({ countryList, totalDeaths }) => {
  const countryListDeathTotal = countryList.reduce(
    (acc, curr) => acc + curr.deaths,
    0
  );
  let chartData = countryList.map((c) => ['World', c.country, c.deaths]);
  chartData.unshift(['From', 'To', 'Weight']);
  chartData.push([
    'World',
    'All other countries',
    totalDeaths - countryListDeathTotal,
  ]);

  return (
    <Card bg='white' border='none'>
      <MostDeathsWrapper>
        <div className='chart'>
          <div className='header'>
            {' '}
            <BarChartIcon size={35} />
            &nbsp;
            <h2>Most Deaths</h2>
          </div>
          <div className='sankey-chart'>
            <SankeyChart chartData={chartData} />
          </div>
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
