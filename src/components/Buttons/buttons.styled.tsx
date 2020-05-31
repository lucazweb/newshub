import styled from 'styled-components';
import { Colors } from '../Config/constants';

export const StyledSearchBtn = styled.button`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  font-size: 1em;
  cursor: pointer;
  &:hover {
    color: ${Colors.primary};
  }
`;

export const StyledQueryBtn = styled.button`
  background: white;
  border: 1px solid #dadce0;
  margin: auto 5px;
  border-radius: 3px;
  font-size: 0.8em;
  font-style: italic;
  cursor: pointer;
  color: #666;
  padding: 4px 6px;
  &:hover {
    background: yellow;
  }
`;
