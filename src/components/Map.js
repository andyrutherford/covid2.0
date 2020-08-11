import React from 'react';
import { Chart } from 'react-google-charts';

const data = [
  ['Country', 'Popularity'],
  ['Germany', 200],
  ['United States', 300],
  ['Brazil', 400],
  ['Canada', 500],
  ['France', 600],
  ['RU', 700],
];

const Map = ({ mapData }) => {
  return (
    <div>
      <Chart
        chartEvents={[
          {
            eventName: 'select',
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log('Selected : ' + region);
            },
          },
        ]}
        chartType='GeoChart'
        width='100%'
        height='100%'
        data={mapData}
        mapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        rootProps={{ 'data-testid': '1' }}
        options={{ colorAxis: { colors: ['#d9dcee', '#3b5892'] } }}
      />
    </div>
  );
};

export default Map;
