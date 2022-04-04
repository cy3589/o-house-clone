import {
  ShoppingCartOutlined,
  SearchOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import MainLogo from '@components/MainLogo';
import styled from '@emotion/styled';
import Scrollbars from 'react-custom-scrollbars';
import { useCallback, useState, VFC } from 'react';
// import 'antd/dist/antd.css';
import HeaderBottomMeunus from '@components/HeaderBottomMeunus';
// import GenerateDivDummy from '@components/GenerateDivDummy';
// import { useWindowWidth } from '@react-hook/window-size';
import { SwipeableDrawer } from '@mui/material';
import Link from 'next/link';
import OhouseDrawerTitle from '@components/OhouseDrawerTitle';
import OhouseDrawerAppIcon from '@components/OhouseDrawerAppIcon';
import DrawerArrowIcon from '@components/DrawerArrowIcon';
import DrawerCommunityIcon from '@components/DrawerCommunityIcon';

const CursorPointerDiv = styled.div`
  cursor: pointer;
  z-index: 4;
`;
const HeaderWrapper = styled.div<{ isHide: boolean }>`
  position: fixed;
  width: 100%;
  z-index: 4;
  background-color: #fff;
  top: 0;
  transition: 0.4s;
  ${({ isHide }) => isHide && `margin-top:-108px`};
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
// const DrawerWrapper = styled.div<{ show?: boolean }>`
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   z-index: 3;
//   opacity: 0;
//   ${({ show }) =>
//     show ? 'opacity: 1;z-index: 3;' : 'opacity: 0;z-index: -1;'};
// `;
// const Drawer = styled.div<{ windowWidth?: number }>`
//   width: 80vw;
//   height: 100%;
//   background-color: red;
//   max-width: 300px;
// `;
// ${({ windowWidth }) => windowWidth && windowWidth > 767 && 'width:500px'};
const ScrollbarsStyled = styled(Scrollbars)`
  position: fixed !important;
  width: 70vw !important;
  min-width: 256px !important;
  max-width: 360px !important;
`;
const DrawerButtonStyled = styled.button`
  position: relative;
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 15px 10px 15px 40px;
  font-family: inherit;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #424242;
  background: none;
  border: none;
  text-align: left;
`;
const DrawerLiStyled = styled.li`
  list-style: none;
`;
const SwipeableDrawerStyled = styled(SwipeableDrawer)`
  z-index: 4;
`;
interface AppHeaderProps {
  isHide: boolean;
}
const AppHeader: VFC<AppHeaderProps> = ({ isHide }) => {
  // const windowWidth = useWindowWidth({ wait: 50 });
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const onClose = useCallback(() => {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('position');
    setDrawerVisible(false);
  }, []);
  const onClickMenu = useCallback(() => {
    // document.body.style.overflow = 'hidden';
    // document.body.style.position = 'static';
    setDrawerVisible(true);
  }, []);
  return (
    <div>
      <SwipeableDrawerStyled
        anchor="left"
        open={drawerVisible}
        onClose={onClose}
        onOpen={onClickMenu}
        disableSwipeToOpen
        translate="yes"
      >
        <div
          style={{
            width: '70vw',
            minWidth: '256px',
            maxWidth: '360px',
            overflow: 'hidden',
          }}
        >
          <ScrollbarsStyled autoHide universal>
            <div
              style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                wordBreak: 'break-word',
                padding: '30px 20px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flex: '0 0 auto',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Link href="/" passHref>
                  <CursorPointerDiv>
                    <OhouseDrawerTitle />
                  </CursorPointerDiv>
                </Link>
                <Link href="/" passHref>
                  <CursorPointerDiv
                    style={{
                      fontSize: '12px',
                      lineHeight: '20px',
                      whiteSpace: 'nowrap',
                      fontWeight: '700',
                      color: '#757575',
                      display: 'flex',
                    }}
                  >
                    <OhouseDrawerAppIcon />
                    <span>앱다운로드</span>
                  </CursorPointerDiv>
                </Link>
              </div>
              <div
                style={{
                  margin: '30px 0',
                  padding: '0 5px',
                  display: 'flex',
                  flex: '0 0 auto',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    flex: '1 0 0px',
                    margin: '0 5px',
                    fontWeight: 700,
                    border: '1px solid #35c5f0',
                    borderRadius: '4px',
                    padding: '9px 10px',
                    cursor: 'pointer',

                    color: '#35c5f0',
                    backgroundColor: '#fff',
                  }}
                >
                  로그인
                </div>
                <div
                  style={{
                    flex: '1 0 0px',
                    margin: '0 5px',
                    fontWeight: 700,
                    border: '1px solid #35c5f0',
                    borderRadius: '4px',
                    padding: '9px 10px',
                    cursor: 'pointer',

                    color: '#fff',
                    backgroundColor: '#35c5f0',
                  }}
                >
                  회원가입
                </div>
              </div>
              <ul>
                <DrawerLiStyled>
                  <div>
                    <DrawerButtonStyled>
                      <DrawerCommunityIcon /> 커뮤니티
                      <DrawerArrowIcon active={false} />
                    </DrawerButtonStyled>
                  </div>
                </DrawerLiStyled>
                <DrawerLiStyled>
                  <div>
                    <DrawerButtonStyled>
                      <DrawerCommunityIcon /> 스토어
                      <DrawerArrowIcon active={false} />
                    </DrawerButtonStyled>
                  </div>
                </DrawerLiStyled>
                <DrawerLiStyled>
                  <div>
                    <DrawerButtonStyled>
                      <DrawerCommunityIcon /> 인테리어시공
                      <DrawerArrowIcon active={false} />
                    </DrawerButtonStyled>
                  </div>
                </DrawerLiStyled>
              </ul>
            </div>
          </ScrollbarsStyled>
        </div>
      </SwipeableDrawerStyled>
      <HeaderWrapper isHide={isHide}>
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
