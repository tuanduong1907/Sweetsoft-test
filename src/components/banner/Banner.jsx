import React from "react";
import BannerItem from "./BannerItem";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <section className="banner-list h-[720px] w-full ">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        grabCursor={"true"}
        spaceBetween={20}
        slidesPerView={"auto"}
        className="mySwiper"
      >
        <SwiperSlide>
          <BannerItem></BannerItem>
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem></BannerItem>
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem></BannerItem>
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem></BannerItem>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
