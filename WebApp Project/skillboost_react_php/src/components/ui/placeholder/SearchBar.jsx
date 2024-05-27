import React from 'react';
import styled from 'styled-components';
import SearchMagnifyingGlass from '../../icons/Interface/SearchMagnifyingGlass';

const SearchBarWrapper = styled.div`
  position: relative;
  width: 20.375rem;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: #FAFAFA;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  border: 1px solid #F8F8F8; /* Add quotation marks around the color */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:focus-within {
    border-color: #DFDFDF;
  }
`;

const IconWrapperLeft = styled.span`
  margin-right: 10px;
  margin-left: 0px;
  display: inline-flex;
  align-items: center;
`;

const SearchBarComponent = styled.input`
  flex: 1;
  background: #FAFAFA;
  outline: none;
  border: none;
`;

const Searchbar = ({ previewText, ...rest }) => {
  return (
    <SearchBarWrapper>
      <IconWrapperLeft><SearchMagnifyingGlass width="1.25rem" height="1.25rem" stroke='#5E6A6E'/></IconWrapperLeft>
      <SearchBarComponent
        type="text"
        placeholder={previewText}
        {...rest}
      />
    </SearchBarWrapper>
  );
};

export default Searchbar;
