import Link from 'next/link';
import { useRef, VFC } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import NewIcon from '@components/NewIcon';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

const ScrollbarsStyled = styled(Scrollbars)`
  margin: 0 auto;
  max-width: 500px;
`;
const HeaderBottomMeunus: VFC<{
  menus: Array<{ title: string; urlKey: string; isNew?: boolean }>;
}> = ({ menus }) => {
  const router = useRouter();
  const routeName = router.asPath
    .split('/')
    [router.asPath.split('/').length - 1].split('?')[0];
  const horizontalRef = useRef(null);
  return (
    <ScrollbarsStyled universal autoHide autoHeight>
      <nav
        style={{
          display: 'flex',
          flexDirection: 'row',
          whiteSpace: 'nowrap',
          gap: 10,
          columnGap: 20,
          fontSize: 13,
          fontWeight: 700,
          margin: '10px',
          padding: '8px 0 8px 0',
        }}
        ref={horizontalRef}
      >
        {menus?.map(({ urlKey, title, isNew }) => {
          const urlKeyRoute = urlKey
            .split('/')
            [urlKey.split('/').length - 1].split('?')[0];
          const isSame = urlKeyRoute === routeName;
          return (
            <Link href={urlKey} key={title} passHref>
              <div
                style={{
                  display: 'flex',
                  cursor: 'pointer',
                }}
                key={title}
              >
                <div style={{ color: isSame ? '#35c5f0' : '' }}>{title}</div>
                {isNew && <NewIcon />}
              </div>
            </Link>
          );
        })}
      </nav>
    </ScrollbarsStyled>
  );
};

export default HeaderBottomMeunus;
