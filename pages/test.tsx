/* eslint-disable @next/next/no-img-element */
import { memo, useEffect, useState } from 'react';
import { Masonry, useInfiniteLoader } from 'masonic';
import styled from '@emotion/styled';
import AppLayout from '@layouts/AppLayout';
import Dummy500Child from '@components/Dummy500Child';
import InfiniteLoadFunction from '@utils/InfiniteLoadFunction';
import { InfiniteData, useInfiniteQuery, useQueryClient } from 'react-query';
import { ItemInterface } from '@interfaces/InfiniteInterface';

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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #1d2326;
  justify-content: center;
  align-items: center;
  transition: transform 100ms ease-in-out;
  width: 100%;
  background-color: whitesmoke;

  span:last-of-type {
    /* color: #fff; */
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
  border-radius: 10px;
  overflow: hidden;
  display: block;
`;
const FakeCard = memo(
  ({ data: { name, src } }: { data: { name: string; src: string } }) => (
    <Card>
      <Img alt={name} src={src} />
      <span
        style={{
          width: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitLineClamp: 2,
          height: '48px',
        }}
      >
        {name}
      </span>
    </Card>
  ),
);
FakeCard.displayName = 'FakeCard';

const Test = () => {
  const queryClient = useQueryClient();
  const [mount, setMount] = useState<boolean>(false);
  const {
    data: infinitaData,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery<ItemInterface>(
    'test',
    async ({ pageParam }) => {
      const result = await InfiniteLoadFunction({ page: pageParam });
      return result;
    },
    {
      getNextPageParam: () => {
        const currentInfiniteData =
          queryClient.getQueryData<InfiniteData<ItemInterface>>('test');
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
      if (!isFetching) await fetchNextPage();
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
  const itemss = infinitaData?.pages
    .flat()
    .map(({ id, name, image_url: imageUrl }) => ({ id, name, src: imageUrl }));
  return (
    mount &&
    itemss && (
      <AppLayout>
        <Dummy500Child />
        <Container>
          <Masonic>
            <Masonry
              onRender={maybeLoadMore}
              items={itemss}
              columnGutter={8}
              columnWidth={240}
              overscanBy={1.25}
              render={FakeCard}
            />
          </Masonic>
        </Container>
      </AppLayout>
    )
  );
};
export default Test;
