import {
  CountryInfoList,
  InfoTypes,
  LineChartDataList,
  MapDataList,
  MostAffectedCountryList,
  TableDataList,
} from '../types';

export const formatCountryList = (list: CountryInfoList) => {
  const arr = list.map((c) => {
    switch (c.Country) {
      case 'Brunei Darussalam':
        return { ...c, Country: 'Brunei' };
      case 'Holy See (Vatican City State)':
        return { ...c, Country: 'Vatican City' };
      case 'Iran, Islamic Republic of':
        return { ...c, Country: 'Iran' };
      case 'Korea (South)':
        return { ...c, Country: 'South Korea' };
      case 'Lao PDR':
        return { ...c, Country: 'Laos' };
      case 'Macedonia, Republic of':
        return { ...c, Country: 'Macedonia' };
      case 'Republic of Kosovo':
        return { ...c, Country: 'Kosovo' };
      case 'Russian Federation':
        return { ...c, Country: 'Russia' };
      case 'Saint Vincent and Grenadines':
        return { ...c, Country: 'Saint Vincent and the Grenadines' };
      case "Côte d'Ivoire":
        return { ...c, Country: 'CI' };
      case 'South Sudan':
        return { ...c, Country: 'Sudan' };
      case 'Syrian Arab Republic (Syria)':
        return { ...c, Country: 'Syria' };
      case 'Taiwan, Republic of China':
        return { ...c, Country: 'Taiwan' };
      case 'Tanzania, United Republic of':
        return { ...c, Country: 'Tanzania' };
      case 'United States of America':
        return { ...c, Country: 'United States' };
      case 'Venezuela (Bolivarian Republic)':
        return { ...c, Country: 'Venezuela' };
      case 'Viet Nam':
        return { ...c, Country: 'Vietnam' };
      default:
        return c;
    }
  });
  return arr as CountryInfoList;
};

export const formatMostAffectedCountries = (
  countries: CountryInfoList,
  type: InfoTypes
) => {
  let arr: MostAffectedCountryList = [];
  if (type === 'cases') {
    arr = countries
      .map((c) => ({
        country: c.Country,
        slug: c.Slug,
        countryCode: c.CountryCode,
        confirmed: c.TotalConfirmed,
      }))
      .sort(function (a, b) {
        return a.confirmed - b.confirmed;
      });
  } else if (type === 'deaths') {
    arr = countries
      .map((c) => ({
        country: c.Country,
        slug: c.Slug,
        countryCode: c.CountryCode,
        deaths: c.TotalDeaths,
      }))
      .sort(function (a, b) {
        return a.deaths - b.deaths;
      });
  } else if (type === 'recovered') {
    arr = countries
      .map((c) => ({
        country: c.Country,
        slug: c.Slug,
        countryCode: c.CountryCode,
        recovered: c.TotalRecovered,
      }))
      .sort(function (a, b) {
        return a.recovered - b.recovered;
      });
  } else if (type === 'newCases') {
    arr = countries
      .map((c) => ({
        country: c.Country,
        slug: c.Slug,
        countryCode: c.CountryCode,
        newCases: c.NewConfirmed,
      }))
      .sort(function (a, b) {
        return a.newCases - b.newCases;
      });
  } else if (type === 'newDeaths') {
    arr = countries
      .map((c) => ({
        country: c.Country,
        slug: c.Slug,
        countryCode: c.CountryCode,
        newDeaths: c.NewDeaths,
      }))
      .sort(function (a, b) {
        return a.newDeaths - b.newDeaths;
      });
  } else if (type === 'newRecovered') {
    arr = countries
      .map((c) => ({
        country: c.Country,
        slug: c.Slug,
        countryCode: c.CountryCode,
        newRecovered: c.NewRecovered,
      }))
      .sort(function (a, b) {
        return a.newRecovered - b.newRecovered;
      });
  }
  return arr.reverse().slice(0, 8) as MostAffectedCountryList;
};

export const formatMapData = (list: CountryInfoList, type: InfoTypes) => {
  let arr;
  arr = list.map((c) => [c.Country, c.TotalConfirmed]);
  arr.unshift(['Country', 'Confirmed Cases']);

  if (type === 'deaths') {
    arr = list.map((c) => [c.Country, c.TotalDeaths]);
    arr.unshift(['Country', 'Total Deaths']);
  }

  if (type === 'recovered') {
    arr = list.map((c) => [c.Country, c.TotalRecovered]);
    arr.unshift(['Country', 'Total Recovered']);
  }
  return arr as MapDataList;
};

export const formatTable = (list: CountryInfoList) => {
  return list.map((i) => [
    `<a href="/country/${i.Slug}">${i.Country}</a>`,
    i.TotalConfirmed,
    i.TotalDeaths,
    i.TotalRecovered,
    i.NewConfirmed,
    i.NewDeaths,
    i.NewRecovered,
  ]) as TableDataList;
};

export const formatLineChartData = (list: LineChartDataList) => {
  return list.data.map((i) => {
    const date = i.Date.split('-').slice(1, 3).join('-').split('T')[0];
    return [date, i.Cases] as [string, number];
  });
};
