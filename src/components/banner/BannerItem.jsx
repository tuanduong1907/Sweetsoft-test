import React from "react";

const BannerItem = () => {
  return (
    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1526040652367-ac003a0475fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-no-repeat bg-cover">
      <div className="wrapper pt-[167PX] mt-[80px] sm:mt-0">
        <div className="w-full lg:w-2/4 ">
          <div className="font-bold text-primary-text mb-[46px] text-center lg:text-left">
            <h3 className="text-2xl">WE ARE HERE TO</h3>
            <h1 className="mt-8 text-3xl lg:text-6xl">PLANNING BUSINESS</h1>
          </div>
          <p className="text-center text-gray-text lg:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            minus doloribus nihil voluptate obcaecati non in velit eveniet harum
            quis alias nam nostrum deleniti
          </p>
          <button className="block mx-auto lg:inline-block  btn btn--border text-primary-text mt-[50px] hover:border-primary hover:text-primary transition-all">
            MORE DETAILS
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
