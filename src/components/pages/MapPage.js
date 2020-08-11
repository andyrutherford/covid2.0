import React, { useState, useEffect } from 'react';

import Container from '../UI/Container';
import Card from '../UI/Card';

import Map from '../Map';
import { fetchSummary } from '../../utils/fetch';
import { formatMapData } from '../../utils/formatData';

const MapPage = () => {
  const [mapState, setMapState] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const summary = await fetchSummary();
      const mapData = formatMapData(summary.countries);
      setMapState(mapData);
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
    <>
      <h1>World Map</h1>
      <Card>
        <Map mapData={mapState} />
      </Card>
    </>
  );
};

export default MapPage;
