import styled from '@emotion/styled';
import { useCallback, useEffect, useRef, VFC } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/autoplay';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

interface StoreCarouselProps {
  images: string[];
}

const StoreCarousel: VFC<StoreCarouselProps> = ({ images: carouselImages }) => {
  const swiperRef = useRef<any>(null);
  const onMouseOver = useCallback(() => {
    swiperRef.current.swiper.autoplay.stop();
  }, []);
  const onMouseLeave = useCallback(() => {
    swiperRef.current.swiper.autoplay.start();
  }, []);
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.$el[0].addEventListener(
        'mouseover',
        onMouseOver,
      );
      swiperRef.current.swiper.$el[0].addEventListener(
        'mouseleave',
        onMouseLeave,
      );
    }
    return () => {
      swiperRef.current.swiper.$el[0].removeEventListener(
        'mouseover',
        onMouseOver,
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
      swiperRef.current.swiper.$el[0].removeEventListener(
        'mouseleave',
        onMouseLeave,
      );
    };
  }, [onMouseLeave, onMouseOver, swiperRef]);
  return (
    <Swiper
      style={{ marginBottom: '-6px' }}
      speed={1000}
      draggable
      autoplay={{ delay: 1000 }}
      slidesPerView={1}
      loop
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      centeredSlides
      // @ts-ignore
      ref={swiperRef}
    >
      {carouselImages.map((v) => (
        <SwiperSlide key={v}>
          <Img src={v} alt={v} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StoreCarousel;
