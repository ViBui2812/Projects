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
    border-radius: 0.5rem;
    padding: 16px;
    cursor: ${(props) => props.state === "disabled" ? "not-allowed" : "pointer"};
    width: ${(props) => 
      props.stretch === "auto" ? "auto" : 
      props.stretch === "full" ? "100%" : 
      "auto"};
    height: ${(props) => 
      props.size === "Big" ? "48px" : 
      props.size === "Medium" ? "40px" : 
      props.size === "Small" ? "32px" : 
      "40px"};
    font-size: ${(props) => 
      props.size === "Big" ? "0.875rem" : 
      props.size === "Medium" ? "0.875rem" : 
      props.size === "Small" ? "0.75rem" : 
      "0.875rem"};
    background-color: ${(props) => 
      props.variant === "Primary" ? "#5200FF" : 
      props.variant === "Secondary" ? "#F7F3FF" : 
      props.variant === "Outlined" ? "#FFFFFF" : 
      props.variant === "Plain" ? "transparent" : 
      props.variant === "Neutral" ? "transparent" : 
      props.variant === "Loading" ? "#5200FF" : 
      props.variant === "Destructive" ? "#FF4141" :
      props.variant === "Destructive-plain" ? "transparent" :
      "#5200FF"
    };
    border: 1px solid ${(props) => 
      props.variant === "Primary" ? "transparent" : 
      props.variant === "Secondary" ? "transparent" : 
      props.variant === "Outlined" ? "#5200FF" : 
      props.variant === "Plain" ? "transparent" : 
      props.variant === "Neutral" ? "transparent" : 
      props.variant === "Loading" ? "#5200FF" : 
      props.variant === "Destructive" ? "transparent" :
      props.variant === "Destructive-plain" ? "transparent" :
      "#5200FF"
    };
    color: ${(props) => 
      props.variant === "Primary" ? "#FFFFFF" : 
      props.variant === "Secondary" ? "#5200FF" : 
      props.variant === "Outlined" ? "#5200FF" : 
      props.variant === "Plain" ? "#5200FF" : 
      props.variant === "Neutral" ? "#5E6A6E" : 
      props.variant === "Loading" ? "#FFFFFF" : 
      props.variant === "Destructive" ? "#FFFFFF" :
      props.variant === "Destructive-plain" ? "#FF4141" :
      "#FFFFFF"
    };
    &:hover {
      background-color: ${(props) => 
        props.state !== "disabled" && (
        props.variant === "Primary" ? "#7939FF" : 
        props.variant === "Secondary" ? "#FFFFFF" : 
        props.variant === "Outlined" ? "#FAFAFA" : 
        props.variant === "Plain" ? "#FAFAFA " : 
        props.variant === "Neutral" ? "#F6F6F6" : 
        props.variant === "Loading" ? "#7939FF" : 
        props.variant === "Destructive" ? "#E53935" :
        props.variant === "Destructive-plain" ? "#FFEFEF" :
        "#3700B3"
        )
      };
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  const IconWrapper = styled.span`
    margin-right: 8px; /* Adjust spacing between icon and text */
    margin-left: 0px;
    display: inline-flex;
    align-items: center;
  `;

  const Button = ({type, variant, className, id, onClick, size, stretch, state, leftIcon, children}) => {
    return (
      <ButtonComponent
        type={type ? type : "button"}
        variant={variant}
        className={className ? `btn-component ${className}` : "btn-component"}
        id={id}
        onClick={onClick}
        size={size}
        stretch={stretch}
        state={state}
      >
        {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>} {/* Không truyền vào icon sẽ không xuất hiện */}
        {children}
      </ButtonComponent>
    );
  };

  export default Button;
