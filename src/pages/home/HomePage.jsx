import Button from "../../components/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { servicesList } from "./HomeData";

const HomePage = () => {
  return (
    <div>
      {/* Banner Section */}
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {Array.from(Array(3)).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[url('./src/assets/images/katie-smith-uQs1802D0CQ-unsplash.jpg')] bg-center bg-no-repeat bg-cover">
              <div className="bg-[#120e0f87] py-20 sm:py-40">
                <div className="container mx-auto px-3 md:pl-7">
                  <h2 className="font-lato font-black text-4xl text-white tracking-wide">
                    Stay home & get your daily need's
                  </h2>
                  <h4 className="font-poppins font-medium text-xl tracking-wide text-white py-7">
                    Start Your Daily Sopping with Aala
                  </h4>
                  <div className="animate-bounce">
                    <Button name="Order Now" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Services Section */}
      <div className="bg-[#00000012]">
        <div className="container mx-auto px-3 py-7 flex flex-col gap-6 flex-wrap sm:flex-row sm:justify-between sm:items-center">
          {servicesList.map((item, index) => (
            <div key={index} className="flex items-center gap-x-5 ">
              <span className="text-green">{item.icon} </span>
              <div className="">
                <h3 className="text-green font-lato font-semibold text-xl capitalize pb-2">
                  {item.title}
                </h3>
                <p className="font-poppins text-base">{item.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
