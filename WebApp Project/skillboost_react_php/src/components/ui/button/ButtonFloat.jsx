import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  font-weight: 500;
  border-radius: 4rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #FFFFFF;
  border: 1px solid transparent;
  color: #5200FF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.3s ease;
  &:hover {
    border: 1px solid #5200FF;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const IconWrapper = styled.span`
  margin-right: 8px;
  display: inline-flex;
  align-items: center;
`;

const ButtonFloat = ({ type, className, id, onClick, leftIcon, children }) => {
  return (
    <ButtonComponent
      type={type ? type : "button"}
      className={className ? `btn-component ${className}` : "btn-component"}
      id={id}
      onClick={onClick}
    >
      {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>} {/* Không truyền vào icon sẽ không xuất hiện */}
      {children}
    </ButtonComponent>
  );
};

export default ButtonFloat;