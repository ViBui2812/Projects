import React from 'react';
import styled, { css } from 'styled-components';


const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  gap: 0.5rem;
  width: 100%;
`;

const TextInputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  background-color: #FAFAFA;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  border: 1px solid ${(props) =>
    props.variant === 'Error' ? '#FF4141' : '#F8F8F8'};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:focus-within {
    border-color: ${(props) =>
      props.variant === 'ReadOnly' ? '#F8F8F8' : '#DFDFDF'};
  }
`;

const IconWrapperRight = styled.span`
  margin-left: 0px;
  display: inline-flex;
  align-items: center;
`;

const IconWrapperLeft = styled.span`
  margin-right: 10px;
  margin-left: 0px;
  display: inline-flex;
  align-items: center;
`;

const TextInputComponent = styled.input`
  flex: 1;
  background: #FAFAFA;
  background: ${(props) =>
    props.variant === 'ThanhToan' ? '#FFFFFF' : '#FAFAFA'};
  outline: none;
  border: none;
  width: 100%;
  color: #1A1F23;
  &::placeholder {
    visibility: ${(props) => (props.children ? 'hidden' : 'visible')};
`;

const Title = styled.div`
  font-weight: medium;
  font-size: 1rem;
  color: #5e6a6e;
  ${(props) =>
    props.showRedAsterisk &&
    css`
      &:after {
        content: '*';
        color: #ff4141;
        margin-left: 0.25rem;
      }
    `}
`;

const Note = styled.div`
  font-weight: medium;
  font-size: 0.875rem;
  color: ${(props) =>
    props.variant === 'Error' ? '#FF4141' : '#5E6A6E'};
`;

const TextInput = ({ variant, previewText, title, showRedAsterisk, note, name, onChange, leftIcon, rightIcon, readOnly, children, ...rest }) => {
  return (
    <TextInputContainer>
      {title && <Title showRedAsterisk={showRedAsterisk}>{title}</Title>}
      <TextInputWrapper variant={variant}>
        {leftIcon && <IconWrapperLeft>{leftIcon}</IconWrapperLeft>}
        <TextInputComponent
          type="text"
          placeholder={previewText}
          value={children}
          name={name}
          onChange={onChange}
          readOnly={variant === 'ReadOnly'} // Set readOnly prop based on variant
          {...rest} // Spread the remaining props here
        />
        {rightIcon && <IconWrapperRight>{rightIcon}</IconWrapperRight>}
      </TextInputWrapper>
      {note && <Note variant={variant}>{note}</Note>}
    </TextInputContainer>
  );
};

export default TextInput;