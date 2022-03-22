/* eslint-disable @next/next/no-img-element */
import { VFC } from 'react';
import styled from '@emotion/styled';
import FreeDelivery from '@components/FreeDelivery';
import { ItemInterface } from '@interfaces/InfiniteInterface';

const ProductionName = styled.span`
  margin-top: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #424242;
  transition: opacity 0.1s;
  max-height: 57px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;
interface TodayDealProps {
  todayDeals?: {
    end_at: string;
    production: ItemInterface;
    start_at: string;
    sub_images: {
      original_image_url: string;
      resized_image_url: string;
    }[];
    title: string;
  }[];
}
const TodayDeal: VFC<TodayDealProps> = ({ todayDeals = [] }) => {
  return (
    <section style={{ margin: '50px 15px 0 15px' }}>
      <header
        style={{
          marginBottom: '20px',
          display: 'flex',
        }}
      >
        <h1>오늘의 딜</h1>
        <h1
          style={{
            marginLeft: 'auto',
            float: 'right',
            fontSize: '15px',
            display: 'flex',
            alignItems: 'center',
            marginRight: '7px',
            color: '#f77',
            cursor: 'pointer',
          }}
        >
          더보기
        </h1>
      </header>
      {todayDeals.map((v, i) => (
        <div
          key={v.production.id}
          style={{
            display: 'flex',
            padding: '16px 0',
            borderBottom:
              i !== todayDeals.length - 1 ? '1px solid #eaedef' : '',
            position: 'relative',
          }}
        >
          <div style={{ position: 'relative' }}>
            <img
              src={v.production.image_url}
              alt={v.production.name}
              style={{
                maxWidth: '220px',
                objectFit: 'contain',
                overflow: 'hidden',
                borderRadius: '10px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                zIndex: '3',
                top: '8px',
                left: '8px',
                backgroundColor: '#f77',
                color: '#fff',
                fontWeight: '700',
                padding: '4px',
                textAlign: 'center',
                borderRadius: '4px',
                fontSize: '11px',
                lineHeight: '12px',
              }}
            >
              {`${Math.floor(
                (Date.parse(v.end_at) - Date.now()) / (1000 * 60 * 60 * 24),
              )}일 남음`}
            </div>
            <button
              type="button"
              style={{
                position: 'absolute',
                width: '24px',
                height: '24px',
                margin: '0',
                padding: '0',
                background: 'none',
                border: 'none',
                zIndex: '2',
                transition: 'opacity .1s',
                bottom: '16px',
                right: '16px',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <defs>
                  <path
                    id="scrap-icon-3-b"
                    d="M12.472 6.93l7.056-3.811A1 1 0 0 1 21 4.002v15.496c0 .83-.672 1.502-1.5 1.502h-15c-.828 0-1.5-.673-1.5-1.502V4.002a1 1 0 0 1 1.472-.883l7.056 3.811a.999.999 0 0 0 .944 0z"
                  />
                  <filter
                    id="scrap-icon-3-a"
                    width="150%"
                    height="150%"
                    x="-25%"
                    y="-25%"
                    filterUnits="objectBoundingBox"
                  >
                    <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                      stdDeviation="1.5"
                    />
                    <feComposite
                      in="shadowBlurOuter1"
                      in2="SourceAlpha"
                      operator="out"
                      result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                      in="shadowBlurOuter1"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"
                    />
                  </filter>
                  <filter
                    id="scrap-icon-3-c"
                    width="150%"
                    height="150%"
                    x="-25%"
                    y="-25%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur
                      in="SourceAlpha"
                      result="shadowBlurInner1"
                      stdDeviation="1.5"
                    />
                    <feOffset
                      in="shadowBlurInner1"
                      result="shadowOffsetInner1"
                    />
                    <feComposite
                      in="shadowOffsetInner1"
                      in2="SourceAlpha"
                      k2="-1"
                      k3="1"
                      operator="arithmetic"
                      result="shadowInnerInner1"
                    />
                    <feColorMatrix
                      in="shadowInnerInner1"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                  </filter>
                </defs>
                <g
                  fill="none"
                  fillRule="nonzero"
                  transform="matrix(1 0 0 -1 0 24)"
                >
                  <use
                    fill="#000"
                    filter="url(#scrap-icon-3-a)"
                    href="#scrap-icon-3-b"
                  />
                  <use fill="#FFF" fillOpacity=".4" href="#scrap-icon-3-b" />
                  <use
                    fill="#000"
                    filter="url(#scrap-icon-3-c)"
                    href="#scrap-icon-3-b"
                  />
                  <path
                    stroke="#FFF"
                    d="M12.71 7.37h-.002a1.5 1.5 0 0 1-1.417 0L4.236 3.56a.499.499 0 0 0-.736.442v15.496c0 .553.448 1.002 1 1.002h15c.552 0 1-.449 1-1.002V4.002a.499.499 0 0 0-.734-.443l-7.057 3.81zm-.475-.88h-.001z"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: '12px',
            }}
          >
            <span
              style={{
                width: '100%',
                color: '#828c94',
                fontSize: '11px',
                fontWeight: 400,
              }}
            >
              {v.production.brand_name}
            </span>
            <ProductionName>{v.title}</ProductionName>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                style={{
                  width: '1.1em',
                  height: '1.1em',
                  marginRight: '1px',
                  color: 'rgb(53, 197, 240)',
                  verticalAlign: '-2px',
                }}
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z"
                />
              </svg>
              <span
                style={{
                  color: '#424242',
                  fontSize: '12px',
                  fontWeight: '700',
                  marginLeft: '2px',
                }}
              >
                {`${Number(v.production.review_avg).toFixed(1)} `}
              </span>
              <span
                style={{
                  color: '#9e9e9e',
                  fontSize: '12px',
                  fontWeight: 700,
                }}
              >
                {`리뷰 ${Number(v.production.review_count)}`}
              </span>
            </div>
            <div style={{ fontSize: '20px', fontWeight: 700 }}>
              <span style={{ color: '#35c5f0', marginRight: 0 }}>
                {`${(
                  100 *
                  ((v.production.original_price - v.production.selling_price) /
                    v.production.original_price)
                ).toFixed(0)}% `}
              </span>
              <span>
                {`${(v.production.selling_price as Number).toLocaleString()}${
                  v.production.type === 'Deal' ? ' 외' : ''
                }`}
              </span>
            </div>
            {v.production.is_free_delivery && <FreeDelivery />}
          </div>
        </div>
      ))}
      <h1
        style={{
          width: '100%',
          marginTop: '10px',
          padding: '11px 10px 12px',
          textAlign: 'center',
          color: '#757575',
          backgroundColor: '#ededed',
          fontSize: '17px',
          cursor: 'pointer',
        }}
      >
        오늘의딜 더보기&gt;
      </h1>
    </section>
  );
};

export default TodayDeal;
