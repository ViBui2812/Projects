import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import Calendar from '../../icons/Calendar/Calendar'

// Styled components for the date picker
const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  gap: 0.5rem;
  width: 100%;
`;

const DatePickerWrapper = styled.div`
  position: flex;
  width: 100%;
  max-width: 100%;
  min-width: 350px;
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
  align-items: left;
  &:focus-within {
    border-color: ${(props) =>
      props.variant === 'ReadOnly' ? '#F8F8F8' : '#DFDFDF'};
  }
`;
//fix span
const DatePickerComponent = styled(DatePicker)`
  
  background: #FAFAFA;
  outline: none;
  border: none;
  text-align: left;
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

const RightIcon = styled.span`
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

const CustomDatePicker = ({ variant, title, note, previewText, selectedDate, onChange, rightIcon: RightIconComponent, ...rest }) => {
  // Use state to manage the selected date
  const [startDate, setStartDate] = useState(selectedDate);

  return (
    <DatePickerContainer>
      {title && <Title>{title}</Title>}
      <DatePickerWrapper>
        <DatePickerComponent
          type="date"
          className="w-72"
          placeholderText={previewText}
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            onChange(date);
          }}
          dateFormat="dd-MM-yyyy"
          variant={variant}
          {...rest}
        />
        <RightIcon> <Calendar /> </RightIcon>
      </DatePickerWrapper>
      {note && <Note >{note}</Note>}
    </DatePickerContainer>
  );
};

export default CustomDatePicker;
