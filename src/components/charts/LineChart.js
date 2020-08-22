import React, { useContext } from 'react';
import { Chart } from 'react-google-charts';
import { ThemeContext } from 'styled-components';

const LineChart = ({ chartData, title, color }) => {
  const themeContext = useContext(ThemeContext);
  const { cardBackground, textColor } = themeContext.colors;
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
          textStyle: { color: textColor },
          titleTextStyle: { color: textColor },
        },
        vAxis: {
          title,
          textStyle: { color: textColor },
          titleTextStyle: { color: textColor },
        },
        legend: {
          position: 'none',
        },
        colors: [color],
        backgroundColor: cardBackground,
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
};

export default LineChart;
