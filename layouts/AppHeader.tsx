import {
  ShoppingCartOutlined,
  SearchOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import MainLogo from '@components/MainLogo';
import styled from '@emotion/styled';
// import Scrollbars from 'react-custom-scrollbars';
import { useCallback, useState } from 'react';
// import 'antd/dist/antd.css';
import HeaderBottomMeunus from '@components/HeaderBottomMeunus';
import GenerateDivDummy from '@components/GenerateDivDummy';
import { useWindowWidth } from '@react-hook/window-size';
import { SwipeableDrawer } from '@mui/material';
// import Link from 'next/link';

const CursorPointerDiv = styled.div`
  cursor: pointer;
  z-index: 1000;
`;
const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 4;
  background-color: #fff;
  top: 0;
`;
const HeadWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  justify-content: space-between;
  padding: 10px;
  margin: 0 auto;
  max-width: 500px;
`;
const HeaderLeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const HeaderCenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderRightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 20px;
`;

const menusDummy = [
  { title: '스토어홈', urlKey: '/store' },
  { title: '베스트', urlKey: '/commerces/ranks' },
  { title: '오늘의딜', urlKey: '/commerces/today_deals' },
  { title: '파이널세일', urlKey: '/exhibitions/2163', isNew: true },
  { title: '위클리특가', urlKey: '/productions/premium', isNew: true },
  { title: '지정일배송', urlKey: '/' },
  { title: '리퍼마켓', urlKey: '/' },
  { title: '프리미엄', urlKey: '/productions/premium', isNew: true },
  { title: '기획전', urlKey: '/exhibitions?showroom=false' },
];
const DrawerWrapper = styled.div<{ show?: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  opacity: 0;
  ${({ show }) =>
    show ? 'opacity: 1;z-index: 3;' : 'opacity: 0;z-index: -1;'};
`;
const Drawer = styled.div<{ windowWidth?: number }>`
  width: 80vw;
  height: 100%;
  background-color: red;
  max-width: 300px;
`;
// ${({ windowWidth }) => windowWidth && windowWidth > 767 && 'width:500px'};
const AppHeader = () => {
  const windowWidth = useWindowWidth({ wait: 50 });
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const onClose = useCallback(() => {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('position');
    setDrawerVisible(false);
  }, []);
  const onClickMenu = useCallback(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'static';
    setDrawerVisible(true);
  }, []);
  return (
    <div>
      {/* <Scrollbars height="100vh" universal autoHide>
        <GenerateDivDummy count={500} />
      </Scrollbars> */}
      {/* <DrawerWrapper show={drawerVisible} onClick={onClose}>
        <Drawer windowWidth={windowWidth}>
          <div>
            <GenerateDivDummy count={100} />
          </div>
        </Drawer>
      </DrawerWrapper> */}
      {/* <SwipeableDrawer
        anchor="left"
        open={drawerVisible}
        onClose={onClose}
        onOpen={onClickMenu}
        style={{ width: '100%', height: '100%', position: 'fixed' }}
      >
        <GenerateDivDummy count={30} />
      </SwipeableDrawer> */}
      <HeaderWrapper>
        <HeadWrapper>
          <HeaderLeftWrapper>
            <CursorPointerDiv>
              <MenuOutlined onClick={onClickMenu} />
            </CursorPointerDiv>
          </HeaderLeftWrapper>
          <HeaderCenterWrapper>
            <MainLogo />
          </HeaderCenterWrapper>
          <HeaderRightWrapper>
            <CursorPointerDiv>
              <SearchOutlined />
            </CursorPointerDiv>
            <CursorPointerDiv>
              <ShoppingCartOutlined />
            </CursorPointerDiv>
          </HeaderRightWrapper>
        </HeadWrapper>
        <HeaderBottomMeunus menus={menusDummy} />
      </HeaderWrapper>
    </div>
  );
};

export default AppHeader;
