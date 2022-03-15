/* eslint-disable @next/next/no-img-element */
import AppLayout from '@layouts/AppLayout';
import { useEffect, useState, VFC } from 'react';
// import InfiniteLoad from '@components/InfiniteLoad';
import Dummy500Child from '@components/Dummy500Child';
// import { useRouter } from 'next/router';
import { useWindowWidth } from '@react-hook/window-size';
import StoreCarousel from '@components/StoreCarousel';
import CategoryItems from '@components/CategoryItems';

const Carousels = {
  small: [
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164732254670609056.png?gif=1&w=2560&q=100',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164640384286625409.png?gif=1&w=2560&q=100',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164698152336430518.png?gif=1&w=2560&q=100',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164718403554862601.png?gif=1&w=2560&q=100',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164698769071402437.png?gif=1&w=2560&q=100',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164689942007507160.jpg?gif=1&w=2560&q=100',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164698735190925762.png?gif=1&w=2560&q=100',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164698805892259186.png?gif=1&w=1920&q=100',
  ],
  medium: [
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164732254986170435.png?gif=1&w=2560&q=100',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164640384835442151.png?gif=1&w=2560&q=100',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164698152710401539.png?gif=1&w=2560&q=100',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164718404183807340.png?gif=1&w=2560&q=100',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164689942578304311.png?gif=1&w=2560&q=100',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164698769406187390.png?gif=1&w=2560&q=100',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164698735620954518.png?gif=1&w=2560&q=100',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164689953982088246.png?gif=1&w=2560&q=100',
  ],
  large: [
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164732254986170435.png?gif=1&w=2560&q=100',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164640384835442151.png?gif=1&w=2560&q=100',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164698152710401539.png?gif=1&w=2560&q=100',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164718404183807340.png?gif=1&w=2560&q=100',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164698769406187390.png?gif=1&w=2560&q=100',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164689942578304311.png?gif=1&w=2560&q=100',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164698735620954518.png?gif=1&w=2560&q=100',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/164689953982088246.png?gif=1&w=2560&q=100',
  ],
};

const categoryItems: { src: string; title: string }[] = [
  {
    title: '가구',
    src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/164333421927911367.png?gif=1&w=144&h=144&c=c',
  },
  {
    title: '패브릭',
    src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823225115177697.png?gif=1&w=144&h=144&c=c',
  },
  {
    title: '조명',
    src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823225665741013.png?gif=1&w=144&h=144&c=c',
  },
  {
    title: '가전',
    src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823226017937426.png?gif=1&w=144&h=144&c=c',
  },
  {
    title: '주방용품',
    src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823226903946200.png?gif=1&w=144&h=144&c=c',
  },
  {
    title: '데코/식물',
    src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823227719846773.png?gif=1&w=144&h=144&c=c',
  },
  {
    title: '수납/정리',
    src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823227719846773.png?gif=1&w=144&h=144&c=c',
  },
  {
    title: '생활용품',
    src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/163609843911228804.png?gif=1&w=144&h=144&c=c',
  },
  {
    title: '서랍/수납장',
    src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/164333398177552131.png?gif=1&w=144&h=144&c=c',
  },
  {
    title: '생필품',
    src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/163575474448469686.png?gif=1&w=144&h=144&c=c',
  },
  {
    title: '공구/DIY',
    src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823230480918647.png?gif=1&w=144&h=144&c=c',
  },
  {
    title: '인테리어시공',
    src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823230908544036.png?gif=1&w=144&h=144&c=c',
  },
  {
    title: '반려동물',
    src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823231401891024.png?gif=1&w=144&h=144&c=c',
  },
  {
    title: '캠핑용품',
    src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823242317048198.png?gif=1&w=144&h=144&c=c',
  },
  {
    title: '실내운동',
    src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823231949249287.png?gif=1&w=144&h=144&c=c',
  },
  {
    title: '렌탈',
    src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/164148743817769527.png?gif=1&w=144&h=144&c=c',
  },
];

const Store: VFC = () => {
  const [mode, setMode] = useState<'small' | 'medium' | 'large'>('small');
  const windowWidth = useWindowWidth({ leading: true, wait: 50 });
  useEffect(() => {
    if (windowWidth < 768) setMode('small');
    else if (windowWidth < 1024) setMode('medium');
    else setMode('large');
  }, [windowWidth]);
  // const router = useRouter();
  // console.log(router);
  const carouselImages = Carousels[mode];
  return (
    <AppLayout>
      <StoreCarousel images={carouselImages} />
      <CategoryItems items={categoryItems} />
      <Dummy500Child />
      {/* <InfiniteLoad route="store" secondRoute="category" /> */}
    </AppLayout>
  );
};
export default Store;
