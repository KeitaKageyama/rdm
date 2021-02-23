import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { colors } from "../styles/theme";

SwiperCore.use([Navigation, Pagination]);

const poster = [
  "./images/img3.jpg",
  "./images/img1.jpg",
  "./images/img2.jpg",
  "./images/img4.jpg",
];

export const Carousel: FC = () => {
  return (
    <>
      {/* スライダー本体 */}
      <div
        style={{
          backgroundColor: colors.darkGray,
          width: "80vw",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={true}
          pagination={{ clickable: true }}
        >
          {poster.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={image} alt="poster" />
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
