import React from 'react';
import styled from 'styled-components';

import Card from './UI/Card';
import PieChart from './charts/PieChart';

import { PercentIcon } from './UI/Icons';

interface WrapperProps {
  type?: string;
}

const RecoveredPercentageWrapper = styled.div<WrapperProps>`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  hr {
    border: 0.1px solid lightgrey;
    margin: 5px 0;
  }
  svg {
    fill: ${(props) => props.theme.colors.textColor};
  }

  .header {
    display: flex;
    align-items: center;
  }

  .header h3 {
    margin-left: 5px;
  }
  .graph {
    height: 200px;
    width: 200px;
    margin: auto;
    background-color: darkgrey;
  }

  .graph-info {
    display: flex;
    justify-content: space-around;
    padding-top: 5px;
  }

  .graph-info__left,
  .graph-info__right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    text-align: center;
  }
`;

interface Props {
  data: {
    totalRecovered: number;
    totalCases: number;
  };
}

const RecoveredPercentage: React.FunctionComponent<Props> = ({ data }) => {
  const chartData = [
    ['', ''],
    ['Recovered', data.totalRecovered],
    ['Not Recovered', data.totalCases - data.totalRecovered],
  ];

  return (
    <Card border='none'>
      <RecoveredPercentageWrapper>
        <div className='header'>
          <PercentIcon size={32} /> <h3>Recovered</h3>
        </div>
        <div>
          <PieChart chartData={chartData} type='recovered' />
        </div>
        <div className='graph-info'>
          <div className='graph-info__left'>
            <span>{+(data.totalRecovered / 1000000).toFixed(1) + 'M'}</span>
            <span className='subtext'>Recovered</span>
          </div>
          <hr />
          <div className='graph-info__right'>
            <span>{+(data.totalCases / 1000000).toFixed(1) + 'M'}</span>
            <span className='subtext'>Cases</span>
          </div>
        </div>
      </RecoveredPercentageWrapper>
    </Card>
  );
};

export default RecoveredPercentage;
