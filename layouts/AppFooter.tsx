import styled from '@emotion/styled';

const FooterWrapper = styled.div`
  margin: 0 auto;
  max-width: 500px;
  background-color: wheat;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 16px;
`;
const AppFooter = () => {
  return <FooterWrapper>푸터</FooterWrapper>;
};

export default AppFooter;
