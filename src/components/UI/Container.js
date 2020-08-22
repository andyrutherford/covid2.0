import styled from 'styled-components';
import { color, space, layout } from 'styled-system';

const Container = styled.div`
  padding: 1rem 10rem;
  height: 100%;
  width: 100%;
  ${color}
  ${space}
  ${layout}
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textColor};
  .page-header {
    color: ${(props) => props.theme.colors.textColor};
    fill: ${(props) => props.theme.colors.textColor};
  }

  .page-header svg {
    stroke: ${(props) => props.theme.colors.textColor};
  }
  .subtext {
    color: ${(props) => props.theme.colors.secondaryTextColor};

  }
  @media screen and (max-width: 1500px) {
    padding-left:  2.5%;
    padding-right:  2.5%;
  }
`;

export default Container;
