import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LeadInfoTabContainer = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 56px;
  padding: 0 24px;
  text-align: left; 
  font-size: 1rem;
  color: #BEBEBE;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
`;

const TabNavLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;

  &:hover {
    color: #5E6A6E; /* Hover color */
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #BEBEBE; /* Stroke color */
    height: 0.15rem; /* Adjust thickness of the line */
    width: 0; /* Start with no width */
  }

  &:hover::after {
    width: 100%; /* Expand stroke on hover */
  }

  &.active {
    color: #5200FF; /* Active text color */
  }

  &.active::after {
    width: 100%; /* Expand line on active */
    background-color: #5200FF;
  }
`;

const LeadInfoTab = () => {
  // Retrieve MaLead from localStorage
  const leadId = localStorage.getItem('MaLead');

  return (
    <LeadInfoTabContainer>
      <TabNavLink to={`/lead/thongtin/xemchitietlead/${leadId}`}>
        <div>
          Thông tin chung
        </div>
      </TabNavLink>
      <TabNavLink to={`/lead/dsbaogia/${leadId}`}>
        <div>
          Báo giá
        </div>
      </TabNavLink>
      <TabNavLink to={`/lead/dshoatdong/${leadId}`}>
        <div>
          Hoạt động
        </div>
      </TabNavLink>
    </LeadInfoTabContainer>
  );
};

export default LeadInfoTab;