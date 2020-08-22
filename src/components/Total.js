import React from 'react';
import styled, { css } from 'styled-components';

import Card from './UI/Card';
import {
  PlusIcon,
  DeathIcon,
  VirusIcon,
  HeartIcon,
} from '../components/UI/Icons';

const TotalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${(props) =>
    props.type &&
    props.type === 'deaths' &&
    css`
      color: ${(props) => props.theme.colors.deathsColor};
      .left svg {
        stroke: ${(props) => props.theme.colors.deathsColor};
      }
      .right svg {
        stroke: ${(props) => props.theme.colors.deathsColor};
        fill: ${(props) => props.theme.colors.deathsColor};
      }
    `}
  ${(props) =>
    props.type &&
    props.type === 'cases' &&
    css`
      color: ${(props) => props.theme.colors.casesColor};
      .left svg {
        stroke: ${(props) => props.theme.colors.casesColor};
      }
      .right svg {
        stroke: ${(props) => props.theme.colors.casesColor};
        fill: ${(props) => props.theme.colors.casesColor};
      }
    `}  
  ${(props) =>
    props.type &&
    props.type === 'recovered' &&
    css`
      color: ${(props) => props.theme.colors.recoveredColor};
      .left svg {
        stroke: ${(props) => props.theme.colors.recoveredColor};
      }
      .right svg {
        stroke: ${(props) => props.theme.colors.recoveredColor};
        fill: ${(props) => props.theme.colors.recoveredColor};
      }
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
    align-items: center;
  }
`;
const Total = ({ type, total, recent, data: { title, color } }) => {
  return (
    <Card type={type}>
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
        {/* <img src={icon} width='50px' alt='icon' /> */}
        <div className='right'>
          {type === 'cases' && <VirusIcon size={50} />}
          {type === 'deaths' && <DeathIcon size={50} />}
          {type === 'recovered' && <HeartIcon size={50} />}
        </div>
      </TotalWrapper>
    </Card>
  );
};

export default Total;
