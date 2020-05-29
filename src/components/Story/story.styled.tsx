import styled from 'styled-components';
import { H2 } from '../Config/typography.component';

export const StoryCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 24px;
`;

interface StyledImageProps {
  image?: string;
}

const imagePlaceholder =
  'https://nbhc.ca/sites/default/files/styles/article/public/default_images/news-default-image%402x_0.png?itok=d03WAFvJ';

export const StyledImageBox = styled.div`
    min-width: 250px;
    min-height: 200px;
    background-image: url('${({ image }: StyledImageProps) =>
      image ? image : imagePlaceholder}');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 4px;
    margin-bottom: 12px;
    filter: grayscale(.9);
    transition: filter ease 0.5s;
    cursor: pointer;
    &:hover {
      filter: none;
    }
`;

export const Title = styled(H2)`
  text-align: left;
  font-size: 1em;
`;

export const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background: yellow;
  font-style: italic;
  padding: 3px;
  font-weight: bold;
  padding-right: 8px;
  border-radius: 0 0 6px 0px;
  opacity: 0.8;
  z-index: 900;
`;
