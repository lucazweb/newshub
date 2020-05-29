import React from 'react';
import { StoryCard, StyledImageBox, Title, StyledSpan } from './story.styled';

const tempImage =
  'https://cdn.cnn.com/cnnnext/dam/assets/200528165046-03-trump-social-media-executive-order-large-tease.jpg';

export const Story: React.FC = () => {
  return (
    <StoryCard>
      <StyledSpan>The New York Times</StyledSpan>
      <StyledImageBox image={tempImage} />
      <Title>
        A new research developed in order to help Covid19 victims by UCLA
      </Title>
    </StoryCard>
  );
};
