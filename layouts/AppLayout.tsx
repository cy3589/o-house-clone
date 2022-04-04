import { FC, useCallback, useEffect, useState } from 'react';
import AppFooter from '@layouts/AppFooter';
import AppHeader from '@layouts/AppHeader';
import styled from '@emotion/styled';
// import { useWindowScroll } from '@react-hook/window-scroll';

const ChildrenWrapper = styled.div`
  /* padding-top: 103.76px; */
  padding-top: 108px;
  /* display: flex; */
  /* flex-direction: row; */
  /* justify-content: center; */
`;
const AppLayout: FC = ({ children }) => {
  const [lastScroll, setLastScroll] = useState<Number>(0);
  const [isHide, setIsHide] = useState<boolean>(false);
  const scrollFunc = useCallback(() => {
    setLastScroll(window.scrollY);
    setIsHide(lastScroll < window.scrollY && window.scrollY > 108);
  }, [lastScroll]);
  useEffect(() => {
    window.addEventListener('scroll', scrollFunc);
    return () => window.removeEventListener('scroll', scrollFunc);
  }, [scrollFunc]);
  return (
    <>
      <AppHeader isHide={isHide} />
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
