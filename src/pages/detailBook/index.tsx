import React from "react";
import BookSection from "./components/BookSection";
import ClubChapter from "./components/ClubChapter";
import Knowledge from "@/components/common/Knowledge";
import { blinkist, features, members } from "@/fakeData/data";
import Section from "@/components/common/Section";
import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/common/Carousel";
import Comments from "@/components/common/Comments";
import Amount from "@/components/common/Amount";
import Nonfiction from "./components/Nonfiction";
import FAQs from "./components/FAQs";
import Investment from "@/components/common/Investment";
import Catalogue from "@/components/common/Catalogue";

const index = () => {
  return (
    <>
      <div className="border-t-2">
        <BookSection />
        <ClubChapter />
        <Knowledge data={features} title={"More knowledge in less time"} />
        <section className="flex flex-col w-full mb-12 max-w-[80rem] mx-auto md:px-12 px-4">
          <h2 className="font-bold text-h35 text-xl mb-4 md:w-2/3">
            What is <span className="font-normal italic">The 5 AM Club</span>{" "}
            about?
          </h2>
          <div className="text-gray-700  text-xs md:w-2/3">
            <p>
              <em>The 5 AM Club</em> (2018) shows how embracing a revolutionary
              morning routine can deliver epic results. Through the enchanting
              story of an entrepreneur, an artist, and their eccentric
              billionaire mentor, it explains how you can use the first hour of
              your day to drive personal growth and get the most out of life.
            </p>
          </div>
        </section>
        <section className="flex flex-col w-full mb-12 max-w-[80rem] mx-auto md:px-12 px-4">
          <h2 className="font-bold text-h35 text-xl mb-4 md:w-2/3">
            <span className="font-normal italic">The 5 AM Club</span> Review
          </h2>
          <div className="text-gray-700  mb-12 md:w-2/3">
            <p>
              <em>The 5 AM Club</em> (2018) shows how embracing a revolutionary
              morning routine can deliver epic results. Through the enchanting
              story of an entrepreneur, an artist, and their eccentric
              billionaire mentor, it explains how you can use the first hour of
              your day to drive personal growth and get the most out of life.
            </p>
            <ul
              style={{
                listStylePosition: "outside",
                paddingLeft: "2rem",
                listStyle: "outside",
              }}
            >
              <li>
                <div>
                  It provides <strong>practical strategies</strong> to help us
                  reclaim our mornings and maximize our productivity.
                </div>
              </li>
              <li>
                <div>
                  <strong>
                    Combining personal anecdotes, scientific research
                  </strong>
                  , and fictional storytelling, the book presents its ideas in
                  an engaging and relatable way.
                </div>
              </li>
              <li>
                <div>
                  By emphasizing the importance of a morning routine and
                  offering actionable steps, the book keeps readers engaged and
                  motivated, ensuring that it is definitely not boring.
                </div>
              </li>
            </ul>
          </div>
        </section>
        <Section title="Best quote from The 5 AM Club">
          <div className="pt-8 md:py-8 max-w-4xl mx-auto">
            <div
              className="rounded-2xl px-4 md:px-6 py-8 md:mx-44 relative"
              style={{ backgroundColor: "#feceb4" }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 text-midnight absolute opacity-50    -left-0.5 w-18 -top-10 md:w-36 md:-top-12 md:-left-44  md:opacity-100"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.005 4.907c-3.707 1.027-6.12 3.173-6.72 6.907-.163 1.016.065.249.755-.267 2.254-1.683 6.686-1.087 7.3 2.757 1.238 6.807-7.29 7.985-9.814 4.226A6.912 6.912 0 01.41 15.516c-.608-4.871 1.894-9.21 6.288-11.248.813-.377 1.67-.672 2.592-.889.462-.093.797.158.952.582.131.362.176.761-.237.946zm12.217 0c-3.707 1.027-6.12 3.173-6.72 6.907-.163 1.016.066.249.756-.267 2.254-1.683 6.685-1.087 7.3 2.757 1.238 6.807-7.29 7.985-9.814 4.226a6.913 6.913 0 01-1.116-3.014c-.608-4.871 1.893-9.21 6.288-11.248.813-.377 1.67-.672 2.592-.889.462-.093.797.158.952.582.13.362.175.761-.238.946z"
                  fill="#03314B"
                ></path>
              </svg>
              <div className="md:flex md:justify-between">
                <div className="md:flex md:flex-col">
                  <div className="font-tisa-pro text-midnight font-semibold text-xl md:text-h3">
                    <em>
                      <p>
                        <em>
                          5am is the time of least distraction, highest human
                          glory and greatest peace.
                        </em>
                      </p>
                    </em>
                  </div>
                  <div className="font-medium text-base uppercase text-dark-grey text-caption mt-4">
                    —Robin Sharma{" "}
                  </div>
                </div>
                <Image
                  src="https://images.blinkist.io/images/books/5c43b2fa6cee07000701bf7a/1_1/470.jpg"
                  width={500}
                  height={300}
                  alt="example alt text"
                  className="object-contain w-20 md:w-28 h-20 md:h-28 mt-4 md:mt-0 md:ml-4"
                />
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className=" w-8 rotate-180 text-dark-grey opacity-50 absolute right-4  bottom-8 md:w-36 md:text-midnight md:opacity-100 md:-bottom-12 md:-right-44"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.005 4.907c-3.707 1.027-6.12 3.173-6.72 6.907-.163 1.016.065.249.755-.267 2.254-1.683 6.686-1.087 7.3 2.757 1.238 6.807-7.29 7.985-9.814 4.226A6.912 6.912 0 01.41 15.516c-.608-4.871 1.894-9.21 6.288-11.248.813-.377 1.67-.672 2.592-.889.462-.093.797.158.952.582.131.362.176.761-.237.946zm12.217 0c-3.707 1.027-6.12 3.173-6.72 6.907-.163 1.016.066.249.756-.267 2.254-1.683 6.685-1.087 7.3 2.757 1.238 6.807-7.29 7.985-9.814 4.226a6.913 6.913 0 01-1.116-3.014c-.608-4.871 1.893-9.21 6.288-11.248.813-.377 1.67-.672 2.592-.889.462-.093.797.158.952.582.13.362.175.761-.238.946z"
                    fill="#03314B"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </Section>
        <section className="flex flex-col w-full mb-12 max-w-[80rem] mx-auto md:px-12 px-4">
          <h2 className="font-bold text-h35 text-xl mb-4 md:w-2/3">
            Who should read{" "}
            <span className="font-normal italic">The 5 AM Club</span>?
          </h2>
          <div className="text-gray-700  mb-12 md:w-2/3">
            <ul
              style={{
                listStylePosition: "outside",
                paddingLeft: "2rem",
                listStyle: "outside",
              }}
            >
              <li>
                <div>
                  Those who feel they could try and get more out of the day
                </div>
              </li>
              <li>
                <div>People who want to achieve great things in life</div>
              </li>
              <li>
                <div>
                  Anyone in need of an energizing and positive morning routine
                </div>
              </li>
            </ul>
            <button className="flex  cursor-pointer text-blue-500 mt-4 hover:text-black">
              <svg fill="none" className="mr-2 w-6 h-6">
                <path
                  d="M22.5 16.14L23.92 6l-18.8-.81L4.92 4A4.43 4.43 0 002.51.8L.58 0 0 1.39l1.88.78a2.88 2.88 0 011.56 2.11l2.5 14.86a2.54 2.54 0 103.57 3h5.93a2.54 2.54 0 100-1.5H9.52a2.53 2.53 0 00-2.1-1.79l-.31-1.83 15.39-.88zm-4.65 4.21a1 1 0 11-.1 1.997 1 1 0 01.1-1.997zm4.36-12.92l-1 7.29-14.33.84-1.51-8.85 16.84.72zM8.14 21.4a1 1 0 11-2 0 1 1 0 012 0z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="font-bold"> Buy on Amazon </span>
            </button>
          </div>
        </section>
        <section className="flex flex-col w-full mb-12 max-w-[80rem] mx-auto md:px-12 px-4">
          <h2 className="font-bold text-h35 text-xl mb-4 md:w-2/3">
            About the Author
          </h2>
          <div className="text-gray-700  text-xs md:w-2/3">
            <p>
              <em>The 5 AM Club</em> (2018) shows how embracing a revolutionary
              morning routine can deliver epic results. Through the enchanting
              story of an entrepreneur, an artist, and their eccentric
              billionaire mentor, it explains how you can use the first hour of
              your day to drive personal growth and get the most out of life.
            </p>
          </div>
        </section>
        <section className="flex flex-col w-full mb-12 max-w-[80rem] mx-auto md:px-12 px-4">
          <h2 className="font-bold text-h35 text-xl mb-4 md:w-2/3">
            Categories with{" "}
            <span className="font-normal italic">The 5 AM Club</span>
          </h2>
          <div className="w-full overflow-hidden">
            <div className=" pb-8 mb-8 overflow-x-auto overflow-y-hidden flex flex-col">
              <div className="flex flex-row md:flex-wrap px-4 lg:px-0 gap-x-4 gap-y-2 mb-4">
                <Link
                  href="#"
                  className="font-cera-pro text-midnight flex w-max items-center py-3 border-2 border-solid rounded last:mr-4 px-4 cursor-pointer md:hover:border-green-500 border-white bg-gray-100"
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    className=" w-6 h-6 mr-2 text-midnight flex-shrink-0  "
                  >
                    <clipPath id="a">
                      <path d="M0 0h24v24H0z"></path>
                    </clipPath>
                    <g clip-path="url(#a)">
                      <path
                        d="M22.15 1.5h2V0H.08v1.5h2c.39 5.25 4.81 8.7 6.75 10.2a.45.45 0 010 .72c-1.94 1.5-6.36 5-6.75 10.2H0v1.5h24.12v-1.5h-2c-.34-4.61-3.77-7.85-6.39-9.91a.82.82 0 010-1.3c2.65-2.06 6.08-5.3 6.42-9.91zM9.59 10.36l-.41-.3C8.6 9.59 8 9.08 7.45 8.54h9.34c-.29.28-.58.54-.87.8a13.44 13.44 0 00-3.77 3.35 11.302 11.302 0 00-2.56-2.33zM20.65 1.5A10.19 10.19 0 0118.19 7H6.05a10.08 10.08 0 01-2.47-5.5zM10.06 22.62a7.219 7.219 0 002.06-2.5 7.31 7.31 0 002.05 2.5zm10.59 0h-2.11a5.68 5.68 0 01-5.67-5.68h-1.5a5.69 5.69 0 01-5.68 5.68H3.58c.35-4 3.46-6.9 6.19-9a1.92 1.92 0 00.56-.71 2.68 2.68 0 011 1.89h1.5a3.58 3.58 0 011.19-2c.13.452.4.851.77 1.14 2.41 1.81 5.51 4.7 5.86 8.68z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                  <span className="block whitespace-nowrap">Productivity</span>
                </Link>
                <Link
                  href="#"
                  className="text-midnight flex w-max items-center py-3 border-2 border-solid rounded last:mr-4 px-4 cursor-pointer md:hover:border-green-500 border-white bg-gray-100"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className=" w-6 h-6 mr-2 text-midnight flex-shrink-0  "
                  >
                    <path
                      d="M22.3 4.2l-2.8-.4-.4-2.8-3 3c-1.5-.9-3.3-1.5-5.2-1.5C5.4 2.5 1 7 1 12.4c0 5.5 4.4 9.9 9.9 9.9s9.9-4.4 9.9-9.9c0-1.9-.5-3.7-1.5-5.2zm-5.6.9l.4-.4 1.2-1.2.2 1.4 1.4.1-1.2 1.2-.4.4-.1.1-.6-.1-.8-.1-.1-.8-.1-.6zm2.9 7.3c0 4.8-3.9 8.7-8.7 8.7s-8.7-3.9-8.7-8.7 3.9-8.7 8.7-8.7c1.6 0 3.1.4 4.4 1.2l.3 2-.4.4c-1.2-1-2.6-1.5-4.3-1.5a6.7 6.7 0 106.7 6.7c0-1.6-.6-3.1-1.6-4.3l.4-.4 2.1.3c.7 1.2 1.1 2.7 1.1 4.3zm-8.4.5l1.6-1.6c.2.3.3.7.3 1.1 0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2 1-2.2 2.2-2.2c.4 0 .8.1 1.1.3l-1.6 1.6zm1.6-3.3c-.5-.3-1.2-.6-1.9-.6-1.9 0-3.4 1.6-3.4 3.4 0 1.9 1.5 3.4 3.4 3.4s3.4-1.5 3.4-3.4c0-.7-.2-1.4-.6-2L15.2 9c.8.9 1.2 2.1 1.2 3.5 0 3-2.5 5.5-5.5 5.5s-5.5-2.5-5.5-5.5S7.9 7 10.9 7c1.3 0 2.5.5 3.4 1.2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="block whitespace-nowrap">
                    Career &amp; Success
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className=" bg-slate-800 w-full py-12 mb-12 m:mb-16">
          <section className="flex flex-col w-full mb-12 max-w-[80rem] mx-auto md:px-12 px-4 ">
            <h2 className="font-bold text-h35 text-xl mb-8 md:w-2/3  text-white ">
              Book summaries like{" "}
              <span className="font-normal italic">The 5 AM Club</span>
            </h2>
            <Carousel
              titleDetail={{ title: "Career & Success", bookNum: 554 }}
              notTitle
              fontColor={"!text-white "}
            />
          </section>
        </div>
        <Comments title=" People ❤️ Blinkist  " data={members} />
        <div className=" bg-slate-800 w-full py-12 mb-12 m:mb-16">
          <section className="flex flex-col w-full mb-12 max-w-[80rem] mx-auto md:px-12 px-4 ">
            <h2 className="font-bold text-h35 text-xl mb-8 md:w-2/3  text-white ">
              People also liked these summaries
            </h2>
            <Carousel
              titleDetail={{ title: "Mindfulness & Happiness", bookNum: 554 }}
              notTitle
              fontColor={"!text-white "}
            />
          </section>
        </div>
        <Amount data={blinkist} />
        <Nonfiction />
        <FAQs />
        <Investment />
        <Catalogue title={"Featured Titles"} />
      </div>
    </>
  );
};

export default index;
