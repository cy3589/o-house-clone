import {
  ShoppingCartOutlined,
  SearchOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import MainLogo from '@components/MainLogo';
import styled from '@emotion/styled';
import Scrollbars from 'react-custom-scrollbars';
import { Drawer } from 'antd';
import { useCallback, useState } from 'react';
// import 'antd/dist/antd.css';
import Dummy500Child from '@components/Dummy500Child';
import HeaderBottomMeunus from '@components/HeaderBottomMeunus';
// import Link from 'next/link';

const CursorPointerDiv = styled.div`
  cursor: pointer;
  z-index: 1000;
`;
const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 2;
  background-color: #fff;
  top: 0;
`;
const HeadWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  justify-content: space-between;
  padding: 10px;
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

const AppHeader = () => {
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const onClose = useCallback(() => {
    setDrawerVisible(false);
  }, []);
  const onClickMenu = useCallback(() => {
    setDrawerVisible(true);
  }, []);
  return (
    <div>
      <Drawer
        title="Drawer입니다"
        width="80vw"
        onClose={onClose}
        visible={drawerVisible}
        placement="left"
      >
        <Scrollbars height="100vh" universal autoHide>
          <Dummy500Child />
        </Scrollbars>
      </Drawer>
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
