import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Card from '../UI/Card';

import Map from '../Map';
import { fetchSummary } from '../../utils/fetch';
import { formatMapData } from '../../utils/formatData';

const MapPageWrapper = styled.div`
  ul {
    display: flex;
    border-bottom: 1px solid lightgrey;
    padding: 10px 0 0 0;
  }
  li {
    padding: 0px 10px;
  }
  button {
    line-height: 2.5;
    padding-bottom: 4px;
    transition: none;
  }
`;

const MapPage = () => {
  const [mapState, setMapState] = useState({
    confirmed: [],
    deaths: [],
    recovered: [],
  });
  const [source, setSource] = useState('cases');
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const summary = await fetchSummary();
      const confirmed = formatMapData(summary.countries);
      const deaths = formatMapData(summary.countries, 'deaths');
      const recovered = formatMapData(summary.countries, 'recovered');
      setMapState({ ...mapState, confirmed, deaths, recovered });
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, []);

  const changeSource = (source) => {
    setSource(source);
  };

  const renderMap = () => {
    let data;
    if (source === 'cases') {
      data = mapState.confirmed;
    }
    if (source === 'deaths') {
      data = mapState.deaths;
    }
    if (source === 'recovered') {
      data = mapState.recovered;
    }
    return <Map mapData={data} source={source} />;
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <MapPageWrapper>
      <h1>World Map</h1>
      <Card>
        <ul>
          <li>
            <button
              className={`link subtext ${source === 'cases' ? 'active' : ''}`}
              onClick={() => changeSource('cases')}
            >
              Total Cases
            </button>
          </li>
          <li>
            <button
              className={`link subtext ${source === 'deaths' ? 'active' : ''}`}
              onClick={() => changeSource('deaths')}
            >
              Total Deaths
            </button>
          </li>
          <li>
            <button
              className={`link subtext ${
                source === 'recovered' ? 'active' : ''
              }`}
              onClick={() => changeSource('recovered')}
            >
              Total Recovered
            </button>
          </li>
        </ul>
        {renderMap()}
      </Card>
    </MapPageWrapper>
  );
};

export default MapPage;
