import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Container from '../UI/Container';

import Total from '../Total';
import OverviewMap from '../OverviewMap';
import RecoveredPercentage from '../RecoveredPercentage';
import DeathPercentage from '../DeathPercentage';
import Resources from '../Resources';

import virus from '../../assets/virus.svg';
import death from '../../assets/death.svg';
import heart from '../../assets/heart.svg';

import { fetchSummary } from '../../utils/fetch';
import { formatMostAffectedCountries } from '../../utils/formatData';

const data = {
  cases: {
    type: 'cases',
    title: 'Total Worldwide Cases',
    color: '#3b5892',
  },
  deaths: {
    type: 'deaths',
    title: 'Total Worldwide Deaths',
    color: 'darkred',
  },
  recovered: {
    type: 'recovered',
    title: 'Total Worldwide Recovered',
    color: 'darkgreen',
  },
};

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  /* Color the border and text with theme.main */
  background-color: ${(props) => props.theme.colors.navy};
`;

const OverviewWrapper = styled.section`
  display: flex;

  .col-1 {
    width: 80%;
  }

  .total-cards {
    display: flex;
    justify-content: space-between;
  }

  .col-2 {
    width: 20%;
  }

  @media (max-width: 1000px) {
    .total-cards {
      display: block;
    }
  }

  @media (max-width: 1400px) {
    display: block;
    .col-1 {
      width: 100%;
    }
    .col-2 {
      width: 100%;
      display: flex;
    }
  }
`;

const Overview = () => {
  const [overviewData, setOverviewData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const summary = await fetchSummary();
      const affected = formatMostAffectedCountries(summary.Countries);
      setOverviewData({
        ...overviewData,
        totals: summary.Global,
        mostAffected: affected,
      });

      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    const data = fetchData();
    // eslint-disable-next-line
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <Container width={1} bg='lightgrey'>
      <h1>Overview</h1>
      <OverviewWrapper>
        <div className='col-1'>
          <div className='total-cards'>
            <Total
              type='cases'
              data={data.cases}
              icon={virus}
              total={overviewData.totals.TotalConfirmed}
            />
            <Total
              type='deaths'
              data={data.deaths}
              icon={death}
              total={overviewData.totals.TotalDeaths}
            />
            <Total
              type='recovered'
              data={data.recovered}
              icon={heart}
              total={overviewData.totals.TotalRecovered}
            />
          </div>
          <OverviewMap countryList={overviewData.mostAffected} />
          <Resources />
        </div>
        <div className='col-2'>
          <RecoveredPercentage />
          <DeathPercentage />
          <DeathPercentage />
        </div>
      </OverviewWrapper>
      <Button>Click</Button>
    </Container>
  );
};

export default Overview;
