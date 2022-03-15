import Link from 'next/link';
import { useRef, VFC } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import NewIcon from '@components/NewIcon';

const HeaderBottomMeunus: VFC<{
  menus: Array<{ title: string; urlKey: string; isNew?: boolean }>;
}> = ({ menus }) => {
  const horizontalRef = useRef(null);
  return (
    <Scrollbars
      universal
      style={{
        position: 'absolute',
        backgroundColor: 'white',
        height: '100%',
      }}
      autoHide
    >
      <nav
        style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          gap: 10,
          columnGap: 20,
          fontSize: 13,
          fontWeight: 700,
          margin: '10px',
          padding: '8px',
          width: '1080px',
          justifyContent: 'space-around',
          alignContent: 'space-around',
          overflowX: 'auto',
          overflowY: 'hidden',
        }}
        ref={horizontalRef}
      >
        {menus?.map((menu) => (
          <Link href={menu.urlKey} key={menu.title} passHref>
            <div
              style={{
                display: 'flex',
                cursor: 'pointer',
              }}
              key={menu.title}
            >
              <div>{menu.title}</div>
              {menu.isNew && <NewIcon />}
            </div>
          </Link>
        ))}
      </nav>
    </Scrollbars>
  );
};

export default HeaderBottomMeunus;
