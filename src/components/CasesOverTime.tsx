import React from 'react';
import LineChart from './charts/LineChart';
import Card from './UI/Card';

interface Props {
  data: [];
}

const CasesOverTime: React.FunctionComponent<Props> = ({ data }) => {
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
