import React from 'react';

import LineChart from '../components/charts/LineChart';
import Card from '../components/UI/Card';

const DeathsOverTime = ({ data }) => {
  const chartData = [['x', 'Deaths'], ...data];
  return (
    <Card border='none'>
      <LineChart chartData={chartData} title='Deaths' color='#8b0000' />
    </Card>
  );
};

export default DeathsOverTime;
