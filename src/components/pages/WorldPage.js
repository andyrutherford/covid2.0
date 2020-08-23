import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { WorldIcon } from '../UI/Icons';
import TopList from '../TopList';
import { fetchSummary } from '../../utils/fetch';
import { formatMostAffectedCountries } from '../../utils/formatData';

const WorldPageWrapper = styled.div`
  .grid {
    display: block;
  }

  @media (min-width: 800px) {
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1200px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

const WorldPage = () => {
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
      const mostRecovered = formatMostAffectedCountries(
        summary.countries,
        'recovered'
      );
      const newCases = formatMostAffectedCountries(
        summary.countries,
        'newCases'
      );
      const newDeaths = formatMostAffectedCountries(
        summary.countries,
        'newDeaths'
      );
      const newRecovered = formatMostAffectedCountries(
        summary.countries,
        'newRecovered'
      );

      setOverviewData({
        ...overviewData,
        mostCases,
        mostDeaths,
        mostRecovered,
        newCases,
        newDeaths,
        newRecovered,
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
    <WorldPageWrapper>
      <div className='page-header'>
        <WorldIcon size={46} />
        <h1>World Stats</h1>
      </div>
      <div className='grid'>
        <TopList
          title='Most Cases'
          type='confirmed'
          countryList={overviewData.mostCases}
        />
        <TopList
          title='Most Deaths'
          type='deaths'
          countryList={overviewData.mostDeaths}
        />
        <TopList
          title='Most Recovered'
          type='recovered'
          countryList={overviewData.mostRecovered}
        />
        <TopList
          title='New Cases'
          type='newCases'
          countryList={overviewData.newCases}
        />
        <TopList
          title='New Deaths'
          type='newDeaths'
          countryList={overviewData.newDeaths}
        />
        <TopList
          title='New Recovered'
          type='newRecovered'
          countryList={overviewData.newRecovered}
        />
      </div>
    </WorldPageWrapper>
  );
};

export default WorldPage;
