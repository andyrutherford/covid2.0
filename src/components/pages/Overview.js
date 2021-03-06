import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Total from '../Total';
import OverviewMap from '../OverviewMap';
import RecoveredPercentage from '../RecoveredPercentage';
import DeathPercentage from '../DeathPercentage';
import Resources from '../Resources';
import MostDeaths from '../MostDeaths';
import { GlobeIcon } from '../UI/Icons';
import { fetchSummary } from '../../utils/fetch';
import {
  formatMostAffectedCountries,
  formatMapData,
} from '../../utils/formatData';

const data = {
  cases: {
    type: 'cases',
    title: 'Total Cases',
    color: '#3b5892',
  },
  deaths: {
    type: 'deaths',
    title: 'Total Deaths',
    color: '#8b0000',
  },
  recovered: {
    type: 'recovered',
    title: 'Total Recovered',
    color: '#006400',
  },
};

const OverviewWrapper = styled.section`
  display: block;

  h1 {
    margin-left: 10px;
  }

  .world-span {
    display: none;
  }

  .col-1 {
    width: 100%;
  }

  .total-cards {
    display: block;
  }

  .col-2 {
    width: 100%;
  }

  .col-2 > div {
    width: 100%;
  }

  @media (min-width: 900px) {
    .world-span {
      display: inline;
    }
    .total-cards {
      display: flex;
      justify-content: space-between;
    }
  }

  @media (min-width: 1000px) {
    .col-2 {
      display: flex;
    }
    .col-2 > div {
      width: 33.333%;
    }
  }

  @media (min-width: 1400px) {
    .content {
      display: flex;
    }
    .col-1 {
      width: 80%;
    }
    .col-2 {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-self: start;
    }
    .col-2 > div {
      width: 100%;
    }
  }
`;

const Overview = () => {
  const [overviewData, setOverviewData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const summary = await fetchSummary();
      const mostCases = formatMostAffectedCountries(summary.countries, 'cases');
      const mostDeaths = formatMostAffectedCountries(
        summary.countries,
        'deaths'
      );
      const mapData = formatMapData(summary.countries);
      setOverviewData({
        ...overviewData,
        confirmed: summary.confirmed,
        deaths: summary.deaths,
        recovered: summary.recovered,
        mostCases,
        mostDeaths,
        map: mapData,
      });

      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  if (loading)
    return (
      <div style={{ paddingLeft: '4rem' }}>
        <h1>Loading...</h1>
      </div>
    );

  return (
    <OverviewWrapper>
      <div className='page-header'>
        <GlobeIcon size={38} />
        <h1>
          <span className='world-span'>World</span> Overview
        </h1>
      </div>
      <div className='content'>
        <div className='col-1'>
          <div className='total-cards'>
            <Total
              type='cases'
              data={data.cases}
              total={overviewData.confirmed.totalConfirmed}
              recent={overviewData.confirmed.newConfirmed}
            />
            <Total
              type='deaths'
              data={data.deaths}
              total={overviewData.deaths.totalDeaths}
              recent={overviewData.deaths.newDeaths}
            />
            <Total
              type='recovered'
              data={data.recovered}
              total={overviewData.recovered.totalRecovered}
              recent={overviewData.recovered.newRecovered}
            />
          </div>
          <OverviewMap
            countryList={overviewData.mostCases}
            mapData={overviewData.map}
          />
          <MostDeaths
            countryList={overviewData.mostDeaths}
            totalDeaths={overviewData.deaths.totalDeaths}
          />
        </div>
        <div className='col-2'>
          <div>
            <RecoveredPercentage data={overviewData.recovered} />
          </div>
          <div>
            <DeathPercentage data={overviewData.deaths} />
          </div>
          <div>
            <Resources />
          </div>
        </div>
      </div>
    </OverviewWrapper>
  );
};

export default Overview;
