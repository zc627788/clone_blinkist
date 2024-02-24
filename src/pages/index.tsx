import React, { useRef } from "react";
import Image from "next/image";
import Banner from "@/components/UI/Banner";
import Section from "@/components/common/Section";
import Carousel from "@/components/common/Carousel";
import Statics from "@/components/UI/Statics";
import Timeline from "@/components/common/Timeline";
import Button from "@/components/common/Button";
import Interested from "@/components/UI/Interested";
import Catalogue from "@/components/UI/Catalogue";
import { blinkist, features, interested, members } from "@/fakeData/data";

const Home = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Banner />
      <Section title={"Understand books & podcasts in 15 minutes"}>
        <div className="sm:mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, index) => (
            <section
              key={index}
              className="flex max-w-xl lg:flex-col  items-center  lg:w-72"
            >
              <Image
                src={feature.src}
                alt={feature.alt}
                width={60}
                height={60}
                className="main-feature__icon"
              />
              <div className="main-feature__content">
                <h3 className=" text-center mb-4">
                  <span className="main-feature__headline">
                    {feature.headline}
                  </span>
                </h3>
                <div className="audio-hero-content__subHeadline text-center">
                  {feature.subHeadline}
                </div>
              </div>
            </section>
          ))}
        </div>
      </Section>
      <Statics />
      <Section title={"A small investment, an incredible growth opportunity"}>
        <div className="trial-duration-explanation__subheader">
          Get access to powerful ideas from{" "}
          <mark className="trial-duration-explanation__books-and-podcasts">
            more than 6,500 nonfiction books and podcasts.
          </mark>
        </div>
        <Timeline />
        <div className="message--background-blue message mt-6 ">
          <div className="flex  py-4 px-2  justify-center trial-message__inner">
            <div className="trial-message__description ">
              Enjoy unlimited access for 7 days. Love it and keep investing in
              yourself for only{" "}
              <b>
                {" "}
                <span className="currency-symbol currency-symbol--hkd">$</span>
                58{" "}
              </b>{" "}
              a month, or{" "}
              <b>simply cancel before March 1 and you won’t ever be charged.</b>
            </div>
            <div style={{ flex: 0.7 }}>
              <Button title="Start your free trial" />
            </div>
          </div>
        </div>
      </Section>
      <Section title={"What our members say"}>
        <div className="grid  grid-flow-row  grid-cols-12 sm:gap-x-6 md:gap-x-6 lg:gap-x-8 ">
          <div className="app-reviews__user-reviews">
            {members.map(({ title, content }) => (
              <div key={title} className="bg-yellow-100 p-4 rounded mb-8">
                <div className="flex flex-col md:flex-row items-start md:items-center text-midnight font-medium mb-4 md:mb-2 text-base leading-normal">
                  {title}
                  <div className=" ml-2 flex">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <div
                        key={value}
                        className="mr-1 relative  text-blue-500 w-3 h-3"
                      >
                        <div className="relative w-full h-full">
                          <div className="absolute w-full h-full star-shaped">
                            <div
                              className="h-full "
                              style={{ width: "100%" }}
                            ></div>
                          </div>{" "}
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute w-full h-full left-0"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.2064 6.17467L2.07483 6.80601L5.06828 9.87398L4.37426 14.1285L7.99999 12.1243L11.6259 14.1286L10.9319 9.87398L13.9253 6.80603L9.7936 6.17467L8 2.35348L6.2064 6.17467ZM5.52788 5.26675L0 6.11145L4.00007 10.2111L3.05577 16L8 13.2669L12.9444 16L12.0001 10.2111L16 6.11163L10.4721 5.26675L8 0L5.52788 5.26675Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>{" "}
                        <div className="absolute -bottom-6 whitespace-nowrap transform -translate-x-1/2 left-1/2 hidden "></div>
                      </div>
                    ))}
                  </div>
                </div>
                {content}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Button title="Start your free trial" />
        </div>
      </Section>

      <Section title={"Start growing with Blinkist now"}>
        <div className="grid gap-x-8 gap-y-8 md:gap-y-2 grid-cols-1 md:grid-cols-3">
          {blinkist.map(({ icon, title, content }) => (
            <div
              key={title}
              className="flex flex-col items-center bg-blue-100 rounded-xl pt-7 pb-14 px-6"
            >
              <div className="h-12 mb-6 flex flex-col justify-center items-center">
                {icon}
              </div>
              <h2 className="mb-2 text-center headline font-bold   text-4xl">
                {title}
              </h2>
              <div className="text-dark-grey text-center">{content}</div>
            </div>
          ))}
        </div>
        <div className=" text-end text-gray-500 md:col-start-3 px-0 md:px-4 text-sm  -mt-4 md:mt-0">
          *Based on survey data from Blinkist customers
        </div>
        <div className="flex justify-center  mt-10">
          <Button title="Start your free trial" />
        </div>
      </Section>
      <Section
        bgColor="bg-slate-100 "
        ref={sectionRef}
        title={"What are you interested in?"}
      >
        <Interested dataSource={interested} />
      </Section>
      <div className="line-divider">
        <div className="line-divider__line line-divider__line--l line-divider__line--light-grey"></div>
      </div>
      <div className=" bg-slate-100  pt-12">
        <Carousel titleDetail={{ title: "Career & Success", bookNum: 554 }} />
        <Carousel
          titleDetail={{ title: "Mindfulness & Happiness", bookNum: 179 }}
        />
      </div>
      <div className="bg-slate-100">
        <div className=" pt-8 containerTop">
          <a
            className="category-explorer__view-categories"
            onClick={scrollToTop}
          >
            Scroll up to all categories
          </a>
          <div className="flex justify-center  mt-10">
            <Button title="Start your free trial" />
          </div>
        </div>
      </div>
      <Catalogue />
    </>
  );
};

export default Home;
