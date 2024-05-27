import React from 'react';
import styled from 'styled-components';

import EditPencil01 from '../../icons/Edit/EditPencil01'; 
import UserClose from '../../icons/User/UserClose';
import TrashFull from '../../icons/Interface/TrashFull';

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
  border-radius: 8px;
  height: 2.5rem;
  padding: 15px;
  color: ${(props) => 
    props.variant === "Edit" ? "#00ADE7" : 
    props.variant === "Unfollow" ? "#F0BD0A" : 
    props.variant === "Delete" ? "#FF4141" : 
    "#00ADE7"
  };
  border: 1px solid ${(props) => 
    props.variant === "Edit" ? "#C5EAFF" : 
    props.variant === "Unfollow" ? "#FFF7CF" : 
    props.variant === "Delete" ? "#FFCFCF" : 
    "#C5EAFF"
  };
  background-color: ${(props) => 
    props.variant === "Edit" ? "#DDF3FF" : 
    props.variant === "Unfollow" ? "#FFFEE6" :
    props.variant === "Delete" ? "#FFDDDD" : 
    "#DDF3FF"
  };
  &:hover {
    background-color: ${(props) => 
      props.variant === "Edit" ? "#E7F6FF" : 
      props.variant === "Unfollow" ? "#FFFEF2" : 
      props.variant === "Delete" ? "#FFE9E9" : 
      "#E7F6FF"
    };
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;

const ActionPersonDetail = ({type, className, id, onClick, variant, iconComponent}) => {
  switch (variant) {
    case "Edit":
      iconComponent = <EditPencil01 width="1.5rem" height="1.25rem" />;
      break;
    case "Unfollow":
      iconComponent = <UserClose width="1.5rem" height="1.25rem"/>;
      break;
    case "Delete":
      iconComponent = <TrashFull width="1.5rem" height="1.25rem"/>;
      break;
    default:
      iconComponent = <EditPencil01 width="1.5rem" height="1.25rem"/>;
  }
  
  return (
    <ButtonComponent
      type={type ? type : "button"}
      className={className ? `btn-component ${className}` : "btn-component"}
      id={id}
      onClick={onClick}
      variant={variant}
    >
      <IconWrapper>{iconComponent}</IconWrapper>
    </ButtonComponent>
  );
};

export default ActionPersonDetail;
