import React from 'react';
import { Chart } from 'react-google-charts';

const SankeyChart = () => {
  return (
    <Chart
      width={'100%'}
      height={'300px'}
      chartType='Sankey'
      loader={<div>Loading Chart</div>}
      data={[
        ['From', 'To', 'Weight'],
        ['Cases', 'Deaths', 1],
        ['Cases', 'Recovered', 7],
      ]}
      rootProps={{ 'data-testid': '1' }}
    />
  );
};

export default SankeyChart;
