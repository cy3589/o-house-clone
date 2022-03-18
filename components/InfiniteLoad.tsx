/* eslint-disable react/no-unstable-nested-components */
import { memo, useEffect, useState, VFC } from 'react';
import {
  List,
  // Masonry,
  RenderComponentProps,
  useInfiniteLoader,
} from 'masonic';
import styled from '@emotion/styled';
import InfiniteLoadFunction from '@utils/InfiniteLoadFunction';
import { InfiniteData, useInfiniteQuery, useQueryClient } from 'react-query';
import { ItemInterface } from '@interfaces/InfiniteInterface';
import FreeDelivery from '@components/FreeDelivery';
import SpecialPrice from '@components/SpecialPrice';
import ReviewOneStar from '@components/ReviewOneStar';
import Link from 'next/link';

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
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background: #1d2326;
  /* justify-content: center; */
  align-items: center;
  transition: transform 100ms ease-in-out;
  text-align: left;
  flex: 0 0 49%;
  background-color: inherit;
`;

const Img = styled.img`
  width: 100%;
  display: block;
  border-radius: 4px;
  overflow: hidden;
  display: block;
  position: relative;
  &:hover {
    transform: scale(1.05);
  }
  transition: transform 0.2s;
`;
const ImageWrapperDiv = styled.div`
  position: relative;
  background-color: #f5f5f5;
  padding-bottom: 100%;
  border-radius: 4px;
  overflow: hidden;
  height: 0;
`;
const RenderTwoCardStyle = {
  WrapperDiv: styled.div`
    display: flex;
    gap: 2%;
  `,
  ContentWrapperDiv: styled.div`
    margin: 9px 0 0;
    width: 100%;
  `,
  ProductNameSpan: styled.span`
    max-height: 34px;
    margin-top: 5px;
    word-break: break-all;
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
    color: #000;
    transition: opacity 0.1s;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  `,
  NamesWrapperDiv: styled.div`
    display: flex;
    flex-direction: column;
  `,
  BrandNameWrapperDiv: styled.div`
    display: block;
    color: #757575;
    word-break: break-all;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
  `,
};
const RenderCard: VFC<RenderComponentProps<Array<ItemInterface>>> = memo(
  ({ data }) => {
    return (
      <RenderTwoCardStyle.WrapperDiv>
        {data.map(
          ({
            name,
            resized_image_url: resizedImageUrl,
            // image_url: imageUrl,
            brand_name: brandName,
            original_price: originalPrice,
            selling_price: sellingPrice,
            type,
            review_avg: reviewAvg,
            review_count: reviewCount,
            is_free_delivery: isFreeDelivery,
            is_special_price: isSpecialPrice,
            id,
          }) => (
            <Link
              key={name}
              href={{ pathname: `/productions/${id}/selling` }}
              passHref
            >
              <Card>
                <ImageWrapperDiv>
                  <Img alt={name} src={decodeURIComponent(resizedImageUrl)} />
                </ImageWrapperDiv>
                <RenderTwoCardStyle.ContentWrapperDiv>
                  <RenderTwoCardStyle.NamesWrapperDiv>
                    <RenderTwoCardStyle.BrandNameWrapperDiv>
                      {brandName}
                    </RenderTwoCardStyle.BrandNameWrapperDiv>
                    <RenderTwoCardStyle.ProductNameSpan>
                      {name}
                    </RenderTwoCardStyle.ProductNameSpan>
                  </RenderTwoCardStyle.NamesWrapperDiv>
                  <div
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    {originalPrice !== sellingPrice ? (
                      <span style={{ color: '#35c5f0', marginRight: '2px' }}>
                        {`${Math.floor(
                          (100 * (originalPrice - sellingPrice)) /
                            originalPrice,
                        )}%`}
                      </span>
                    ) : null}
                    <span>
                      {sellingPrice.toLocaleString()}
                      {type === 'Deal' ? ' 외' : ''}
                    </span>
                  </div>
                  {reviewAvg ? (
                    <p style={{ margin: '3px 0 0', fontSize: '12px' }}>
                      <ReviewOneStar
                        style={{
                          width: '1.1em',
                          height: '1.1em',
                          marginRight: '1px',
                          color: '#35c5f0',
                          verticalAlign: '-2px',
                        }}
                      />
                      <strong
                        style={{
                          marginRight: '2px',
                          color: '#424242',
                          fontWeight: '700',
                        }}
                      >
                        {reviewAvg.toFixed(1)}
                      </strong>
                      <span
                        style={{
                          color: '#9e9e9e',
                          lineHeight: '16px',
                          fontWeight: '700',
                        }}
                      >{`리뷰 ${reviewCount.toLocaleString()}`}</span>
                    </p>
                  ) : null}

                  <div style={{ marginTop: '8px' }}>
                    {isFreeDelivery ? (
                      <FreeDelivery style={{ marginRight: '4px' }} />
                    ) : null}
                    {isSpecialPrice ? (
                      <SpecialPrice style={{ marginRight: '4px' }} />
                    ) : null}
                  </div>
                </RenderTwoCardStyle.ContentWrapperDiv>
              </Card>
            </Link>
          ),
        )}
      </RenderTwoCardStyle.WrapperDiv>
    );
  },
);
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
      cacheTime: 1000 * 60 * 5,
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
  const items = infinitaData?.pages.flat();
  if (!mount || !items) return null;
  const result: Array<Array<ItemInterface>> = [];
  for (let i = 0; i < items.length; i += 2) result.push(items.slice(i, i + 2));
  return (
    <section style={{ margin: '50px 15px 0 15px' }}>
      <Container>
        <Masonic>
          <List
            onRender={isFetching ? undefined : maybeLoadMore}
            items={result}
            itemStyle={{ padding: '4px' }}
            render={RenderCard}
            overscanBy={4}
          />
        </Masonic>
      </Container>
    </section>
  );
};

export default InfiniteLoad;
