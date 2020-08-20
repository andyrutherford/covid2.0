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

// import React from 'react';
// import { Doughnut } from 'react-chartjs-2';

// const PieChart = ({ chartData, type }) => {
//   return (
//     <Doughnut
//       data={{
//         datasets: [
//           {
//             data: [chartData[1][1], chartData[2][1]],
//             backgroundColor: [
//               type === 'recovered' ? 'darkgreen' : 'darkred',
//               '#3b5892',
//             ],
//           },
//         ],

//         // These labels appear in the legend and in the tooltips when hovering different arcs
//         labels:
//           type === 'recovered'
//             ? ['Recovered', 'Not Recovered']
//             : ['Deaths', 'Cases'],
//       }}
//       width={400}
//       height={200}
//       options={{ maintainAspectRatio: false, legend: false }}
//     />
//   );
// };

// export default PieChart;
