import axios from 'axios';

import { formatCountryList } from './formatData';
import { data } from './data';

const url = {
  summary: 'https://api.covid19api.com/summary',
  countrySummary: 'https://api.covid19api.com/total/country/',
};

const testData = true;

export const fetchSummary = async () => {
  if (testData) {
    return {
      confirmed: {
        totalConfirmed: data.Global.TotalConfirmed,
        newConfirmed: data.Global.NewConfirmed,
      },
      deaths: {
        totalDeaths: data.Global.TotalDeaths,
        newDeaths: data.Global.NewDeaths,
        percentDeaths: +(
          (data.Global.TotalDeaths / data.Global.TotalConfirmed) *
          100
        ).toFixed(2),
        totalCases: data.Global.TotalConfirmed,
      },
      recovered: {
        totalRecovered: data.Global.TotalRecovered,
        newRecovered: data.Global.NewRecovered,
        percentRecovered: +(
          (data.Global.TotalRecovered / data.Global.TotalConfirmed) *
          100
        ).toFixed(2),
        totalCases: data.Global.TotalConfirmed,
      },
      countries: formatCountryList(data.Countries),
    };
  }
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
    const cases = await axios.get(
      `${url.countrySummary}${country}/status/confirmed`
    );
    const deaths = await axios.get(
      `${url.countrySummary}${country}/status/deaths`
    );

    const res = { cases, deaths };

    return res;
  } catch (error) {
    console.log(error.message);
  }
};
