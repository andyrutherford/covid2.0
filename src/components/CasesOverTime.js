import React from 'react';

import LineChart from '../components/charts/LineChart';
import Card from '../components/UI/Card';

const CasesOverTime = ({ data }) => {
  const chartData = [['x', 'Cases'], ...data];
  return (
    <Card border='none'>
      <LineChart
        chartData={chartData}
        title='Confirmed Cases'
        color='#3b5892'
      />
    </Card>
  );
};

export default CasesOverTime;
