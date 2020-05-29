import styled from 'styled-components';
import { Typograph, Colors } from '../Config/constants';
import { H1 } from '../Config/typography.component';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 16px;
  margin-bottom: 32px;
  background: ${Colors.primary};
  color: white;
`;

export const AppTitle = styled(H1)`
  color: white;
  font-family: ${Typograph.brand};
  font-size: 1.6em;
`;
