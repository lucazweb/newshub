import React from 'react';
import { Story } from '../../redux/news';
import { StoryCard, StyledImageBox, Title, StyledSpan } from './story.styled';

interface StoryProps {
  story: Story;
}

export const StoryItem: React.FC<StoryProps> = ({ story }) => {
  return (
    <StoryCard>
      <StyledSpan>{story.source}</StyledSpan>
      <StyledImageBox image={story.image} />
      <Title>{story.title}</Title>
    </StoryCard>
  );
};
