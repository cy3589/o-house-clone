/* eslint-disable react/no-unstable-nested-components */
import { memo, useEffect, useState, VFC } from 'react';
import { Masonry, RenderComponentProps, useInfiniteLoader } from 'masonic';
import styled from '@emotion/styled';
import InfiniteLoadFunction from '@utils/InfiniteLoadFunction';
import { InfiniteData, useInfiniteQuery, useQueryClient } from 'react-query';
import { ItemInterface } from '@interfaces/InfiniteInterface';

const Masonic = styled.div`
  /* padding: 8px; */
  /* width: 100%; */
  max-width: 500px;
  /* margin: 0 auto 0 auto; */
`;

const Container = styled.main`
  /* min-height: 100vh; */
  /* width: 100%; */
  /* position: relative; */
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #1d2326;
  justify-content: center;
  align-items: center;
  transition: transform 100ms ease-in-out;
  /* width: 100%; */
  background-color: whitesmoke;
`;

const Img = styled.img`
  width: 100%;
  display: block;
  border-radius: 10px;
  overflow: hidden;
  display: block;
`;
const RenderCard: VFC<RenderComponentProps<{ name: string; src: string }>> =
  memo(({ data: { name, src } }) => {
    return (
      <div style={{ display: 'flex' }}>
        <Card>
          <Img alt={name} src={src} />
          <span
            style={
              {
                // width: '100%',
                // overflow: 'hidden',
                // whiteSpace: 'nowrap',
                // textOverflow: 'ellipsis',
                //   WebkitLineClamp: 2,
                //   height: '48px',
              }
            }
          >
            {name}
          </span>
        </Card>
        <Card>
          <Img alt={name} src={src} />
          <span
            style={{
              width: '100%',
              // overflow: 'hidden',
              // whiteSpace: 'nowrap',
              // textOverflow: 'ellipsis',
              //   WebkitLineClamp: 2,
              //   height: '48px',
            }}
          >
            {name}
          </span>
        </Card>
      </div>
    );
  });
RenderCard.displayName = 'RenderCard';

interface InfiniteLoadProps {
  route: string;
  secondRoute: string;
}
const InfiniteLoad: VFC<InfiniteLoadProps> = ({
  route = 'store',
  secondRoute = 'category',
}) => {
  // [route, secondRoute],
  const queryClient = useQueryClient();
  const [mount, setMount] = useState<boolean>(false);
  const {
    data: infinitaData,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery<ItemInterface>(
    [route, secondRoute],
    async ({ pageParam }) => {
      const result = await InfiniteLoadFunction({ page: pageParam });
      return result;
    },
    {
      getNextPageParam: () => {
        const currentInfiniteData = queryClient.getQueryData<
          InfiniteData<ItemInterface>
        >([route, secondRoute]);
        if (
          currentInfiniteData?.pages &&
          currentInfiniteData.pages.length > 0
        ) {
          return currentInfiniteData.pages.length + 1;
        }
        return undefined;
      },
      initialData: { pageParams: [], pages: [] },
    },
  );
  const maybeLoadMore = useInfiniteLoader(
    async () => {
      if (!isFetching) {
        await fetchNextPage();
      }
    },
    {
      isItemLoaded: (index, items_) => !!items_[index],
      minimumBatchSize: 24,
      threshold: 3,
    },
  );
  useEffect(() => {
    setMount(true);
  }, []);
  const items = infinitaData?.pages
    .flat()
    .map(({ id, name, image_url: imageUrl }) => ({ id, name, src: imageUrl }));
  if (!mount || !items) return null;
  return (
    <section style={{ margin: '50px 15px 0 15px' }}>
      <Container>
        <Masonic>
          <Masonry
            onRender={isFetching ? undefined : maybeLoadMore}
            items={items}
            itemStyle={{ padding: '4px' }}
            // columnGutter={8}
            // columnWidth={240}
            // overscanBy={1.25}
            render={RenderCard}
          />
        </Masonic>
      </Container>
    </section>
  );
};

export default InfiniteLoad;
