import React from 'react';
import { StyledSearchBtn, StyledQueryBtn } from './buttons.styled';
import { BsSearch } from 'react-icons/bs';
import { RiCloseLine } from 'react-icons/ri';

interface CustomButtonProps {
  onClick?: () => void;
  children?: any;
}

export const SearchButton: React.FC<CustomButtonProps> = (props) => (
  <StyledSearchBtn onClick={props?.onClick}>
    <BsSearch />
  </StyledSearchBtn>
);

export const SearchClearButton: React.FC<CustomButtonProps> = (props) => (
  <StyledSearchBtn onClick={props?.onClick}>
    <RiCloseLine />
  </StyledSearchBtn>
);

export const QueryButton: React.FC<CustomButtonProps> = (props) => (
  <StyledQueryBtn onClick={props?.onClick}>{props.children}</StyledQueryBtn>
);
