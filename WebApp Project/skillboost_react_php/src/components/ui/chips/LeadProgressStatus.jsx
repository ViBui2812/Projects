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

const LeadProgressStatusComponent = styled.div`
    position: relative;
`;


const LeadProgressStatusComponentContainer = styled.div`
    position: relative;
    height: 52px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 16px;
    color: #4B0CCF;
`;


const LeadProgressStatusContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    text-align: left;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #5E6A6E;
    height: 52px;
`;


const LeadProgressStatus = ({ variant }) => {
    const statusText = getStatusText(variant);

    return (
        <LeadProgressStatusContainer variant={variant}>
            <div className='relative'>Trạng thái:</div>
            <LeadProgressStatusComponentContainer variant={variant}>
                <LeadProgressStatusComponent variant={variant}>{statusText}</LeadProgressStatusComponent>
            </LeadProgressStatusComponentContainer>
        </LeadProgressStatusContainer>  
    );
};


export default LeadProgressStatus;
