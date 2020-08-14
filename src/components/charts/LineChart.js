import React from 'react';
import { Chart } from 'react-google-charts';

const LineChart = ({ chartData }) => {
  return (
    <Chart
      width={'100%'}
      height={'400px'}
      chartType='LineChart'
      loader={<div>Loading Chart</div>}
      data={chartData}
      options={{
        hAxis: {
          title: 'Date',
        },
        vAxis: {
          title: 'Confirmed Cases',
        },
        legend: {
          position: 'none',
        },
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
};

export default LineChart;
