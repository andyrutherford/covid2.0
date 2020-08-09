import React from 'react';
import styled from 'styled-components';

import Container from '../UI/Container';

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
    border: 1px dashed green;
    width: 75%;
  }

  .col-2 {
    border: 1px dashed blue;
    width: 25%;
  }
`;
const Overview = () => {
  return (
    <Container width={1} bg='lightgrey'>
      <h1>Overview</h1>
      <OverviewWrapper>
        <div className='col-1'>1</div>
        <div className='col-2'>2</div>
      </OverviewWrapper>
      <Button>Click</Button>
    </Container>
  );
};

export default Overview;
