import React from 'react';
import { Chart } from 'react-google-charts';

const PieChart = ({ chartData }) => {
  return (
    <Chart
      width={'100%'}
      height={'100%'}
      chartType='PieChart'
      loader={<div>Loading Chart</div>}
      data={chartData}
      options={{
        legend: 'none',
        chartArea: { width: '100%', height: '90%' },
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
};

export default PieChart;
