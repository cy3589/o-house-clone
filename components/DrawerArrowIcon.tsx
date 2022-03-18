import styled from '@emotion/styled';
import { VFC } from 'react';

interface DrawerArrowIconProps {
  active?: boolean;
}
const DrawerArrowIconStyled = styled.svg<{ active: boolean }>`
  position: absolute;
  top: 50%;
  right: 20px;
  margin-top: -3px;
  color: #424242;
  transition: transform 0.2s;
  ${({ active }) => (active ? `transform: rotate(180deg);` : null)};
`;
const DrawerArrowIcon: VFC<DrawerArrowIconProps> = ({ active = false }) => {
  return (
    <DrawerArrowIconStyled
      active={active}
      width="12"
      height="7"
      fill="currentColor"
      viewBox="0 0 12 7"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M11 0L5 6l1 1 6-6z" />
      <path d="M6 7L0 1l1-1 6 6z" />
    </DrawerArrowIconStyled>
  );
};

export default DrawerArrowIcon;
