import { Logo } from "../assets/images";
import { Link } from "react-router-dom";
import SearchInput from "../components/Input/SearchInput";
import { useForm } from "react-hook-form";
import {
  UilMapMarker,
  UilEnvelope,
  UilFacebookF,
  UilTwitter,
  UilInstagramAlt,
  UilShoppingCartAlt,
  UilUserCircle,
} from "@iconscout/react-unicons";

const Header = () => {
  const { handleSubmit, register } = useForm();
  const handleSearch = (data) => console.log(data);
  return (
    <>
      {/* Top Header */}
      <div className="container mx-auto p-3">
        <div className="flex justify-between">
          <div className="md:flex gap-x-20">
            <h5 className="flex items-center">
              <UilMapMarker className="text-green font-medium" />
              <span className="pl-2 tracking-wide text-base text-darkGray">
                Kathmandu-32 , Nepal
              </span>
            </h5>
            <h5 className="flex items-center">
              <UilEnvelope className="text-green font-medium" />
              <span className="pl-2 tracking-wide text-base text-darkGray">
                kiran.kumal714@gmail.com
              </span>
            </h5>
          </div>
          <div className="flex items-center gap-x-2">
            <a href="">
              <UilFacebookF className="text-blue-700" />
            </a>
            <a href="">
              <UilTwitter className="text-sky-700" />
            </a>
            <a href="">
              <UilInstagramAlt className="text-pink-500" />
            </a>
          </div>
        </div>
      </div>
      <hr className="text-lightGreen" />
      {/* Bottom Header */}
      <div className="container mx-auto p-3 sm:flex justify-between items-center">
        <img src={Logo} alt="brand-logo" className="w-52" />
        <div className="flex items-center justify-between sm:gap-x-4">
          <form onSubmit={handleSubmit(handleSearch)} className="">
            <SearchInput
              placeholder="Search"
              name="search"
              register={register}
              onChange={handleSearch}
            />
          </form>
          <div className="flex gap-x-6 items-center ">
            <Link to="/cart" className="relative">
              <UilShoppingCartAlt
                className="text-gray hover:text-lightGreen duration-300"
                size="36"
              />
              <span className="rounded-full px-2 py-0.5 bg-green text-white text-sm absolute top-[-9px] left-4">
                1
              </span>
            </Link>
            <Link to="/profile">
              <UilUserCircle
                className="text-gray hover:text-lightGreen duration-300"
                size="36"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
