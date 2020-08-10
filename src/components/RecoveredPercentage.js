import React from 'react';
import styled from 'styled-components';

import Card from '../components/UI/Card';

const RecoveredPercentageWrapper = styled.div`
  .graph {
    width: 100%;
    height: 250px;
    background-color: darkgrey;
  }
`;

const RecoveredPercentage = () => {
  return (
    <Card border='none'>
      {' '}
      <RecoveredPercentageWrapper>
        <h2>Percent Recovered</h2>
        <div className='graph'></div>
      </RecoveredPercentageWrapper>
    </Card>
  );
};

export default RecoveredPercentage;
