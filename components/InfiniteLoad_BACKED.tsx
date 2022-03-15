/* eslint-disable react/no-unstable-nested-components */
import { useRef, VFC } from 'react';
import { InfiniteData, useInfiniteQuery, useQueryClient } from 'react-query';
import { ItemInterface } from '@interfaces/InfiniteInterface';
import InfiniteLoadFunction from '@utils/InfiniteLoadFunction';
import ProductCard from '@components/ProductCard';
import {
  useMasonry,
  usePositioner,
  useContainerPosition,
  useResizeObserver,
  useScroller,
  useInfiniteLoader,
} from 'masonic';
import { useWindowSize } from '@react-hook/window-size';

interface InfiniteLoadProps {
  route: string;
  secondRoute: string;
}
const InfiniteLoad: VFC<InfiniteLoadProps> = ({
  route = 'store',
  secondRoute = 'category',
}) => {
  const queryClient = useQueryClient();
  const containerRef = useRef(null);
  const [windowWidth, height] = useWindowSize();
  const { offset, width } = useContainerPosition(containerRef, [
    windowWidth,
    height,
  ]);
  const positioner = usePositioner({ width, columnGutter: 8 });
  const { scrollTop, isScrolling } = useScroller(offset);
  const resizeObserver = useResizeObserver(positioner);
  const { data, fetchNextPage, isLoading } = useInfiniteQuery<ItemInterface>(
    [route, secondRoute],
    async ({ pageParam }) => {
      const result = await InfiniteLoadFunction({
        page: pageParam,
        route,
        secondRoute,
      });
      return result;
    },
    { initialData: { pages: [], pageParams: [] } },
  );
  const loadMore = useInfiniteLoader(
    async () => {
      if (!isLoading && data?.pages && data.pages.length) {
        const infiniteQueryData = queryClient.getQueryData<
          InfiniteData<ItemInterface>
        >([route, secondRoute]);
        await fetchNextPage({ pageParam: infiniteQueryData?.pages.length });
      }
    },
    {
      isItemLoaded: (index, posts) => {
        return !!posts[index];
      },
      minimumBatchSize: 24,
      totalItems: Infinity,
    },
  );

  const posts = data?.pages.flat();
  if (!posts) return null;
  return (
    <main
      style={{
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <div
        style={{
          padding: '8px',
          width: '100%',
          maxWidth: '1156px',
          margin: 'auto',
        }}
      >
        {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
        {useMasonry({
          onRender: loadMore,
          resizeObserver,
          positioner,
          scrollTop,
          isScrolling,
          height,
          containerRef,
          items: posts,
          overscanBy: 3,
          render: ({ index }) => <ProductCard productData={posts[index]} />,
        })}
        {/* <Masonry
          ssrWidth={1920}
          ssrHeight={1080}
          itemStyle={{ width: '50%' }}
          onRender={loadMore}
          items={posts}
          columnGutter={8}
          columnWidth={290}
          overscanBy={3}
          render={({ index }) => <ProductCard productData={posts[index]} />}
        /> */}
      </div>
    </main>
  );
};

export default InfiniteLoad;
