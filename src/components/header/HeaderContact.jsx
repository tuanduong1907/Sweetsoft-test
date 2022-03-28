import React from "react";
import { GrFacebookOption, GrTwitter, GrGooglePlus } from "react-icons/gr";
import { IoIosWifi } from "react-icons/io";

const HeaderContact = () => {
  return (
    <div className="h-[54px] bg-bg-color sm:flex items-center text-white hidden">
      <div className="flex items-center justify-between h-full wrapper">
        <div className="flex items-center gap-x-3">
          <span className="text-lg capitalize font-meidum">
            Connect with us:
          </span>
          <ul className="flex items-center gap-x-7">
            <li>
              <a href="/#">
                <GrFacebookOption className="text-xl"></GrFacebookOption>
              </a>
            </li>
            <li>
              <a href="/#">
                <GrTwitter className="text-xl"></GrTwitter>
              </a>
            </li>
            <li>
              <a href="/#">
                <IoIosWifi className="text-xl"></IoIosWifi>
              </a>
            </li>
            <li>
              <a href="/#">
                <GrGooglePlus className="text-xl"></GrGooglePlus>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-x-9">
          <span className="text-lg font-meidum relative before:content-[''] before:block before:absolute before:-right-[18px] before:w-[1px] before:h-full before:bg-white before:bg-opacity-50">
            info@bexar.com
          </span>
          <span className="text-lg font-meidum">
            Call Us Now: <span className="text-primary">123 456 5523</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderContact;
