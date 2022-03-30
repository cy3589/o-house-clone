/* eslint-disable @next/next/no-img-element */
import AppLayout from '@layouts/AppLayout';
import {
  useEffect,
  useState,
  // useState,
  VFC,
} from 'react';

// import InfiniteLoad from '@components/InfiniteLoad';
// import GenerateDivDummy from '@components/GenerateDivDummy';
// import { useRouter } from 'next/router';
// import { useWindowWidth } from '@react-hook/window-size';
import useScrollPosition from '@react-hook/window-scroll';
import StoreCarousel from '@components/StoreCarousel';
import CategoryItems from '@components/CategoryItems';
// import CategoryItemsLargeMode from '@components/CategoryItemsLargeMode';
import TodayDeal from '@components/TodayDeal';
import ThemeCategories from '@components/ThemeCategories';
import axios from 'axios';
// import InfiniteLoadReactVirtualized from '@components/InfiniteLoadReactVirtualized';
import InfiniteLoad from '@components/InfiniteLoad';
import { useSelector } from 'react-redux';
import { RootState } from '@store/reducer';
import { useAppDispatch } from '@store/index';
import scrollSlice from '@slices/scroll';
import { CategoryInterface } from '@interfaces/InfiniteInterface';
import { useRouter } from 'next/router';

const Store: VFC = () => {
  const router = useRouter();
  const scrollY = useScrollPosition(10); // 10fps로 측정
  const dispatch = useAppDispatch();
  const { scrollHeight } = useSelector((state: RootState) => state.scroll);
  useEffect(() => {
    if (router.isReady) {
      setTimeout(() => {
        window.scrollTo({ top: scrollHeight });
        // window.scrollTo({ top: 10000 });
      }, 0);
    }
  }, [router.isReady, scrollHeight]);
  useEffect(() => {
    dispatch(scrollSlice.actions.setScroll(scrollY));
  }, [dispatch, scrollY]);
  // const [mode, setMode] = useState<'small' | 'medium' | 'large'>('small');
  // const windowWidth = useWindowWidth({ leading: true, wait: 50 });
  // useEffect(() => {
  //   if (windowWidth < 768) setMode('small');
  //   else if (windowWidth < 1024) setMode('medium');
  //   else setMode('large');
  // }, [windowWidth]);
  // const router = useRouter();
  // console.log(router);
  // const carouselImages = Carousels[mode];
  const [todayDeal, setTodayDeal] = useState<any | null>(null);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/StoreJson');
      setTodayDeal(data);
    })();
  }, []);
  if (!todayDeal) return null;
  // const carouselImages = Carousels.small;
  const carouselImages = todayDeal.banners.map(
    (banner: any) => banner.mobile_image.url,
  );
  const categoryItems = todayDeal.categories.map(
    (category: CategoryInterface) => ({
      title: category.title,
      // src: category.image_url,
      src: category.resized_image_url,
    }),
  );
  const themeCategories = todayDeal.theme_categories;
  return (
    <AppLayout>
      <StoreCarousel images={carouselImages} />
      <CategoryItems items={categoryItems} />
      {/* {mode !== 'large' ? (
        <CategoryItems items={categoryItems} />
      ) : (
        <CategoryItemsLargeMode items={categoryItems} />
      )} */}
      <TodayDeal todayDeals={todayDeal.today_deal.today_deals} />
      <ThemeCategories themeCategories={themeCategories} />
      <InfiniteLoad route="store" secondRoute="category" />
      {/* <InfiniteLoadReactVirtualized route="store" secondRoute="category" /> */}
    </AppLayout>
  );
};

export default Store;
