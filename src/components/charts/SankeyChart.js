import React, { useContext } from 'react';
import { Chart } from 'react-google-charts';
import { ThemeContext } from 'styled-components';

const SankeyChart = ({ chartData }) => {
  const themeContext = useContext(ThemeContext);
  const { textColor, deathsColor } = themeContext.colors;
  return (
    <Chart
      width={'100%'}
      height={'300px'}
      chartType='Sankey'
      loader={<div>Loading Chart</div>}
      data={chartData}
      rootProps={{ 'data-testid': '1' }}
      options={{
        sankey: {
          link: { color: { fill: deathsColor, fillOpacity: 0.8 } },
          node: {
            label: {
              fontSize: 14,
              color: textColor,
              bold: true,
            },
          },
        },
      }}
    />
  );
};

export default SankeyChart;
