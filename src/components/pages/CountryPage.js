import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Card from '../UI/Card';
import Total from '../Total';

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

const CountryPage = () => {
  const { country } = useParams();
  const [summary, setSummary] = useState();
  const [history, setHistory] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      let res = await fetchSummary();
      res = res.countries.filter((c) => c.Slug === country);
      let countrySummary = await fetchCountrySummary(country);
      const chartData = formatLineChartData(countrySummary);
      setSummary({ ...res[0] });
      setHistory(chartData);
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
        />
        <Total
          type='deaths'
          data={data.deaths}
          icon={death}
          total={summary.TotalDeaths}
        />
        <Total
          type='recovered'
          data={data.recovered}
          icon={heart}
          total={summary.TotalRecovered}
        />
      </div>
      {/* <Total />
      <Total />
      <Total /> */}
    </CountryPageWrapper>
  );
};

export default CountryPage;
