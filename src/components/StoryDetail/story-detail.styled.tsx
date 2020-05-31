import styled from 'styled-components';
import { Breakpoint, Colors } from '../Config/constants';
import { H2 } from '../Config/typography.component';
import { StyledImageBox } from '../Story/story.styled';

export const StoryModalOverflow = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background: rgba(78, 78, 78, 0.8);
`;

export const StoryModal = styled.div`
  position: relative;
  width: 50%;
  height: 100vh;
  background: white;
  border-left: 2px solid ${Colors.primary};
  padding: 32px;
  overflow-y: scroll;

  @media (max-width: ${Breakpoint.sm}em) {
    width: 100%;
    padding: 16px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  right: 20px;
  top: 10px;

  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: #333;
  font-size: 2em;
  background: #f3f3f3;
  &:hover {
    background: ${Colors.primary};
    color: white;
  }
`;

export const StoryTitle = styled(H2)`
  width: 90%;
  font-size: 1.5em;
  margin-bottom: 32px;
  @media (max-width: ${Breakpoint.sm}em) {
    font-size: 1.2em;
    width: 80%;
  }
`;

export const StoryFeaturedImage = styled(StyledImageBox)`
  width: 100%;
  height: 350px;
  filter: none;
  @media (max-width: ${Breakpoint.sm}em) {
    height: 200px;
  }
`;

export const StoryContent = styled.p`
  line-height: 1.6em;
`;

export const SourceTitle = styled.span`
  display: block;
  margin-top: 18px;
  a {
    font-weight: bold;
  }
`;
