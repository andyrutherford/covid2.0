import React, { useContext } from 'react';
import { Chart } from 'react-google-charts';
import { ThemeContext } from 'styled-components';

const Map = ({ mapData, source }) => {
  const themeContext = useContext(ThemeContext);
  const {
    cardBackground,
    casesColor,
    deathsColor,
    recoveredColor,
  } = themeContext.colors;

  let colors;
  if (source === 'cases') {
    colors = ['#d9dcee', casesColor];
  }
  if (source === 'deaths') {
    colors = ['#fff', deathsColor];
  }
  if (source === 'recovered') {
    colors = ['#fff', recoveredColor];
  }

  return (
    <div>
      <Chart
        chartType='GeoChart'
        width='100%'
        height='100%'
        data={mapData}
        mapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        rootProps={{ 'data-testid': '1' }}
        options={{
          colorAxis: { colors },
          backgroundColor: cardBackground,
          is3D: true,
        }}
      />
    </div>
  );
};

export default Map;
