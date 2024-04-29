import img1 from "../../assets/pottery.jpg";
import img2 from "../../assets/stoneware.jpg";
import img3 from "../../assets/terracota.jpg";
import img4 from "../../assets/porcelain.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
    return (
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-80 lg:h-96"
      >
        <SwiperSlide>
          <img src={img1} alt="" className="w-full h-full"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className="w-full h-full"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" className="w-full h-full"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" className="w-full h-full"/>
        </SwiperSlide>
      </Swiper>
    );
};

export default Banner;