import React from 'react';
import { Chart } from 'react-google-charts';

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

  return (
    <div>
      <Chart
        chartType='GeoChart'
        width='100%'
        height='100%'
        data={mapData}
        mapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        rootProps={{ 'data-testid': '1' }}
        options={{ colorAxis: { colors } }}
      />
    </div>
  );
};

export default Map;
