export const formatMostAffectedCountries = (countries) => {
  return countries
    .map((c) => ({ country: c.Country, confirmed: c.TotalConfirmed }))
    .sort(function (a, b) {
      return a.confirmed > b.confirmed;
    })
    .reverse()
    .slice(0, 8);
};
