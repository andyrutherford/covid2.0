export const formatCountryList = (list) => {
  const arr = list.map((c) => {
    switch (c.Country) {
      case 'Congo (Brazzaville)':
        return { ...c, Country: 'Democratic Republic of the Congo' };
      case 'Congo (Kinshasa)':
        return { ...c, Country: 'Democratic Republic of the Congo' };
      case 'Brunei Darussalam':
        return { ...c, Country: 'Brunei' };
      case 'Holy See (Vatican City State)':
        return { ...c, Country: 'VA' };
      case 'Iran, Islamic Republic of':
        return { ...c, Country: 'Iran' };
      case 'Korea (South)':
        return { ...c, Country: 'South Korea' };
      case 'Lao PDR':
        return { ...c, Country: 'Laos' };
      case 'Macedonia, Republic of':
        return { ...c, Country: 'MK' };
      case 'Republic of Kosovo':
        return { ...c, Country: 'XK' };
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
      case 'Timor-Leste':
        return { ...c, Country: 'Timor Leste' };
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
  return arr;
};

export const formatMostAffectedCountries = (countries, type) => {
  let arr;
  if (type === 'cases') {
    arr = countries
      .map((c) => ({ country: c.Country, confirmed: c.TotalConfirmed }))
      .sort(function (a, b) {
        return a.confirmed - b.confirmed;
      });
  } else if (type === 'deaths') {
    arr = countries
      .map((c) => ({ country: c.Country, deaths: c.TotalDeaths }))
      .sort(function (a, b) {
        return a.deaths - b.deaths;
      });
  }

  return arr.reverse().slice(0, 8);
};

export const formatMapData = (list, type) => {
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

  return arr;
};
