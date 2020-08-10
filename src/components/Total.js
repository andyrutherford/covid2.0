import React from 'react';
import styled, { css } from 'styled-components';

import Card from './UI/Card';

const TotalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${(props) =>
    props.type &&
    css`
      color: ${props.color};
    `}

  span {
    color: grey;
    margin-bottom: 5px;
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
const Total = ({ type, icon, total, data: { title, color } }) => {
  return (
    <Card bg='white' borderColor={color}>
      <TotalWrapper type={type} color={color}>
        <div className='left'>
          <span>{title}</span>
          <h2>{total.toLocaleString()}</h2>
        </div>
        <img src={icon} width='50px' alt='heart' />
      </TotalWrapper>
    </Card>
  );
};

export default Total;
