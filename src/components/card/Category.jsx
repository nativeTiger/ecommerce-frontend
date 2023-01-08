import { Link } from "react-router-dom";

const Category = ({ image, name, noOfItem }) => {
  return (
    <figure className="w-full">
      <img
        src={image}
        alt=""
        className="w-full h-32 object-cover rounded-md swiper-lazy"
      />
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      <figcaption className="py-2">
        <Link>
          <h3 className="text-darkGray text-base font-poppins font-medium tracking-normal hover:text-green hover:cursor-pointer duration-300">
            {name}
          </h3>
        </Link>
        <p className="text-gray text-sm font-poppins font-normal tracking-tight ">
          {noOfItem} items
        </p>
      </figcaption>
    </figure>
  );
};

export default Category;
