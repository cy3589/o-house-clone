/* eslint-disable @next/next/no-img-element */
import { VFC } from 'react';
import Scrollbars from 'react-custom-scrollbars';

interface CategoryItemsProps {
  items: { src: string; title: string }[];
}

const CategoryItemsLargeMode: VFC<CategoryItemsProps> = ({ items }) => {
  return (
    <Scrollbars
      style={{
        position: 'static',
        backgroundColor: 'white',
        height: '100%',
      }}
    >
      <div style={{ display: 'flex', overflowX: 'auto', overflowY: 'hidden' }}>
        {items.map(({ src, title }) => (
          <div key={title}>
            <img src={src} alt={title} />
            <span>{title}</span>
          </div>
        ))}
      </div>
    </Scrollbars>
  );
};
export default CategoryItemsLargeMode;
