import React from "react";
import { SiReactos } from "react-icons/si";
import { FaCalendarDay } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { BsEmojiSmileFill } from "react-icons/bs";

const Achievements = () => {
  return (
    <div className="w-full lg:w-[80%] bg-primary-text flex justify-center lg:justify-end items-center p-10  lg:p-[92px] h-[172px] mb-[80px] lg:mb-[149px] overflow-hidden">
      <ul className="flex gap-x-5 lg:gap-x-[100px]">
        <li className="flex flex-col items-center gap-x-4 lg:flex-row">
          <SiReactos className="fill-primary w-6 h-6 lg:w-[50px] lg:h-[50px]"></SiReactos>
          <div className="flex flex-col flex-shrink-0 text-white gap-y-2 lg:gap-y-4">
            <span className="mt-2 text-xl font-bold text-center lg:text-4xl lg:text-left lg:mt-0">
              50+
            </span>
            <span className="flex-shrink-0 text-base text-center lg:text-lg lg:text-left">
              Project Done
            </span>
          </div>
        </li>
        <li className="flex flex-col items-center gap-x-4 lg:flex-row">
          <FaCalendarDay className="fill-primary w-6 h-6 lg:w-[50px] lg:h-[50px]"></FaCalendarDay>
          <div className="flex flex-col flex-shrink-0 text-white gap-y-2 lg:gap-y-4">
            <span className="mt-2 text-xl font-bold text-center lg:text-4xl lg:text-left lg:mt-0">
              25+
            </span>
            <span className="flex-shrink-0 text-base text-center lg:text-lg lg:text-left">
              Years Experience
            </span>
          </div>
        </li>
        <li className="flex flex-col items-center gap-x-4 lg:flex-row">
          <GiTrophyCup className="fill-primary w-6 h-6 lg:w-[50px] lg:h-[50px]"></GiTrophyCup>
          <div className="flex flex-col flex-shrink-0 text-white gap-y-2 lg:gap-y-4">
            <span className="mt-2 text-xl font-bold text-center lg:text-4xl lg:text-left lg:mt-0">
              250+
            </span>
            <span className="flex-shrink-0 text-base text-center lg:text-lg lg:text-left">
              Adwards Win
            </span>
          </div>
        </li>
        <li className="flex flex-col items-center gap-x-4 lg:flex-row">
          <BsEmojiSmileFill className="fill-primary w-6 h-6 lg:w-[50px] lg:h-[50px]"></BsEmojiSmileFill>
          <div className="flex flex-col flex-shrink-0 text-white gap-y-2 lg:gap-y-4">
            <span className="mt-2 text-xl font-bold text-center lg:text-4xl lg:text-left lg:mt-0">
              500+
            </span>
            <span className="flex-shrink-0 text-base text-center lg:text-lg lg:text-left">
              Happy Cousetomer
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Achievements;
