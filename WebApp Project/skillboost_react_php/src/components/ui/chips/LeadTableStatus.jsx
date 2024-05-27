import React from 'react';
import styled from 'styled-components';

const getStatusText = (variant) => {
    switch(variant) {
        case "DangTuVan":
            return "Đang tư vấn";
        case "NgungTheoDoi":
            return "Ngừng theo dõi";
        case "DaThanhToan":
            return "Đã thanh toán";
        default:
            return "Đang tư vấn";
    }
};

const LeadTableStatusComponent = styled.label`
    position: relative;
    border-radius: 0.25rem;
    width: 129px;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 12px;
    padding-right: 12px;
    box-sizing: border-box;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 500;
    background-color: ${(props) => 
        props.variant === "DangTuVan" ? "#F7F3FF" : 
        props.variant === "NgungTheoDoi" ? "#FFF3F3" : 
        props.variant === "DaThanhToan" ? "#D0FFE9" :
        "#F7F3FF"
    };
    color: ${(props) => 
        props.variant === "DangTuVan" ? "#5200FF" : 
        props.variant === "NgungTheoDoi" ? "#FF4141" : 
        props.variant === "DaThanhToan" ? "#27AE60" :
        "#5200FF"
    };
`;

const LeadTableStatus = ({variant}) => {
    const statusText = getStatusText(variant);

    return (
        <LeadTableStatusComponent variant={variant}>{statusText}</LeadTableStatusComponent>
    );
};

export default LeadTableStatus;
