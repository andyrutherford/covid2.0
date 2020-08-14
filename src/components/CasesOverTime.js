import React from 'react';

import LineChart from '../components/charts/LineChart';
import Card from '../components/UI/Card';

const CasesOverTime = ({ data }) => {
  const chartData = [['x', 'Cases'], ...data];
  console.log(chartData);
  return (
    <Card>
      <LineChart chartData={chartData} />
    </Card>
  );
};

export default CasesOverTime;
