import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import CountryList from '../CountryList';

import { fetchSummary } from '../../utils/fetch';
import { formatTable } from '../../utils/formatData';

const CountriesPageWrapper = styled.div`
  input {
    width: 300px;
    height: 30px;
    border: 1px solid darkgrey;
    border-radius: 8px;
    padding: 0 5px;
    font-size: 16px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const CountriesPage = () => {
  const [countryListState, setCountryListState] = useState();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState();

  const fetchData = async () => {
    try {
      const summary = await fetchSummary();
      const table = formatTable(summary.countries);
      setCountryListState([...table]);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, []);

  if (loading) return <h1>Loading...</h1>;

  const searchHandler = (e) => {
    const val = e.target.value;
    setSearchList(
      countryListState.filter((c) =>
        c[0].split('>')[1].toLowerCase().includes(val.toLowerCase())
      )
    );
    setSearch(val);
  };

  return (
    <CountriesPageWrapper>
      <div className='header'>
        <h1>Country</h1>
        <input
          type='text'
          name='search'
          onChange={searchHandler}
          value={search}
          placeholder='Country Search'
        />
      </div>
      <CountryList list={search.length > 0 ? searchList : countryListState} />
    </CountriesPageWrapper>
  );
};

export default CountriesPage;
