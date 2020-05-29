import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { StoryCard, SkeletonWrapper } from './story.styled';

export const StorySkeleton = () => {
  return (
    <StoryCard>
      <SkeletonWrapper>
        <Skeleton count={1} height={200} />
      </SkeletonWrapper>
      <Skeleton count={2} />
    </StoryCard>
  );
};
