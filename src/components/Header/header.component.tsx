import React from 'react';
import { AppTitle, StyledHeader } from './header.styled';

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <AppTitle>NewsHub</AppTitle>
    </StyledHeader>
  );
};
