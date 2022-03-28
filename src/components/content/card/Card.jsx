import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { MdColorLens } from "react-icons/md";
const Card = () => {
  return (
    <div className="wrapper">
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[30px] left-2/4 -translate-x-2/4 top-0 gap-y-3 lg:-top-[100px] z-20 sm:mt-8 lg:mt-0 sm:px-6 lg:px-0">
        <div className="flex flex-col items-center justify-center p-8 bg-primary-text shadow-lg h-full min-h-[335px] ">
          <div className="mb-7 w-[100px] h-[100px] rounded-full border-4 border-primary flex justify-center items-center bg-primary bg-opacity-60 shadow-lg">
            <svg
              stroke="#ffff"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-[44px] "
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                d="M6,3 L18,3 L22,9 L12,21 L2,9 L6,3 Z M2,9 L22,9 M11,3 L7,9 L12,20 M13,3 L17,9 L12,20"
              ></path>
            </svg>
          </div>
          <h3 className="mb-8 text-lg font-bold text-white">
            BUSINESS SOLUTION
          </h3>
          <p className="text-center text-gray-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius hic
            perferendis
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-8 bg-white shadow-lg h-full min-h-[335px] ">
          <div className="mb-7 w-[100px] h-[100px] rounded-full border-4 border-primary flex justify-center items-center bg-primary bg-opacity-60 shadow-lg">
            <svg
              stroke="#86c33a"
              fill="#86c33a"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="text-4xl"
            >
              <path d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path>
            </svg>
          </div>
          <h3 className="mb-8 text-lg font-bold">BUSINESS SOLUTION</h3>
          <p className="text-center text-gray-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius hic
            perferendis
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-8 bg-white shadow-lg h-full min-h-[335px] ">
          <div className="mb-7 w-[100px] h-[100px] rounded-full border-4 border-primary flex justify-center items-center bg-primary bg-opacity-60 shadow-lg">
            <FaRegLightbulb className="text-4xl fill-primary"></FaRegLightbulb>
          </div>
          <h3 className="mb-8 text-lg font-bold">BUSINESS SOLUTION</h3>
          <p className="text-center text-gray-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius hic
            perferendis
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-8 bg-white shadow-lg h-full min-h-[335px] ">
          <div className="mb-7 w-[100px] h-[100px] rounded-full border-4 border-primary flex justify-center items-center bg-primary bg-opacity-60 shadow-lg">
            <MdColorLens className="text-5xl fill-primary"></MdColorLens>
          </div>
          <h3 className="mb-8 text-lg font-bold">BUSINESS SOLUTION</h3>
          <p className="text-center text-gray-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius hic
            perferendis
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
