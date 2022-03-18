import styled from '@emotion/styled';

const DrawerCommunityIconStyled = styled.svg`
  position: absolute;
  top: 15px;
  left: 10px;
`;
const DrawerCommunityIcon = () => {
  return (
    <DrawerCommunityIconStyled
      width="24"
      height="24"
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M1 1h22v22H1z" />
        <path
          fill="#424242"
          fillRule="nonzero"
          d="M5.5 11.5v7.6h13v-7.6h-13zM4 10h16v10.6H4V10z"
        />
        <path
          fill="#424242"
          fillRule="nonzero"
          d="M17.92 4.1H6.08l-2 6h15.84l-2-6zM5 2.6h14l3 9H2l3-9z"
        />
        <path
          stroke="#424242"
          strokeWidth="1.5"
          d="M13.25 19.85h-2.5v-4.5h2.5v4.5z"
        />
      </g>
    </DrawerCommunityIconStyled>
  );
};
export default DrawerCommunityIcon;
