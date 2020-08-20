import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Card from '../UI/Card';
import { MapIcon } from '../UI/Icons';
import Map from '../Map';
import { fetchSummary } from '../../utils/fetch';
import { formatMapData } from '../../utils/formatData';

const MapPageWrapper = styled.div`
  h1 {
    margin-left: 10px;
  }
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
      <div className='page-header'>
        <MapIcon size={46} />
        <h1>World Map</h1>
      </div>
      <Card border='none'>
        <ul>
          <li>
            <button
              className={`link subtext ${
                source === 'cases' ? 'active-tab' : ''
              }`}
              onClick={() => changeSource('cases')}
            >
              Total Cases
            </button>
          </li>
          <li>
            <button
              className={`link subtext ${
                source === 'deaths' ? 'active-tab' : ''
              }`}
              onClick={() => changeSource('deaths')}
            >
              Total Deaths
            </button>
          </li>
          <li>
            <button
              className={`link subtext ${
                source === 'recovered' ? 'active-tab' : ''
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
