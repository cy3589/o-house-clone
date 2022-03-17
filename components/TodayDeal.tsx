/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, VFC } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

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
const TodayDeal: VFC = () => {
  const [todayDeal, setTodayDeal] = useState<any | null>(null);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/StoreJson');
      setTodayDeal(data);
    })();
  }, []);
  if (!todayDeal) return null;
  if (!todayDeal?.today_deal?.today_deals) return null;
  // console.log(todayDeal.today_deal.today_deals);
  // todayDeal.today_deal.today_deals.forEach((v: any) => {
  // Object.entries(v.production).forEach(([key, value]) => {
  //   if (key.slice(0, 3) === 'is_') {
  //     console.log(key, value);
  //   }
  // });
  // });
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
      {(todayDeal.today_deal.today_deals as any[]).map((v, i) => (
        <div
          key={v.production.id}
          style={{
            display: 'flex',
            padding: '16px 0',
            borderBottom:
              i !== (todayDeal.today_deal.today_deals as any[]).length - 1
                ? '1px solid #eaedef'
                : '',
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
            {v.production.is_free_delivery && (
              <span
                style={{
                  marginTop: '6px',
                }}
              >
                <svg
                  aria-label="무료배송"
                  width="47"
                  height="20"
                  viewBox="0 0 47 20"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g fill="none" fillRule="evenodd">
                    <rect
                      width="47"
                      height="20"
                      fill="#000"
                      fillOpacity=".07"
                      fillRule="nonzero"
                      rx="4"
                    />
                    <path
                      fill="#757575"
                      d="M12.73 5.38v3.96h-6.6V5.38h6.6zm-2.68 9.43H8.76v-3.25H5v-1.03h8.86v1.03h-3.81v3.25zm1.4-6.49V6.41H7.43v1.91h4.04zm11.08 2.7h-1.42v1.54h2.26v1.02h-8.86v-1.02h2.24v-1.53h-1.1V7.78h5.32V6.65H15.6V5.63h6.66V8.8h-5.33v1.18h5.61v1.04zm-4.53 0v1.54h1.87v-1.53H18zm14.37 3.78h-1.23V9.86h-.8v4.49h-1.2V5.18h1.2v3.66h.8V5h1.23v9.8zm-4.2-2.54h-3.9V6.01h1.27v2.26h1.36V6h1.28v6.26zm-1.27-1.01v-2h-1.36v2h1.36zm14.49 1.71c0 1.13-1.25 1.82-3.41 1.82s-3.42-.7-3.42-1.82 1.25-1.82 3.4-1.82c2.18 0 3.43.7 3.43 1.82zm-3.41-6.05c-.5 1.13-2.1 1.9-3.51 2.1l-.54-1c1.64-.17 3.39-1.06 3.39-2.54V5.2h1.33v.28c0 1.48 1.99 2.47 3.4 2.53l-.55 1.01c-1.31-.18-3.03-.97-3.52-2.1zm4.42 3.78h-8.86V9.66h3.79V8.4h1.29v1.26h3.78v1.03zm-2.33 2.27c0-.5-.83-.8-2.1-.8s-2.08.3-2.08.8c0 .51.81.8 2.08.8s2.1-.29 2.1-.8z"
                    />
                  </g>
                </svg>
              </span>
            )}
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
