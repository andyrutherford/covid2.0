import styled from 'styled-components';
import { space, layout, border } from 'styled-system';

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.cardBackground};
  color: ${(props) => props.theme.colors.textColor};
  padding: 15px 15px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  flex: 1;
  -webkit-box-shadow: 5px 5px 10px -4px rgba(0,0,0,0.5);
  -moz-box-shadow: 5px 5px 10px -4px rgba(0,0,0,0.5);
  box-shadow: 5px 5px 10px -4px rgba(0,0,0,0.5);
  ${space}
  ${layout}
  ${border}
`;

export default Card;
