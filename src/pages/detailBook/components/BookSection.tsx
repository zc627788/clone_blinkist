import Button from "@/components/common/Button";
import { links, summary } from "@/fakeData/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface SummaryProp {
  items: {
    id: number;
    title: string;
    link: string;
  }[];
}
const NavigationLinks = () => {
  return (
    <div className="hidden md:flex text-blue-500">
      {links.map((link, index) => (
        <div key={index} className="flex items-center">
          <a
            href={link.url}
            className="cursor-pointer text-blue hover:text-blue-100"
          >
            {link.title}
          </a>
          {index < links.length - 1 && (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-2.5 h-2.5 mx-1.5 -rotate-90"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z"
                fill="currentColor"
              ></path>
              <mask
                id="a"
                maskUnits="userSpaceOnUse"
                x="1"
                y="6"
                width="22"
                height="13"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z"
                  fill="#fff"
                ></path>
              </mask>
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

const SummaryOfContents = ({ items }: SummaryProp) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSummary = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-8 mb:mb-0">
      <summary
        onClick={toggleSummary}
        className="flex items-center  font-bold text-sm cursor-pointer"
      >
        Table of Contents
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={`transform ${isOpen ? "" : "rotate-180"} w-6 h-6 p-1.5`}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z"
            fill="currentColor"
          ></path>
          <mask
            id="a"
            maskUnits="userSpaceOnUse"
            x="1"
            y="6"
            width="22"
            height="13"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z"
              fill="#fff"
            ></path>
          </mask>
        </svg>
      </summary>
      {isOpen && (
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              className={`${
                index === 0 ? "first:mt-4" : ""
              } mb-4 last:mb-0  text-gray-800 font-medium text-sm`}
            >
              <Link href={item.link} className="underline">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const BookSection = () => {
  return (
    <div className="relative">
      <div
        className="w-full h-72 absolute md:hidden"
        style={{ backgroundColor: "#feceb4" }}
      ></div>
      <section className="flex flex-col pt-6 lg:pt-16 relative  w-full max-w-[80rem] mx-auto md:px-12 px-4 ">
        <div className="flex justify-between">
          <div className="text-sm mb-6">
            <div className="flex md:hidden items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-2.5 h-2.5 mr-1.5 rotate-90"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z"
                  fill="currentColor"
                ></path>
                <mask
                  id="a"
                  maskUnits="userSpaceOnUse"
                  x="1"
                  y="6"
                  width="22"
                  height="13"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z"
                    fill="#fff"
                  ></path>
                </mask>
              </svg>
              <a
                data-test-id="b-link"
                href="/en/content/categories/productivity-and-time-management-en"
                className=" cursor-pointer text-midnight"
              >
                Productivity
              </a>
            </div>
            <NavigationLinks />
          </div>

          <div className="contents">
            <button className="self-start">
              <svg
                viewBox="0 0 18 24"
                fill="none"
                className="w-6 h-6   text-gray-700 cursor-pointer"
              >
                <path
                  d="M8 2.87v12.38h1.5V2.87l2.22 2.22 1.06-1.06L8.75 0 4.72 4.03l1.06 1.06L8 2.87z"
                  fill="currentColor"
                ></path>
                <path
                  d="M11.75 6.5V8H16v14.5H1.5V8h4.25V6.5H0V24h17.5V6.5h-5.75z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-16 pb-12 md:pb-16">
          <div
            className="w-full h-full md:w-72 shrink-0 md:order-1 rounded-md"
            style={{ backgroundColor: "#feceb4" }}
          >
            <Image
              className="object-contain w-[11.5rem] md:w-[16.5rem] aspect-square mx-auto md:my-8"
              width={300}
              height={400}
              src="https://images.blinkist.io/images/books/5c43b2fa6cee07000701bf7a/1_1/470.jpg"
              alt={""}
            />
            <div className="p-2 md:p-4  bg-slate-800 rounded-md md:rounded-t-none w-full">
              <div className="flex flex-row gap-4 items-center text-white">
                <button className="text-white hover:text-green">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12"
                  >
                    <path
                      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.563 12.577l-3.896 2.25-3.897 2.25a.667.667 0 01-1-.577v-9a.667.667 0 011-.577l3.897 2.25 3.896 2.25a.666.666 0 010 1.154z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <div className="grow flex flex-col">
                  <div className="truncate font-medium text-sm text-white">
                    {" "}
                    Listen to the Intro{" "}
                  </div>
                  <div className="flex flex-row gap-4 items-center">
                    <div className="py-2 cursor-pointer w-full">
                      <div className="relative w-full h-1 rounded-full  bg-slate-500"></div>
                    </div>
                    <span data-test-id=""> 00:00 </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grow flex flex-col w-full">
            <h1 className="mb-2 text-1xl md:mb-4 flex flex-col mt-4 md:mt-0 font-bold  md:text-3xl">
              <span>The 5 AM Club</span>
              <span className=" text-gray-500 mb-2 md:mb-6 flex -order-1 font-medium  text-xs md:text-base ">
                <span>Better than</span> <span>summary</span>
              </span>
            </h1>
            <div className="mb-4 md:mb-6 font-bold  text-xs  md:text-xl">
              Robin Sharma
            </div>
            <p className="text-xs md:text-xl mb-4 md:mb-6  text-gray-500">
              Own Your Morning. Elevate Your Life.
            </p>
            <div className="md:grid  gap-x-8  grid-cols-2 w-fit mb-8">
              <div className="flex items-center">
                <div className="mr-4 relative  text-yellow-400">
                  <div className="relative w-6 h-6">icon</div>
                </div>
                <span className="text-sm"> 4.5 (9478 ratings) </span>
              </div>
              <div className="flex items-center">
                <div className="mr-4 relative  text-blue-400">
                  <div className="relative w-6 h-6">icon</div>
                </div>
                <span className="text-sm"> 22 mins </span>
              </div>
            </div>
            <div className="order-1 md:order-none md:mb-12 md:w-74 rounded">
              <Button title="Start your free trial" />
            </div>
            <div className="mb-4 md:mb-8">
              <h2 className="text-base font-bold md:text-2xl mb-4">
                Brief summary
              </h2>
              <div className=" text-base md:text-xl with-styled-ul-list with-styled-ol-list">
                <p>
                  The 5 AM Club by Robin Sharma is a self-help book that
                  highlights the importance of waking up early to increase
                  productivity and creativity. The author provides a framework
                  for creating a morning routine that promotes personal growth
                  and success.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:px-0 ">
              <div className=" mb-2 md:px-0 font-bold text-sm leading-normal">
                Topics
              </div>
              <div className="w-full overflow-hidden">
                <div className=" pb-8 mb-8 overflow-x-auto overflow-y-hidden flex flex-row md:flex-wrap lg:px-0 gap-x-4 gap-y-2">
                  <a
                    href="#"
                    className="flex w-max items-center py-3 border-2 border-solid rounded last:mr-4 px-4 cursor-pointer md:hover:border-green border-white bg-slate-100"
                  >
                    <span className="block whitespace-nowrap">Success</span>
                  </a>
                  <a
                    href="#"
                    className="flex w-max items-center py-3 border-2 border-solid rounded last:mr-4 px-4 cursor-pointer md:hover:border-green border-white bg-slate-100"
                  >
                    <span className="block whitespace-nowrap">
                      Routines &amp; Habits
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex w-max items-center py-3 border-2 border-solid rounded last:mr-4 px-4 cursor-pointer md:hover:border-green border-white   bg-slate-100"
                  >
                    <span className="block whitespace-nowrap">Leadership</span>
                  </a>
                </div>
              </div>
            </div>
            <SummaryOfContents items={summary} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookSection;
