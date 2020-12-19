export type FetchCountryInfo = {
  confirmed: {
    newConfirmed: number;
    totalConfirmed: number;
  };
  deaths: {
    newDeaths: number;
    totalDeaths: number;
    percentDeaths: number;
    totalCases: number;
  };
  recovered: {
    newRecovered: number;
    totalRecovered: number;
    percentRecovered: number;
    totalCases: number;
  };
  countries: CountryInfo[];
};

export type CountryInfo = {
  Country: string;
  CountryCode: string;
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: {};
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
};

export type FetchCountrySummary = {
  cases: {
    config?: any;
    headers?: any;
    request?: any;
    status?: any;
    statusText?: any;
    data: {
      Cases: number;
      City: string;
      CityCode: string;
      Country: string;
      CountryCode: string;
      Date: string;
      Lat: string;
      Lon: string;
      Province: string;
      Status: string;
    };
  };
  deaths: {
    config?: any;
    headers?: any;
    request?: any;
    status?: any;
    statusText?: any;
    data: {
      Cases: number;
      City: string;
      CityCode: string;
      Country: string;
      CountryCode: string;
      Date: string;
      Lat: string;
      Lon: string;
      Province: string;
      Status: string;
    };
  };
};

export type CountryInfoList = CountryInfo[];

export enum InfoTypes {
  cases = 'cases',
  deaths = 'deaths',
  recovered = 'recovered',
}

export enum NewInfoTypes {
  newCases = 'newCases',
  newDeaths = 'newDeaths',
  newRecovered = 'newRecovered',
}

export type MostAffectedCountry = {
  country: string;
  slug: string;
  countryCode: string;
  confirmed?: number;
  deaths?: number;
  recovered?: number;
  newConfirmed?: number;
  newDeaths?: number;
  newRecovered?: number;
};

export type MostAffectedCountryList = MostAffectedCountry[];

export type MapDataHeading = [string, string];

export type MapDataList = MapDataHeading & [string, number][];

export type TableData = [
  string,
  number,
  number,
  number,
  number,
  number,
  number
];

export type TableDataList = TableData[];

export type LineChartData = {
  Cases: number;
  City: string;
  CityCode: string;
  Country: string;
  CountryCode: string;
  Date: string;
  Lat: string;
  Lon: string;
  Province: string;
  Status: string;
};

export type LineChartDataList = {
  config?: any;
  headers?: any;
  request?: any;
  status?: any;
  statusText?: any;
  data: LineChartData[];
};
