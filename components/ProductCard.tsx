/* eslint-disable @next/next/no-img-element */
import { ItemInterface } from '@interfaces/InfiniteInterface';
import { CSSProperties, VFC } from 'react';
// import Image from 'next/image';

interface ProductCardProps {
  productData: ItemInterface;
  style?: CSSProperties;
}
const ProductCard: VFC<ProductCardProps> = ({ productData, style }) => {
  return (
    <div style={{ ...style }}>
      <img
        src={productData.image_url}
        alt={productData.name}
        width="100%"
        height="100%"
        style={{ objectFit: 'contain' }}
      />
      <div
        style={{
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          width: '100%',
          wordBreak: 'break-all',
        }}
      >
        {productData.name}
      </div>
    </div>
  );
};
export default ProductCard;
