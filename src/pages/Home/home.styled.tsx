import styled from 'styled-components';
import { H1 } from '../../components/Config/typography.component';
import { Colors } from '../../components/Config/constants';

export const ResultHeading = styled(H1)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
`;

export const ResultText = styled(H1)`
  font-weight: medium;
  font-size: 1.3em;
  color: #333;
  em {
    font-style: italic;
    font-weight: bold;
  }
`;

export const ShuffleButton = styled.button`
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 3px;
  width: 100px;
  height: 30px;
  background: ${Colors.primary};
  color: white;
  padding: 8px 12px;
  span {
    margin-left: 6px;
    color: white;
  }

  &:hover {
    background: #003399;
  }
`;
