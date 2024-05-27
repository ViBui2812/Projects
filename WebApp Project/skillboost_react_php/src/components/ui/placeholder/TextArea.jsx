import React from 'react';
import styled from 'styled-components';

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.5rem;
  height: 100%;
  width: 100%;
`;

const TextAreaWrapper = styled.div`
  flex: 1;
  position: relative;
  width: 100%; /* Set width to 100% */
  max-width: 100%; /* Ensure it doesn't exceed the screen width */
  min-width: 350px;
  border-radius: 0.5rem;
  background-color: #FAFAFA;
  min-height: 100px;
  height: 100%;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  border: 1px solid ${(props) =>
    props.variant === 'Error' ? '#FF4141' : '#F8F8F8'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  &:focus-within {
    border-color: ${(props) =>
      props.variant === 'ReadOnly' ? '#F8F8F8' : '#DFDFDF'};
  }
`;

const Title = styled.div`
  font-weight: medium;
  font-size: 1rem;
  color: #5e6a6e;
`;

const Note = styled.div`
  font-weight: medium;
  font-size: 0.875rem;
  color: ${(props) =>
    props.variant === 'Error' ? '#FF4141' : '#5E6A6E'};
`;

const TextAreaInput = styled.textarea`
  flex: 1;
  background: transparent;
  outline: none;
  border: none;
  resize: none;
  width: 100%; /* Set width to 100% */
`;

const TextArea = ({ variant, previewText, title, note, leftIcon, rightIcon, readOnly, ...rest }) => {
  return (
    <TextAreaContainer>
      {title && <Title>{title}</Title>}
      <TextAreaWrapper variant={variant}>
        <TextAreaInput
          placeholder={previewText}
          readOnly={variant === 'readOnly'}
          {...rest}
        />
      </TextAreaWrapper>
      {note && <Note variant={variant}>{note}</Note>}
    </TextAreaContainer>
  );
};

export default TextArea;
