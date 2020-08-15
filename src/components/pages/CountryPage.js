import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Card from '../UI/Card';
import Total from '../Total';
import CasesOverTime from '../CasesOverTime';
import SankeyChart from '../charts/SankeyChart';

import { fetchSummary, fetchCountrySummary } from '../../utils/fetch';
import { formatLineChartData } from '../../utils/formatData';

import virus from '../../assets/virus.svg';
import death from '../../assets/death.svg';
import heart from '../../assets/heart.svg';

const CountryPageWrapper = styled.div`
  .total-cards {
    display: flex;
    justify-content: space-between;
  }
`;

const data = {
  cases: {
    type: 'cases',
    title: 'Total Cases',
    color: '#3b5892',
  },
  deaths: {
    type: 'deaths',
    title: 'Total Deaths',
    color: 'darkred',
  },
  recovered: {
    type: 'recovered',
    title: 'Total Recovered',
    color: 'darkgreen',
  },
};

const CountryPage = () => {
  const { country } = useParams();
  const [summary, setSummary] = useState();
  const [casesOverTime, setCasesOverTime] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      let res = await fetchSummary();
      res = res.countries.filter((c) => c.Slug === country);
      let countrySummary = await fetchCountrySummary(country);
      const chartData = formatLineChartData(countrySummary);
      setSummary({ ...res[0] });
      setCasesOverTime(chartData);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <CountryPageWrapper>
      <h1>{summary.Country}</h1>
      <div className='total-cards'>
        <Total
          type='cases'
          data={data.cases}
          icon={virus}
          total={summary.TotalConfirmed}
          recent={summary.NewConfirmed}
        />
        <Total
          type='deaths'
          data={data.deaths}
          icon={death}
          total={summary.TotalDeaths}
          recent={summary.NewDeaths}
        />
        <Total
          type='recovered'
          data={data.recovered}
          icon={heart}
          total={summary.TotalRecovered}
          recent={summary.NewRecovered}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <Card>
          <SankeyChart />
        </Card>
        <CasesOverTime data={casesOverTime} />
      </div>
    </CountryPageWrapper>
  );
};

export default CountryPage;
