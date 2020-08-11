export const formatMostAffectedCountries = (countries) => {
  return countries
    .map((c) => ({ country: c.Country, confirmed: c.TotalConfirmed }))
    .sort(function (a, b) {
      return a.confirmed - b.confirmed;
    })
    .reverse()
    .slice(0, 8);
};

export const formatMapData = (countries) => {
  let arr = countries.map((c) => [c.Country, c.TotalConfirmed]);
  arr.unshift(['Country', 'Confirmed Cases']);
  arr.forEach((i) => {
    if (i[0] === 'Congo (Brazzaville)') {
      i[0] = 'Democratic Republic of the Congo';
      return;
    }
    if (i[0] === 'Congo (Kinshasa)') {
      i[0] = 'Democratic Republic of the Congo';
      return;
    }
    if (i[0] === 'Brunei Darussalam') {
      i[0] = 'Brunei';
      return;
    }
    if (i[0] === 'Holy See (Vatican City State)') {
      i[0] = 'VA';
      return;
    }
    if (i[0] === 'Iran, Islamic Republic of') {
      i[0] = 'Iran';
      return;
    }
    if (i[0] === 'Korea (South)') {
      i[0] = 'South Korea';
      return;
    }
    if (i[0] === 'Lao PDR') {
      i[0] = 'Laos';
      return;
    }
    if (i[0] === 'Macedonia, Republic of') {
      i[0] = 'MK';
      return;
    }
    if (i[0] === 'Republic of Kosovo') {
      i[0] = 'XK';
      return;
    }
    if (i[0] === 'Russian Federation') {
      i[0] = 'Russia';
      return;
    }
    if (i[0] === 'Saint Vincent and Grenadines') {
      i[0] = 'Saint Vincent and the Grenadines';
      return;
    }
    if (i[0] === "Côte d'Ivoire") {
      i[0] = 'CI';
      return;
    }
    if (i[0] === 'South Sudan') {
      i[0] = 'Sudan';
      return;
    }
    if (i[0] === 'Syrian Arab Republic (Syria)') {
      i[0] = 'Syria';
      return;
    }
    if (i[0] === 'Taiwan, Republic of China') {
      i[0] = 'Taiwan';
      return;
    }
    if (i[0] === 'Tanzania, United Republic of') {
      i[0] = 'Tanzania';
      return;
    }
    if (i[0] === 'Timor-Leste') {
      i[0] = 'TL';
      return;
    }
    if (i[0] === 'United States of America') {
      i[0] = 'United States';
      return;
    }
    if (i[0] === 'Venezuela (Bolivarian Republic)') {
      i[0] = 'Venezuela';
      return;
    }
    if (i[0] === 'Viet Nam') {
      i[0] = 'Vietnam';
      return;
    }
  });

  return arr;
};
