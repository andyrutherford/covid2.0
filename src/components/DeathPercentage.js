import React from 'react';
import styled from 'styled-components';

import Card from '../components/UI/Card';

const DeathPercentageWrapper = styled.div`
  .graph {
    width: 100%;
    height: 250px;
    background-color: darkgrey;
  }
`;

const DeathPercentage = () => {
  return (
    <Card border='none'>
      {' '}
      <DeathPercentageWrapper>
        <h2>Percent Deaths</h2>
        <div className='graph'></div>
      </DeathPercentageWrapper>
    </Card>
  );
};

export default DeathPercentage;
