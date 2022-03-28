import React from "react";
import { CgFacebook } from "react-icons/cg";
import { BiChevronRight } from "react-icons/bi";
import { GrTwitter, GrLinkedinOption, GrPinterest } from "react-icons/gr";
const Footer = () => {
  return (
    <section className="bg-[#252d3a] px-3">
      <div className="wrapper">
        <div className="py-10 lg:py-[154px] px-5 flex justify-center gap-x-32 pb-14 flex-col lg:flex-row">
          <div className="flex flex-col flex-1 text-center lg:text-left">
            <div className="w-[64px] h-[64px] flex gap-x-2 items-center mb-8">
              <img
                src={process.env.PUBLIC_URL + "/logo.png"}
                alt=""
                className="object-cover w-full h-full select-none"
              />
              <span className="text-4xl font-semibold text-white">Bexar</span>
            </div>
            <p className="text-white mb-14 opacity-60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              obcaecati nam veniam quasi adipisci. Quae ipsum odio tempora odit
              unde at sint quasi repellat? Nisi aliquid cupiditate officia
              recusandae laboriosam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cum obcaecati nam veniam quasi adipisci. Quae
              ipsum odio tempora odit unde at sint quasi repellat? Nisi aliquid
              cupiditate officia recusandae laboriosam. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Cum obcaecati nam veniam quasi
              adipisci. Quae ipsum odio tempora odit unde at sint quasi
              repellat? Nisi aliquid cupiditate officia recusandae laboriosam.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
              iure, tempora minima numquam magni aperiam nulla dicta ab unde
              voluptate ratione facere, ullam perferendis eveniet quidem ad
              asperiores tempore! Velit!
            </p>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex gap-x-[142px] text-white flex-col sm:flex-row">
              <div className="flex-1">
                <span className="block text-xl font-bold uppercase mb-9">
                  Services
                </span>
                <ul className="">
                  <li className="mb-7">
                    <a
                      href="/#"
                      className="flex items-center text-base transition-all opacity-60 gap-x-3 hover:text-primary"
                    >
                      <BiChevronRight className="text-lg"></BiChevronRight>
                      <span>Company History</span>
                    </a>
                  </li>
                  <li className="mb-7">
                    <a
                      href="/#"
                      className="flex items-center text-base transition-all opacity-60 gap-x-3 hover:text-primary"
                    >
                      <BiChevronRight className="text-lg"></BiChevronRight>
                      <span>About Us</span>
                    </a>
                  </li>
                  <li className="mb-7">
                    <a
                      href="/#"
                      className="flex items-center text-base transition-all opacity-60 gap-x-3 hover:text-primary"
                    >
                      <BiChevronRight className="text-lg"></BiChevronRight>
                      <span>Contact Us</span>
                    </a>
                  </li>
                  <li className="mb-7">
                    <a
                      href="/#"
                      className="flex items-center text-base transition-all opacity-60 gap-x-3 hover:text-primary"
                    >
                      <BiChevronRight className="text-lg"></BiChevronRight>
                      <span>Services</span>
                    </a>
                  </li>
                  <li className="mb-7">
                    <a
                      href="/#"
                      className="flex items-center text-base transition-all opacity-60 gap-x-3 hover:text-primary"
                    >
                      <BiChevronRight className="text-lg"></BiChevronRight>
                      <span>Privacy Policy</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <span className="block text-xl font-bold uppercase mb-9">
                  Contact Info
                </span>
                <div className="flex flex-col opacity-60 gap-y-7">
                  <p className="capitalize">
                    9567 turner trace act.466 north willie, BC C3G8A4
                  </p>
                  <p>+21 123 456 5523</p>
                  <p>info@bexar.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 flex justify-between text-white pb-10 lg:pb-[152px] gap-x-32 flex-col sm:flex-row">
          <div className="flex-1">
            <span className="block text-xl font-bold uppercase mb-9">
              follow us on
            </span>
            <ul className="flex items-center justify-center lg:justify-start gap-x-4 mt-7">
              <li>
                <a
                  href="/#"
                  className="w-[50px] h-[50px] rounded-full  border-solid border-2 border-white flex justify-center items-center hover:border-primary hover:text-primary transition-all"
                >
                  <CgFacebook className="text-2xl"></CgFacebook>
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="w-[50px] h-[50px] rounded-full  border-solid border-2 border-white flex justify-center items-center hover:border-primary hover:text-primary transition-all"
                >
                  <GrTwitter className="text-2xl"></GrTwitter>
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="w-[50px] h-[50px] rounded-full  border-solid border-2 border-white flex justify-center items-center hover:border-primary hover:text-primary transition-all"
                >
                  <GrLinkedinOption className="text-2xl"></GrLinkedinOption>
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="w-[50px] h-[50px] rounded-full  border-solid border-2 border-white flex justify-center items-center hover:border-primary hover:text-primary transition-all"
                >
                  <GrPinterest className="text-2xl"></GrPinterest>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 mt-9 sm:mt-0">
            <span className="block text-xl font-bold uppercase mb-9">
              subcribe newsletter
            </span>
            <form>
              <div className="flex w-full rounded-full h-14 bg-[#3b414d] overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full pl-8 bg-transparent"
                />
                <button className="w-[140px] bg-primary text-base font-bold uppercase hover:opacity-70 transition-all">
                  Subcribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
