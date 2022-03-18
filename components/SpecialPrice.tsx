import { CSSProperties, VFC } from 'react';

interface SpecialPriceProps {
  style?: CSSProperties;
}
const SpecialPrice: VFC<SpecialPriceProps> = ({ style }) => {
  return (
    <span style={{ marginRight: '4px', ...style }}>
      <svg
        aria-label="특가"
        width="30"
        height="20"
        viewBox="0 0 30 20"
        preserveAspectRatio="xMidYMid meet"
      >
        <rect width="30" height="20" fill="#F77" rx="4" />
        <path
          fill="#fff"
          d="M12.83 7.93v-.97H7.93v-.555h5.228v-.991H6.655v4.063h6.59v-.992H7.928V7.93h4.901zm-6.295 3.747v1.002h5.326v2.037h1.274v-3.04h-6.6zm7.733-.588v-1.024H5.5v1.024h8.768zM23.91 9.782V8.725h-1.405V5H21.24v9.705h1.264V9.782h1.405zm-3.954-3.79h-4.53v1.056h3.147c-.174 1.938-1.623 3.975-3.736 4.945l.773.958c2.974-1.612 4.259-4.03 4.346-6.96z"
        />
      </svg>
    </span>
  );
};
export default SpecialPrice;
