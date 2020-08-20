import React, { useContext } from 'react';
import { Chart } from 'react-google-charts';
import { ThemeContext } from 'styled-components';

const Map = ({ mapData, source }) => {
  let colors;
  if (source === 'cases') {
    colors = ['#d9dcee', '#3b5892'];
  }
  if (source === 'deaths') {
    colors = ['#fff', 'darkred'];
  }
  if (source === 'recovered') {
    colors = ['#fff', 'darkgreen'];
  }

  const themeContext = useContext(ThemeContext);
  const bgColor = themeContext.colors.cardBackground;

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
          backgroundColor: bgColor,
          is3D: true,
        }}
      />
    </div>
  );
};

export default Map;
