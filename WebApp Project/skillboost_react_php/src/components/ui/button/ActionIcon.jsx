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
  padding: ${(props) => 
    props.size === "Big" ? "0.75rem" : 
    props.size === "Medium" ? "0.25rem" : 
    props.size === "Small" ? "0.125rem" : 
    "0.75rem"};
  background-color: ${(props) => 
    props.state === "Default" ? "#FFFFFF" : 
    props.state === "Selected" ? "#F7F3FF" : 
    "#FFFFFF"
    };
  color: ${(props) => 
    props.state === "Default" ? "#1A1F23" : 
    props.state === "Selected" ? "#5200FF" : 
    "#1A1F23"
    };
  &:hover {
    background-color: #F6F6F6;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;

const ActionItems = ({type, className, id, onClick, size, state, icon}) => {
  return (
    <ButtonComponent
      type={type ? type : "button"}
      className={className ? `btn-component ${className}` : "btn-component"}
      id={id}
      onClick={onClick}
      size={size}
      state={state}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>} {/* Không truyền vào icon sẽ không xuất hiện */}
    </ButtonComponent>
  );
};

export default ActionItems;
