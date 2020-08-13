import axios from 'axios';

import { formatCountryList } from './formatData';

const url = {
  summary: 'https://api.covid19api.com/summary',
  countrySummary: 'https://api.covid19api.com/total/country/',
};

export const fetchSummary = async () => {
  try {
    const res = await axios.get(url.summary);
    return {
      confirmed: {
        totalConfirmed: res.data.Global.TotalConfirmed,
        newConfirmed: res.data.Global.NewConfirmed,
      },
      deaths: {
        totalDeaths: res.data.Global.TotalDeaths,
        newDeaths: res.data.Global.NewDeaths,
        percentDeaths: +(
          (res.data.Global.TotalDeaths / res.data.Global.TotalConfirmed) *
          100
        ).toFixed(2),
        totalCases: res.data.Global.TotalConfirmed,
      },
      recovered: {
        totalRecovered: res.data.Global.TotalRecovered,
        newRecovered: res.data.Global.NewRecovered,
        percentRecovered: +(
          (res.data.Global.TotalRecovered / res.data.Global.TotalConfirmed) *
          100
        ).toFixed(2),
        totalCases: res.data.Global.TotalConfirmed,
      },
      countries: formatCountryList(res.data.Countries),
    };
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchCountrySummary = async (country) => {
  try {
    const res = await axios.get(
      `${url.countrySummary}${country}/status/confirmed`
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
