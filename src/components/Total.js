import React from 'react';
import styled, { css } from 'styled-components';

import Card from './UI/Card';
import { PlusIcon } from '../components/UI/Icons';

const TotalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${(props) =>
    props.type &&
    props.type === 'deaths' &&
    css`
      color: var(--deathsColor);
    `}
  ${(props) =>
    props.type &&
    props.type === 'cases' &&
    css`
      color: var(--casesColor);
    `}  
  ${(props) =>
    props.type &&
    props.type === 'recovered' &&
    css`
      color: var(--recoveredColor);
    `}
  h2 {
    margin: 5px 0;
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .new {
    display: flex;
    align-iteme: center;
  }
`;
const Total = ({ type, icon, total, recent, data: { title, color } }) => {
  return (
    <Card bg='white' borderColor={color}>
      <TotalWrapper type={type} color={color}>
        <div className='left'>
          <span className='subtext'>{title}</span>
          <h2>{total.toLocaleString()}</h2>
          <span className='new'>
            <PlusIcon size={20} stroke={color} />{' '}
            <span className='bold'>&nbsp;{recent.toLocaleString()}&nbsp;</span>{' '}
            New {type[0].toUpperCase() + type.slice(1, type.length)}
          </span>
        </div>
        <img src={icon} width='50px' alt='icon' />
      </TotalWrapper>
    </Card>
  );
};

export default Total;
