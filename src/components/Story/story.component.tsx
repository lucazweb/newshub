import React from 'react';
import { Story } from '../../redux/news';
import { StoryCard, StyledImageBox, Title, StyledSpan } from './story.styled';
import { truncateString } from '../../lib/utils';

interface StoryProps {
  story: Story;
}

export const StoryItem: React.FC<StoryProps> = ({ story }) => {
  return (
    <StoryCard>
      <StyledSpan>{story.source}</StyledSpan>
      <StyledImageBox image={story.image} />
      <Title>{truncateString(story.title)}</Title>
    </StoryCard>
  );
};
