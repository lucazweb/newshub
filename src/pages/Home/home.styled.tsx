import styled from 'styled-components';
import { H1 } from '../../components/Config/typography.component';
import { Breakpoint, Colors } from '../../components/Config/constants';

export const ResultHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
`;

export const ResultText = styled(H1)`
  display: flex;
  align-items: center;
  font-weight: medium;
  font-size: 1.3em;
  color: #333;
  em {
    font-style: italic;
    font-weight: bold;
  }

  @media (max-width: ${Breakpoint.sm}em) {
    font-size: 1em;
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
    // background: #003399;
  }

  @media (max-width: ${Breakpoint.sm}em) {
    display: none;
  }
`;

// Search form
export const SearchForm = styled.form`
  width: 60%;
`;

export const SearchFormField = styled.div`
  width: 100%;
`;
export const SearchInput = styled.input`
  padding: 8px 10px;
  border: 1px solid ${Colors.primary};
  border-radius: 3px;
  width: 100%;
  height: 45px;
  font-size: 1.1em;
  color: ${Colors.primary};
  &::placeholder {
    color: #5c9df5;
    font-weight: 100;
  }
`;
