import styled, { css } from 'styled-components';

interface CardProps {
  type?: string;
  border?: string;
  bg?: string;
}

const Card = styled.div<CardProps>`
  background-color: ${(props) => props.theme.colors.cardBackground};
  color: ${(props) => props.theme.colors.textColor};

  ${(props) =>
    props.type &&
    props.type === 'deaths' &&
    css`
      border: 1px solid ${props.theme.colors.deathsColor};
    `}
  ${(props) =>
    props.type &&
    props.type === 'recovered' &&
    css`
      border: 1px solid ${props.theme.colors.recoveredColor};
    `}
  ${(props) =>
    props.type &&
    props.type === 'cases' &&
    css`
      border: 1px solid ${props.theme.colors.casesColor};
    `}
  padding: 15px 15px;
  border-radius: 10px;
  margin: 10px;
  flex: 1;
  -webkit-box-shadow: 5px 5px 10px -4px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 5px 5px 10px -4px rgba(0, 0, 0, 0.5);
  box-shadow: 5px 5px 10px -4px rgba(0, 0, 0, 0.5);
  a {
    color: ${(props) => props.theme.colors.linkColor};
  }
  svg {
    stroke: ${(props) => props.theme.colors.textColor};
  }
`;

export default Card;
