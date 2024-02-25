import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navigation from "./Navigation";
import { useMyContext } from "@/contexts/CustomContext";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const { setValue, value } = useMyContext();

  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!value && window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [value]);

  let arrowIcon = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z"
      fill="currentColor"
    ></path>
  );
  if (clicked) {
    arrowIcon = (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 9.121l7.94 7.94a1.5 1.5 0 112.12-2.122l-9-9a1.5 1.5 0 01-2.12 0l-9 9a1.5 1.5 0 112.12 2.122L12 9.121z"
        fill="currentColor"
      ></path>
    );
  }
  const handleToggle = () => {
    setClicked(!clicked);
  };

  return (
    <div
      ref={headerRef}
      className={`bg-white sm:px-5 pt-4 pb-4 top-0 z-50 h-16 ${
        isSticky ? "sticky" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto flex justify-between  items-center  ">
        <button
          onClick={() => setValue(true)}
          aria-label="Open menu"
          className="p-3 mr-3 lg:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-midnight"
          >
            <path
              d="M0 3h24v1.8H0V3zM0 11.1h24v1.8H0v-1.8zM0 19.2h24V21H0v-1.8z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <div className="flex-grow-1" style={{ flex: 1 }}>
          <Link href="/en/">logo</Link>
        </div>
        <div className="flex justify-between items-center" style={{ flex: 11 }}>
          <button
            data-test-id="toggle-categories-menu-button"
            className="category flex items-center cursor-pointer font-medium  hover:text-indigo-500 focus:text-indigo-500 active:text-indigo-500"
            onClick={handleToggle}
          >
            Categories
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 ml-2 mt-1"
            >
              {arrowIcon}
            </svg>
          </button>
          {clicked && <Navigation />}
          <div className="flex items-center w-64 justify-between">
            <Link
              href="#"
              className="text-base leading-6 font-medium  hover:text-indigo-500 focus:outline-none focus:text-indigo-500 transition ease-in-out duration-150"
            >
              <span>Coaching</span>
            </Link>
            <Link
              href="#"
              className="text-base leading-6 font-medium  hover:text-indigo-500 focus:outline-none focus:text-indigo-500 transition ease-in-out duration-150"
            >
              <span>For business</span>
            </Link>
            <Link
              href="#"
              className="text-base leading-6 font-medium  hover:text-indigo-500 focus:outline-none focus:text-indigo-500 transition ease-in-out duration-150"
            >
              <span>Log in</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
