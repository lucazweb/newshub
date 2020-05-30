import React from 'react';
import {
  StoryModalOverflow,
  StoryModal,
  StoryTitle,
  StoryContent,
  StoryFeaturedImage,
  CloseBtn,
  SourceTitle,
} from './story-detail.styled';
import { Story } from '../../redux/news';
import { RiCloseLine } from 'react-icons/ri';

interface StoryDetail {
  story: Story;
  handleClose?: () => void;
}

export const StoryDetail: React.FC<StoryDetail> = ({ story, handleClose }) => {
  console.log(story);
  return (
    <StoryModalOverflow>
      <StoryModal>
        <CloseBtn onClick={handleClose}>
          <RiCloseLine />
        </CloseBtn>
        <StoryTitle>{story.title}</StoryTitle>
        <StoryFeaturedImage image={story.image} />
        <StoryContent>{story.content}</StoryContent>
        <SourceTitle>
          See on:{' '}
          <a href={story.url} rel="noopener noreferrer" target="_blank">
            {story.source}
          </a>
        </SourceTitle>
      </StoryModal>
    </StoryModalOverflow>
  );
};
