import { FC } from 'react';
import AppFooter from '@layouts/AppFooter';
import AppHeader from '@layouts/AppHeader';
import styled from '@emotion/styled';

const ChildrenWrapper = styled.div`
  /* padding-top: 103.76px; */
  padding-top: 108px;
  /* display: flex; */
  /* flex-direction: row; */
  /* justify-content: center; */
`;
const AppLayout: FC = ({ children }) => {
  return (
    <>
      <AppHeader />
      <div
        style={{
          width: '100%',
          maxWidth: '500px',
          margin: '0 auto',
          // maxWidth: '1024px',
          // display: 'flex',
          // flexDirection: 'row',
          // justifyContent: 'center',
        }}
      >
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </div>
      <AppFooter />
    </>
  );
};

export default AppLayout;
