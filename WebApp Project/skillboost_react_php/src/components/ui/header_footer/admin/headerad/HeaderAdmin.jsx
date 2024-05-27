import styled from 'styled-components';
import Notification from '../notification/Notification';
import avatar from '../../../../../assets/logo/avatar.svg'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: transperant; /* Adjust background color */;
  height: 48px;
  
`;

const PageTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
`;

const UserInfo = styled.div`
  display: flex;
  width: 100% !important;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  color: ##5E6A6E;
`;

const Avatar = styled.span`
`;

// Header component
const HeaderAdmin = ({ children, progressBar }) => {
  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toDateString();
  };

  return (
    <div className='max-sm:pl-20'> 
      <HeaderContainer className='flex flex-row items-center gap-10 justify-between'>
        <PageTitle>{children}</PageTitle>
        <div className='max-sm:hidden'>
          {progressBar}
        </div>
        <div>
          <UserInfo className='w-full'>
            <span className='max-sm:hidden'>{getCurrentDate()}</span> {/* Current Date */}
            <div className='max-sm:pl-6'>
              <Notification />
            </div>
            <Avatar className='max-sm:hidden'>
              <img src={avatar} alt="Avt" />
            </Avatar> {/* Replace with actual user name */}

          </UserInfo>
        </div>
      </HeaderContainer>
    </div>

  );
};


export default HeaderAdmin;