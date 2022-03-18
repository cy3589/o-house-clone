/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unstable-nested-components */
import { memo, useEffect, useRef, useState, VFC } from 'react';
import styled from '@emotion/styled';
import InfiniteLoadFunction from '@utils/InfiniteLoadFunction';
import { InfiniteData, useInfiniteQuery, useQueryClient } from 'react-query';
import { ItemInterface } from '@interfaces/InfiniteInterface';
import {
  InfiniteLoader,
  AutoSizer,
  List,
  WindowScroller,
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized';
import 'react-virtualized/styles.css';

// const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   background: #1d2326;
//   justify-content: center;
//   align-items: center;
//   transition: transform 100ms ease-in-out;
//   /* width: 50%; */
//   background-color: whitesmoke;
// `;

// const Img = styled.img`
//   padding-bottom: 100%;
//   position: relative;
//   /* height: 0; */
//   /* width: 100%; */
//   display: block;
//   border-radius: 10px;
//   overflow: hidden;
//   display: block;
// `;
const RenderCard: VFC<{
  data: Array<{ name: string; src: string }>;
  style: any;
}> = memo(({ data, style }) => {
  // <Card>
  //   <Img alt={data[0].name} src={data[0].src} />
  //   <div>{data[0].name}</div>
  // </Card>
  return (
    <div style={style}>
      <div
        key={data[0].name}
        style={{
          display: 'flex',
          padding: '16px 0',
          position: 'relative',
        }}
      >
        <div style={{ position: 'relative' }}>
          <img
            src={data[0].src}
            alt={data[0].name}
            style={{
              width: '100%',
              // maxWidth: '220px',
              objectFit: 'contain',
              overflow: 'hidden',
              borderRadius: '10px',
            }}
          />
        </div>
      </div>
    </div>
  );
});
// <div>
//   {Array(30)
//     .fill(null)
//     .map((v, i) => (
//       <div key={i}>{i} 123123</div>
//     ))}
// </div>
RenderCard.displayName = 'RenderCard';

interface InfiniteLoadProps {
  route: string;
  secondRoute: string;
}
const Section = styled.section`
  margin: 50px 15px 0 15px;
`;
const InfiniteLoadReactVirtualized: VFC<InfiniteLoadProps> = ({
  route = 'store',
  secondRoute = 'category',
}) => {
  const scrollRef = useRef<any>(null);
  // [route, secondRoute],
  const queryClient = useQueryClient();
  const cache = useRef<CellMeasurerCache>(
    new CellMeasurerCache({ fixedWidth: true }),
  );
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

  useEffect(() => {
    setMount(true);
  }, []);

  const items = infinitaData?.pages
    .flat()
    .map(({ id, name, image_url: imageUrl }) => ({ id, name, src: imageUrl }));

  if (!mount || !items || !Array.isArray(items)) return null;
  const result: Array<Array<{ id: number; src: string; name: string }>> = [];
  for (let i = 0; i < items.length; i += 2) result.push(items.slice(i, i + 2));
  return (
    <Section ref={scrollRef}>
      <InfiniteLoader
        isRowLoaded={({ index }) => (result ? index < result.length : true)}
        rowCount={Infinity}
        loadMoreRows={async () => {
          if (infinitaData && Array.isArray(infinitaData.pages) && !isFetching)
            await fetchNextPage();
        }}
      >
        {({ onRowsRendered, registerChild }) => (
          <WindowScroller>
            {({ isScrolling, height, scrollTop }) => (
              <AutoSizer>
                {({ width }) => (
                  <List
                    containerStyle={{ position: 'relative' }}
                    autoHeight
                    onRowsRendered={onRowsRendered}
                    ref={registerChild}
                    height={height}
                    width={width}
                    rowHeight={cache.current.rowHeight}
                    rowCount={result?.length || 12}
                    scrollTop={scrollTop}
                    isScrolling={isScrolling}
                    rowRenderer={({ key, index, style, parent }) =>
                      Array.isArray(result) &&
                      result[index] && (
                        <CellMeasurer
                          key={key}
                          cache={cache.current}
                          parent={parent}
                          rowIndex={index}
                        >
                          {/* <RenderCard data={result[index]} style={style} /> */}
                          <div style={style}>
                            {Array(30)
                              .fill(null)
                              .map((v, i) => (
                                <div key={i}>{`${index} ${i}`}</div>
                              ))}
                          </div>
                        </CellMeasurer>
                      )
                    }
                  />
                )}
              </AutoSizer>
            )}
          </WindowScroller>
        )}
      </InfiniteLoader>
    </Section>
  );
};

export default InfiniteLoadReactVirtualized;
