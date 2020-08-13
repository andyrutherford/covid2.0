import React, { useEffect, useState } from 'react';

import CountryList from '../CountryList';

import { fetchSummary } from '../../utils/fetch';
import { formatTable } from '../../utils/formatData';

const CountriesPage = () => {
  const [countryListState, setCountryListState] = useState();
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      <h1>Country</h1>
      <CountryList list={countryListState} />
    </div>
  );
};

export default CountriesPage;
