import { Khalti, Logo, PhonePay } from "../assets/images";
import { Link } from "react-router-dom";
import {
  UilMapMarker,
  UilEnvelope,
  UilPhone,
  UilFacebookF,
  UilTwitter,
  UilInstagramAlt,
  UilAngleRight,
  UilCopyright,
} from "@iconscout/react-unicons";
import SectionTitle from "../components/Title/SectionTitle";

// list of links
const linkList = {
  popularProducts: [
    {
      name: "Vegetables",
      link: "",
    },
    {
      name: "Fruits",
      link: "",
    },
    {
      name: "Organic",
      link: "",
    },
    {
      name: "Dairy",
      link: "",
    },
    {
      name: "Bakery & Pastry",
      link: "",
    },
  ],
  socialLink: [
    <UilFacebookF className="text-green" />,
    <UilTwitter className="text-green" />,
    <UilInstagramAlt className="text-green" />,
  ],
};

const Footer = () => {
  return (
    <div className="bg-lightGreen/[0.35] py-6">
      {/* Top Footer Section */}
      <div className="container px-3 mx-auto">
        <div className="flex flex-col gap-y-9 sm:grid sm:grid-cols-2 lg:grid-cols-4 md:gap-x-8">
          <div>
            <img src={Logo} alt="brand-logo" className="w-52 pb-5" />
            <ul className="text-base">
              <li className="flex items-center gap-x-2">
                <UilPhone className="text-green" />
                +97798123456
              </li>
              <li className="flex items-center gap-x-2 py-1">
                <UilMapMarker className="text-green" />
                Kathmandu-32 , Nepal
              </li>
              <li className="flex items-center gap-x-2">
                <UilEnvelope className="text-green" />
                kiran.kumal714@gmail.com
              </li>
            </ul>
          </div>
          <div>
            <SectionTitle title="Popular Products" />
            <ul className="">
              {linkList.popularProducts.map((item, index) => (
                <li key={index}>
                  <UilAngleRight className="inline" />
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle title="Payment Method" />
            <div className="flex flex-col gap-y-4">
              <img src={PhonePay} alt="phone-pay" className="w-32" />
              <img src={Khalti} alt="khati" className="w-32" />
            </div>
          </div>
          <div>
            <SectionTitle title="Connect with us" />
            <div className="flex items-center gap-x-6">
              {linkList.socialLink.map((item, index) => (
                <div className="bg-slate-300 p-3 rounded-md" key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="text-lightGray my-8" />

      {/* Bottom Footer Section */}
      <div className="container px-3 mx-auto flex flex-col items-center sm:flex-row sm:justify-between gap-y-4 text-sm font-lato">
        <h5>
          <UilCopyright className="inline text-green" />
          <span className="pl-2">
            Copyright 2022 RedQ, Inc. All rights reserved
          </span>
        </h5>
        <h5>Terms and condition | Privacy Policy</h5>
      </div>
    </div>
  );
};

export default Footer;
