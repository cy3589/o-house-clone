import { FC } from 'react';
import AppFooter from '@layouts/AppFooter';
import AppHeader from '@layouts/AppHeader';
import styled from '@emotion/styled';

const ChildrenWrapper = styled.div`
  padding-top: 103.76px; ;
`;
const AppLayout: FC = ({ children }) => {
  return (
    <>
      <AppHeader />
      <ChildrenWrapper>{children}</ChildrenWrapper>
      <AppFooter />
    </>
  );
};

export default AppLayout;
