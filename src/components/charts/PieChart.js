import React, { useContext } from 'react';
import { Chart } from 'react-google-charts';
import { ThemeContext } from 'styled-components';

const PieChart = ({ chartData, type }) => {
  const themeContext = useContext(ThemeContext);
  const {
    cardBackground,
    casesColor,
    deathsColor,
    recoveredColor,
  } = themeContext.colors;
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
        colors: [type === 'deaths' ? deathsColor : recoveredColor, casesColor],
        backgroundColor: cardBackground,
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
};

export default PieChart;
