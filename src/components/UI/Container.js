import styled from 'styled-components';
import { color, space, layout } from 'styled-system';

const Container = styled.div`
  padding: 1rem 10rem;
  height: 100%;
  ${color}
  ${space}
  ${layout}
  @media screen and (max-width: 1500px) {
    padding-left:  2.5%;
    padding-right:  2.5%;
  }
`;

export default Container;
