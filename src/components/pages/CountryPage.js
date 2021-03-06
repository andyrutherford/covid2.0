import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ReactCountryFlag from 'react-country-flag';
import Total from '../Total';
import DeathsOverTime from '../DeathsOverTime';
import CasesOverTime from '../CasesOverTime';
import { fetchSummary, fetchCountrySummary } from '../../utils/fetch';
import { formatLineChartData } from '../../utils/formatData';

const CountryPageWrapper = styled.div`
  .total-cards {
    display: block;
  }

  .charts {
    display: block;
  }

  @media (min-width: 900px) {
    .total-cards {
      display: flex;
      justify-content: space-between;
    }
  }
  @media (min-width: 1200px) {
    .charts {
      display: flex;
    }
    .charts > div {
      width: 50%;
    }
  }
`;

const data = {
  cases: {
    type: 'cases',
    title: 'Total Cases',
  },
  deaths: {
    type: 'deaths',
    title: 'Total Deaths',
  },
  recovered: {
    type: 'recovered',
    title: 'Total Recovered',
  },
};

const CountryPage = () => {
  const { country } = useParams();
  const [summary, setSummary] = useState();
  const [casesOverTime, setCasesOverTime] = useState();
  const [deathsOverTime, setDeathsOverTime] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      let res = await fetchSummary();
      res = res.countries.filter((c) => c.Slug === country);
      let countrySummary = await fetchCountrySummary(country);
      const casesChartData = formatLineChartData(countrySummary.cases, 'cases');
      const deathsChartData = formatLineChartData(
        countrySummary.deaths,
        'deaths'
      );
      setSummary({ ...res[0] });
      setCasesOverTime(casesChartData);
      setDeathsOverTime(deathsChartData);
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
    <CountryPageWrapper>
      <div className='page-header'>
        <ReactCountryFlag
          countryCode={summary.CountryCode}
          svg
          style={{
            fontSize: '2.8em',
            lineHeight: '2.8em',
            marginRight: '0.3em',
            objectFit: 'cover',
            borderRadius: '100px',
          }}
        />
        <h1>{summary.Country}</h1>
      </div>
      <div className='total-cards'>
        <Total
          type='cases'
          data={data.cases}
          total={summary.TotalConfirmed}
          recent={summary.NewConfirmed}
        />
        <Total
          type='deaths'
          data={data.deaths}
          total={summary.TotalDeaths}
          recent={summary.NewDeaths}
        />
        <Total
          type='recovered'
          data={data.recovered}
          total={summary.TotalRecovered}
          recent={summary.NewRecovered}
        />
      </div>
      <div className='charts'>
        <div>
          <CasesOverTime data={casesOverTime} />
        </div>
        <div>
          <DeathsOverTime data={deathsOverTime} />
        </div>
      </div>
    </CountryPageWrapper>
  );
};

export default CountryPage;
