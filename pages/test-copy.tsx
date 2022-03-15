/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { Masonry, useInfiniteLoader } from 'masonic';
import styled from '@emotion/styled';
import AppLayout from '@layouts/AppLayout';
import Dummy500Child from '@components/Dummy500Child';
import InfiniteLoadFunction from '@utils/InfiniteLoadFunction';
import { InfiniteData, useInfiniteQuery, useQueryClient } from 'react-query';
import { ItemInterface } from '@interfaces/InfiniteInterface';
// import { styles } from '@utils/theme';

const Masonic = styled.div`
  padding: 8px;
  width: 100%;
  max-width: 960px;
  margin: 0 auto 0 auto;
`;

const Container = styled.main`
  min-height: 100vh;
  width: 100%;
`;

// const minify = styled.div`
//   background-color: #1d2326;
//   color: #f2fafe;
// `;

// const HeaderStyled = styled.div`
//   font-family: Quantico, sans-serif;
//   font-size: 1.5rem;
//   font-weight: 900;
//   letter-spacing: -0.075em;
//   top: 0;
//   position: fixed;
//   z-index: 1000;
//   width: 100%;
//   text-align: center;
//   transition: padding 200ms ease-in-out, background-color 200ms 200ms linear;
// `;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #1d2326;
  justify-content: center;
  align-items: center;
  transition: transform 100ms ease-in-out;
  width: 100%;

  span:last-of-type {
    color: #fff;
  }

  &:hover {
    position: relative;
    background: #f2fafe;
    transform: scale(1.125);
    z-index: 1000;

    span:last-of-type {
      color: #1d2326;
    }
  }
`;

const Img = styled.img`
  width: 100%;
  display: block;
  border-top-left-radius: 10;
  border-top-right-radius: 10;
  display: block;
`;
const FakeCard = ({ data: { name, src } }: any) => (
  // const FakeCard = () => (
  <Card>
    <Img
      // alt="kitty"
      // src="https://cdn.pixabay.com/photo/2016/09/18/12/29/cat-1678009__480.jpg"
      alt={name}
      src={src}
    />
    <span>Bandit</span>
  </Card>
);

// const Header = () => {
//   //   const scrollY = useWindowScroll(5);
//   return (
//     <HeaderStyled>
//       <span role="img" aria-label="bricks">
//         🧱
//       </span>{' '}
//       MASONIC
//     </HeaderStyled>
//   );
// };

// const getFakeItems = () => {
//   const fakeItems = [];
//   for (let i = 0; i < 24; i += 1) fakeItems.push({ id: i });
//   return fakeItems;
// };

// const getFakeItemsPromise = async ({ page }: { page: number | undefined }) => {
//   if (!page) return { result: [], fetchResult: [] };
//   console.log(page);
//   const fetchResult = await InfiniteLoadFunction({ page });
//   // console.log(fetchResult);
//   const result = await Promise.resolve(getFakeItems());
//   return { result, fetchResult };
// };

const Test = () => {
  const queryClient = useQueryClient();
  const [mount, setMount] = useState<boolean>(false);
  // const [items, setItems] = useState(getFakeItems);
  const { data, fetchNextPage, isFetching, isLoading } =
    useInfiniteQuery<ItemInterface>(
      ['test'],
      async ({ pageParam }) => {
        const result = await InfiniteLoadFunction({
          page: pageParam,
        });
        return result;
      },
      {
        getNextPageParam: () => {
          const curPage = queryClient.getQueryData<InfiniteData<ItemInterface>>(
            ['text'],
          )?.pages.length;
          if (curPage) return curPage + 1;
          return 1;
        },
        initialData: { pages: [], pageParams: [] },
      },
    );
  const maybeLoadMore = useInfiniteLoader(
    async (startIndex) => {
      const page = startIndex % 24 === 0 ? startIndex / 24 : undefined;
      // console.log(page);
      if (!isFetching && !isLoading) {
        console.log('fetch!');
        await fetchNextPage({ pageParam: page });
      }
      // const { result: nextItems } = await getFakeItemsPromise({
      //   page: page && page + 1,
      // });
      // setItems((current) => [...current, ...nextItems]);
    },
    {
      isItemLoaded: (index, items_) => {
        // console.log(!!items_[index], index, items_);
        return !!items_[index];
      },
      minimumBatchSize: 24,
      threshold: 3,
    },
  );
  useEffect(() => {
    setMount(true);
  }, []);
  const itemss = data?.pages
    .flat()
    .map(({ id, name, image_url: imageUrl }) => ({ id, name, src: imageUrl }));
  return (
    mount && (
      <AppLayout>
        {itemss && (
          <>
            <Dummy500Child />
            <Container>
              <Masonic>
                <Masonry
                  onRender={maybeLoadMore}
                  items={itemss}
                  columnGutter={8}
                  columnWidth={240}
                  ssrHeight={1920}
                  ssrWidth={1080}
                  overscanBy={1.25}
                  render={FakeCard}
                />
              </Masonic>
            </Container>
          </>
        )}
      </AppLayout>
    )
  );
};
export default Test;
