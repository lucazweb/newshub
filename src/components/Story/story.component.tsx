import React, { Dispatch, SetStateAction } from 'react';
import { Story } from '../../redux/news';
import { StoryCard, StyledImageBox, Title, StyledSpan } from './story.styled';
import { truncateString } from '../../lib/utils';

interface StoryProps {
  story: Story;
  handleDetail: Dispatch<SetStateAction<Story | null>>;
}

export const StoryItem: React.FC<StoryProps> = ({ story, handleDetail }) => {
  const handleCardClick = () => {
    console.log('Woww');
    handleDetail(story);
  };

  return (
    <StoryCard onClick={handleCardClick}>
      <StyledSpan>{story.source}</StyledSpan>
      <StyledImageBox image={story.image} />
      <Title>{truncateString(story.title)}</Title>
    </StoryCard>
  );
};
