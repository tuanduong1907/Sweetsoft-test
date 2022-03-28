import React, { useEffect, useRef, useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { GrMenu } from "react-icons/gr";

const HeaderNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-lg sm:static h-20 sm:h-[110px] flex items-center justify-center sm:transition-all ${
        showNav && "sm:fixed"
      }`}
      ref={menuRef}
    >
      <div className="flex items-center justify-between wrapper sm:mx-4">
        <a href="/#" className="flex items-center select-none">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt=""
            className="h-[64px]"
          />
          <span className="text-3xl font-semibold">Bexar</span>
        </a>
        <ul
          className={` p-8 sm:hidden lg:p-0 shadow-lg lg:shadow-none transition-all fixed top-0 bottom-0 right-0 w-[250px] sm:w-auto block lg:flex items-center ml-auto sm:static gap-x-7 flex-col sm:flex-row z-50 bg-white sm:bg-transparent ${
            showMenu ? "translate-x-0" : "translate-x-full"
          } sm:translate-x-0`}
        >
          <li className="mb-5 text-lg font-semibold uppercase lg:mb-0">
            <a href="/#" className="flex items-center justify-end gap-x-2">
              Home <BsCaretDownFill className="text-sm"></BsCaretDownFill>
            </a>
          </li>
          <li className="mb-3 text-lg font-semibold uppercase lg:mb-0">
            <a href="/#" className="flex items-center justify-end gap-x-2">
              About Us <BsCaretDownFill className="text-sm"></BsCaretDownFill>
            </a>
          </li>
          <li className="mb-3 text-lg font-semibold uppercase lg:mb-0">
            <a href="/#" className="flex items-center justify-end gap-x-2">
              Blog <BsCaretDownFill className="text-sm"></BsCaretDownFill>
            </a>
          </li>
          <li className="mb-3 text-lg font-semibold uppercase lg:mb-0">
            <a href="/#" className="flex items-center justify-end gap-x-2">
              Contact
            </a>
          </li>
          <li className="mb-3 text-lg font-semibold uppercase lg:mb-0">
            <a href="/#" className="flex items-center justify-end gap-x-2">
              Page <BsCaretDownFill className="text-sm"></BsCaretDownFill>
            </a>
          </li>
          <li className="mb-3 text-lg font-semibold uppercase lg:mb-0">
            <a href="/#" className="flex items-center justify-end gap-x-2">
              Shorode <BsCaretDownFill className="text-sm"></BsCaretDownFill>
            </a>
          </li>
        </ul>
        <div className="items-center hidden sm:flex gap-x-6 ml-11">
          <BiSearch className="text-2xl cursor-pointer"></BiSearch>
          <button className="btn btn--primary">get started</button>
        </div>
      </div>
      <div
        onClick={() => setShowMenu(!showMenu)}
        className="relative right-3 sm:hidden"
      >
        <GrMenu className="text-3xl"></GrMenu>
      </div>
    </div>
  );
};

export default HeaderNav;
