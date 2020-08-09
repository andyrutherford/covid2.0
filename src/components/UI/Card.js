import styled from 'styled-components';
import { color, space, layout, border } from 'styled-system';

const Card = styled.div`
  padding: 15px 10px;
  border: 1px solid black;
  border-radius: 10px;
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
  ${color}
  ${space}
  ${layout}
  ${border}
`;

export default Card;
