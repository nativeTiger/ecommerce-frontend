import { Link } from "react-router-dom";
import { UilShoppingCartAlt, UilHeart } from "@iconscout/react-unicons";

const Featured = ({ image, name, weight, previousPrice, currentPrice }) => {
  return (
    <figure className="w-56 my-4 rounded-md shadow-md border-lightGray relative">
      <div className="absolute top-3 right-2 cursor-pointer shadow-2xl backdrop-blur-sm bg-white/80 rounded-full p-1.5 duration-300 text-green hover:bg-green hover:text-white">
        <UilHeart />
      </div>
      <img
        src={image}
        alt=""
        className="w-full h-52 object-cover rounded-t-md swiper-lazy"
      />
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      <figcaption className="p-3">
        <Link>
          <h3 className="font-lato text-darkGray font-bold tracking-normal text-lg cursor-pointer duration-200 hover:text-green">
            {name}
          </h3>
        </Link>
        <p className="font-poppins text-lightGray font-normal tracking-tight text-sm">
          {weight}
        </p>
        <h2 className="font-lato text-lightGray font-normal tracking-tight">
          <span className="line-through text-sm pr-2">Rs {previousPrice}</span>{" "}
          <span className="text-green text-lg font-semibold">
            Rs {currentPrice}
          </span>
        </h2>
        <div className="bg-green absolute right-0 bottom-0 p-2 rounded-tl-md rounded-br-md text-white cursor-pointer hover:bg-red-600">
          <UilShoppingCartAlt />
        </div>
      </figcaption>
    </figure>
  );
};

export default Featured;
