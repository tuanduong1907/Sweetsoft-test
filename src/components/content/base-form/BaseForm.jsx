import React from "react";

const BaseForm = ({ className, image, name, title, content, children }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        className && "flexDicoration"
      } items-center justify-between wrapper pb-[80px] lg:pb-[145px] gap-x-32 mt-10 lg:mt-0`}
    >
      <div className="w-full sm:w-[45%] h-full rounded-xl overflow-hidden shadow-xl mb-5 lg:mb-0">
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full select-none"
        />
      </div>
      <div className="flex flex-col flex-1 ">
        <div className="flex items-center self-center justify-center lg:self-start gap-x-2">
          <div className="w-8 h-2 rounded-full bg-primary"></div>
          <div className="w-4 h-2 rounded-full bg-primary"></div>
          <div className="w-2 h-2 rounded-full bg-primary"></div>
        </div>
        <h4 className="text-lg font-semibold text-center capitalize text-gray-text mt-7 lg:text-left">
          {name || "About"}
        </h4>
        <h2 className="text-4xl font-bold uppercase text-primary-text lg:pr-[80px] mt-9 leading-normal text-center lg:text-left">
          {title || "we are dynamic team and business agency"}
        </h2>
        <p className="mb-8 text-gray-text mt-[50px] text-center lg:text-left">
          {content ||
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam fuga blanditiis suscipit esse qui voluptas neque provident illo enim ex quaerat cum, nihil nobis, debitis, tempore ducimus placeat animi sit."}
        </p>
        {children}
      </div>
    </div>
  );
};

export default BaseForm;
