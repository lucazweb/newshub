import styled from 'styled-components';
import { Typograph, Colors } from '../Config/constants';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 16px;
  margin-bottom: 32px;
  background: ${Colors.primary};
  color: white;
  pre {
    font-family: ${Typograph.brand};
    font-size: 1.6em;
  }
`;
