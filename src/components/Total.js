import React from 'react';
import styled from 'styled-components';

import Card from './UI/Card';

const TotalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
const Total = ({ icon, data: { title, total, color } }) => {
  console.log(title);
  return (
    <Card bg='white' borderColor={color}>
      <TotalWrapper>
        <div className='left'>
          <span>{title}</span>
          <h3>{total}</h3>
        </div>
        <img src={icon} width='50px' alt='heart' />
      </TotalWrapper>
    </Card>
  );
};

export default Total;
