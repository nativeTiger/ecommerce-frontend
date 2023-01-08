import Button from "../../components/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Lazy, Navigation } from "swiper";
import Category from "../../components/card/Category";
import SectionTitle from "../../components/Title/SectionTitle";
import SecondaryButton from "../../components/Button/SecondaryButton";
import Featured from "../../components/card/Featured";
import {
  featuredProductList,
  productCategoryList,
  servicesList,
} from "./HomeData";
import { AppStore, GooglePlay, MobileImg } from "../../assets/images";

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
      {/* Product Category */}
      <div className="container mx-auto px-3 py-14">
        <SectionTitle title="Product Category" />
        <Swiper
          lazy={true}
          slidesPerView={2}
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            440: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          modules={[Lazy, Navigation]}
        >
          {productCategoryList.map((item, index) => (
            <SwiperSlide key={index}>
              <Category
                image={item.image}
                name={item.name}
                noOfItem={item.item}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center items-center mt-12">
          <SecondaryButton name="Browse more" />
        </div>
      </div>
      {/* Discount Banner */}
      <div className="container mx-auto px-3 py-14">
        <div className=" bg-[url('./src/assets/images/variety-fresh-tasty-vegetables-dark.jpg')] bg-no-repeat bg-cover bg-bottom rotate-180 pt-44 pb-12 rounded-md">
          <div className="text-center rotate-180">
            <h3 className="font-lato font-black text-3xl sm:text-5xl pb-4 tracking-wide text-white">
              Super Discount 70% OFF
            </h3>
            <p className="font-poppins font-medium text-lg tracking-wide text-white">
              Hurry Up. Get your products now
            </p>
          </div>
        </div>
      </div>
      {/* Best Deals for you */}
      <div className="container mx-auto px-3 py-14">
        <SectionTitle title="Best Deals For you" />
        <Swiper
          lazy={true}
          slidesPerView={1.3}
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            440: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            540: {
              slidesPerView: 2.5,
              spaceBetween: 25,
            },
            767: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1023: {
              slidesPerView: 4.5,
              spaceBetween: 50,
            },
          }}
          modules={[Lazy, Navigation]}
        >
          {featuredProductList.map((item, index) => (
            <SwiperSlide key={index}>
              <Featured
                image={item.image}
                name={item.name}
                weight={item.weight}
                previousPrice={item.previousPrice}
                currentPrice={item.currentPrice}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center items-center mt-12">
          <SecondaryButton name="Browse more" />
        </div>
      </div>
      {/* Mobile Apps */}
      <div className="container mx-auto px-3 ">
        <div className="lg:flex items-center gap-x-28">
          <div className="">
            <h3 className="font-lato font-black tracking-wide text-4xl text-darkGray">
              Make your online shop easier with our mobile app
            </h3>
            <p className="font-poppins font-medium tracking-wide text-lg text-gray py-8">
              Aala makes online grocery shopping fast and easy. Get groceries
              delivered and order the best of seasonal farm fresh food.
            </p>
            <div className="flex gap-x-12 items-center">
              <img className="w-40" src={GooglePlay} alt="" />
              <img className="w-40" src={AppStore} alt="" />
            </div>
          </div>
          <img src={MobileImg} alt="" className="w-full lg:w-2/5" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
