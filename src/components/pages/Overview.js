import React from 'react';
import styled from 'styled-components';

import Container from '../UI/Container';
import Card from '../UI/Card';

import Total from '../Total';
import OverviewMap from '../OverviewMap';

import virus from '../../assets/virus.svg';
import death from '../../assets/death.svg';
import heart from '../../assets/heart.svg';

const data = {
  cases: {
    type: 'cases',
    title: 'Total Worldwide Cases',
    total: 48284029,
    color: '#3b5892',
  },
  deaths: {
    type: 'deaths',
    title: 'Total Worldwide Deaths',
    total: 1275028,
    color: 'darkred',
  },
  recovered: {
    type: 'recovered',
    title: 'Total Worldwide Recovered',
    total: 482740,
    color: 'darkgreen',
  },
};

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  /* Color the border and text with theme.main */
  background-color: ${(props) => props.theme.colors.navy};
`;

const OverviewWrapper = styled.section`
  display: flex;

  .col-1 {
    width: 80%;
  }

  .total-cards {
    display: flex;
    justify-content: space-between;
  }

  .col-2 {
    border: 1px dashed blue;
    width: 20%;
  }

  @media (max-width: 1000px) {
    .total-cards {
      display: block;
    }
  }
`;
const Overview = () => {
  return (
    <Container width={1} bg='lightgrey'>
      <h1>Overview</h1>
      <OverviewWrapper>
        <div className='col-1'>
          <div className='total-cards'>
            <Total type='cases' data={data.cases} icon={virus} />
            <Total type='deaths' data={data.deaths} icon={death} />
            <Total type='recovered' data={data.recovered} icon={heart} />
          </div>
          <OverviewMap />
        </div>
        <div className='col-2'>2</div>
      </OverviewWrapper>
      <Button>Click</Button>
    </Container>
  );
};

export default Overview;
