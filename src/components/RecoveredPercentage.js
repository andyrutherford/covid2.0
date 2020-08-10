import React from 'react';
import styled from 'styled-components';

import Card from '../components/UI/Card';

import { PercentIcon } from '../components/UI/Icons';

const RecoveredPercentageWrapper = styled.div`
  hr {
    border: 0.1px solid lightgrey;
    margin: 5px 0;
  }

  .header {
    display: flex;
    align-items: center;
  }

  .header h3 {
    margin-left: 5px;
  }
  .graph {
    height: 120px;
    width: 120px;
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

const RecoveredPercentage = ({ data }) => {
  return (
    <Card border='none'>
      <RecoveredPercentageWrapper>
        <div className='header'>
          <PercentIcon size={32} /> <h3>Recovered</h3>
        </div>
        <div className='graph'>
          <h2>{data.percentRecovered}%</h2>
        </div>
        <div className='graph-info'>
          <div className='graph-info__left'>
            <span>{+(data.totalRecovered / 1000000).toFixed(1) + 'M'}</span>
            <span>Recovered</span>
          </div>
          <hr />
          <div className='graph-info__right'>
            <span>{+(data.totalCases / 1000000).toFixed(1) + 'M'}</span>
            <span>Cases</span>
          </div>
        </div>
      </RecoveredPercentageWrapper>
    </Card>
  );
};

export default RecoveredPercentage;
