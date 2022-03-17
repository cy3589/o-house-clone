/* eslint-disable @next/next/no-img-element */
import { CSSProperties, useCallback, useState, VFC } from 'react';
import MoreIcon from '@components/MoreIcon';

interface CategoryItemsProps {
  items: { src: string; title: string }[];
}
const CategoryItems: VFC<CategoryItemsProps> = ({ items }) => {
  const [more, setMore] = useState<boolean>(false);
  const onClickMore = useCallback(() => {
    setMore(true);
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
      {!more ? (
        <>
          {items.slice(0, 7).map(({ src, title }, index) => {
            const style: CSSProperties = {
              borderRight: '1px solid #ededed',
              borderBottom: '1px solid #ededed',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: 0,
              paddingTop: '50%',
              paddingBottom: '50%',
            };
            if ((index + 1) % 4 === 0) style.borderRight = 0;
            return (
              <div key={title} style={style}>
                <div>
                  <img
                    src={src}
                    alt={title}
                    style={{ width: '52px', height: '52px' }}
                  />
                </div>
                <span
                  style={{
                    color: '#757575',
                    fontWeight: 700,
                    fontSize: '11px',
                  }}
                >
                  {title}
                </span>
              </div>
            );
          })}
          <div
            style={{
              // borderRight: '1px solid #ededed',
              borderBottom: '1px solid #ededed',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: 0,
              paddingTop: '50%',
              paddingBottom: '50%',
            }}
            onClick={onClickMore}
            onKeyDown={onClickMore}
            tabIndex={0}
            role="button"
          >
            <MoreIcon />
            <span
              style={{ color: '#757575', fontWeight: 700, fontSize: '11px' }}
            >
              더보기
            </span>
          </div>
        </>
      ) : (
        items.map(({ src, title }, index) => {
          const style: CSSProperties = {
            borderRight: '1px solid #ededed',
            borderBottom: '1px solid #ededed',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 0,
            paddingTop: '50%',
            paddingBottom: '50%',
          };
          if ((index + 1) % 4 === 0) style.borderRight = 0;
          return (
            <div key={title} style={style}>
              <div>
                <img
                  src={src}
                  alt={title}
                  style={{ width: '52px', height: '52px' }}
                />
              </div>
              <span
                style={{
                  color: '#757575',
                  fontWeight: 700,
                  fontSize: '11px',
                }}
              >
                {title}
              </span>
            </div>
          );
        })
      )}
    </div>
  );
};
export default CategoryItems;
