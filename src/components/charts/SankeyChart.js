import React from 'react';
import { Chart } from 'react-google-charts';

const SankeyChart = ({ chartData }) => {
  return (
    <Chart
      width={600}
      height={'300px'}
      chartType='Sankey'
      loader={<div>Loading Chart</div>}
      data={chartData}
      rootProps={{ 'data-testid': '1' }}
    />
  );
};

export default SankeyChart;
