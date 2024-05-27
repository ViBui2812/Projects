import React from 'react';
import styled from 'styled-components';

const getStatusText = (variant) => {
    switch(variant) {
        case "DangVanHanh":
            return "Đang vận hành";
        case "DangChieuSinh":
            return "Đang chiêu sinh";
        case "VoHieuHoa":
            return "Vô hiệu hóa";
        default:
            return "Đang vận hành";
    }
};

<div className=" bg-background-cyan text-steelblue ">
<div className="relative">Đang vận hành</div>
</div>

const CourseTableStatusComponent = styled.label`
    position: relative;
    border-radius: 0.25rem;
    width: 132px;
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
        props.variant === "DangVanHanh" ? "#EBFBFF" : 
        props.variant === "DangChieuSinh" ? "#F7F3FF" : 
        props.variant === "VoHieuHoa" ? "#FAFAFA" :
        "#EBFBFF"
    };
    color: ${(props) => 
        props.variant === "DangVanHanh" ? "#278EAE" : 
        props.variant === "DangChieuSinh" ? "#5200FF" : 
        props.variant === "VoHieuHoa" ? "#BEBEBE" :
        "#278EAE"
    };
`;

const CourseTableStatus = ({variant}) => {
    const statusText = getStatusText(variant);

    return (
        <CourseTableStatusComponent variant={variant}>{statusText}</CourseTableStatusComponent>
    );
};

export default CourseTableStatus;
