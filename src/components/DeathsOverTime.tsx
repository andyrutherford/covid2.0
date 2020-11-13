import React from 'react';
import LineChart from './charts/LineChart';
import Card from './UI/Card';

interface Props {
  data: any[];
}

const DeathsOverTime: React.FunctionComponent<Props> = ({ data }) => {
  const chartData = [['x', 'Deaths'], ...data];
  return (
    <Card border='none'>
      <LineChart chartData={chartData} title='Deaths' color='#8b0000' />
    </Card>
  );
};

export default DeathsOverTime;
