import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem 10rem;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textColor};
  .page-header {
    color: ${(props) => props.theme.colors.textColor};
    fill: ${(props) => props.theme.colors.textColor};
    display: flex;
    align-items: center;
  }

  .page-header svg {
    stroke: ${(props) => props.theme.colors.textColor};
  }
  .subtext {
    color: ${(props) => props.theme.colors.secondaryTextColor};
  }
  @media screen and (max-width: 1500px) {
    padding-left: 2.5%;
    padding-right: 2.5%;
    .page-header {
      padding-left: 50px;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 600px) {
    .page-header {
      padding-left: 60px;
    }
  }
`;

export default Container;
