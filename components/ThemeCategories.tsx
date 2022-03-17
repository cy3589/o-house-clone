import styled from '@emotion/styled';
import { VFC } from 'react';

interface ThemeCategoriesProps {
  themeCategories: {
    image_url: string;
    name: string;
    path_name: string;
    path_type: string;
    search_keyword: string;
  }[];
}

const Wrapper = styled.div`
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  height: 100%;
  font-weight: 700;
  color: #fff;
  text-align: center;
  overflow: hidden;
  position: relative;
  /* line-height: 97px; */
  line-height: 87px;

  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
  & > h1 {
    color: rgb(121, 68, 219);
    text-align: center;
    position: relative;
  }
`;
const ThemeCategories: VFC<ThemeCategoriesProps> = ({ themeCategories }) => {
  console.log(themeCategories);
  return (
    <section style={{ margin: '50px 15px 0 15px' }}>
      <h1 style={{ margin: '0 0 14px' }}>인기 키워드</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {themeCategories.map(
          ({
            image_url: imageUrl,
            name,
            path_name: pathName,
            path_type: pathType,
            search_keyword: searchKeyword,
          }) => (
            <div
              key={pathName}
              style={{
                padding: '5px',
                height: '97px',
                fontSize: '14px',
                textAlign: 'center',
                borderRadius: '4px',
                flex: '0 0 50%',
                maxWidth: '50%',
                position: 'relative',
              }}
            >
              <Wrapper
                style={{
                  backgroundImage: `url(${imageUrl})`,
                  borderRadius: '4px',
                }}
              >
                <span style={{ position: 'relative' }}>{name}</span>
              </Wrapper>
            </div>
          ),
        )}
      </div>
    </section>
  );
};
export default ThemeCategories;
