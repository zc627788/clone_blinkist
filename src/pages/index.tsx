import React from "react";
import Image from "next/image";
import Banner from "@/components/Banner";
import Section from "@/components/Section";
import Content from "@/components/Content";
import Carousel from "@/components/Carousel";
import Understandbook from "@/components/Understandbook";
import Statics from "@/components/Statics";
import Timeline from "@/components/common/Timeline";
import Button from "@/components/common/Button";
const features = [
  {
    src: "images/bulb.svg",
    alt: "Read or listen",
    headline: "Read or listen",
    subheadline:
      "Get the key ideas from nonfiction bestsellers in minutes, not hours.",
  },
  {
    src: "images/headphones.svg",
    alt: "Find your next read",
    headline: "Find your next read",
    subheadline:
      "Get book lists curated by experts and personalized recommendations.",
  },
  {
    src: "images/mic.svg",
    alt: "Shortcasts",
    headline: "Shortcasts",
    subheadline:
      "We’ve teamed up with podcast creators to bring you key insights from podcasts.",
  },
];

const members = [
  {
    title: "Sven O.",
    content: (
      <span className="text-dark-grey text-base leading-normal">
        <strong>Life changing.</strong> The concept of being able to grasp a
        book's main point in such a short time truly opens multiple
        opportunities to grow every area of your life at a faster rate.
      </span>
    ),
  },
  {
    title: "Sven O.",
    content: (
      <span className="text-dark-grey text-base leading-normal">
        <strong>Life changing.</strong> The concept of being able to grasp a
        book's main point in such a short time truly opens multiple
        opportunities to grow every area of your life at a faster rate.
      </span>
    ),
  },
  {
    title: "Thi Viet Quynh N.",
    content: (
      <span className="text-dark-grey text-base leading-normal">
        <strong>Life changing.</strong> The concept of being able to grasp a
        book's main point in such a short time truly opens multiple
        opportunities to grow every area of your life at a faster rate.
      </span>
    ),
  },
  {
    title: "Jonathan A.",
    content: (
      <span className="text-dark-grey text-base leading-normal">
        <strong>Life changing.</strong> The concept of being able to grasp a
        book's main point in such a short time truly opens multiple
        opportunities to grow every area of your life at a faster rate.
      </span>
    ),
  },
  {
    title: "Renee D.",
    content: (
      <span className="text-dark-grey text-base leading-normal">
        <strong>Life changing.</strong> The concept of being able to grasp a
        book's main point in such a short time truly opens multiple
        opportunities to grow every area of your life at a faster rate.
      </span>
    ),
  },
];

const blinkist = [
  {
    icon: (
      <svg
        viewBox="0 0 48 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 text-blue-500"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M48 10.0457C48 7.65094 46.0392 5.70269 43.6289 5.70269C41.2187 5.70269 39.2579 7.65094 39.2579 10.0457C39.2579 10.8168 39.4826 11.5271 39.8298 12.1563L33.9677 16.4587L27.3906 9.23389C28.6162 8.28006 29.4128 6.81887 29.4128 5.17504C29.4128 2.31355 27.0843 0 24.2043 0C21.3243 0 18.9957 2.31355 18.9957 5.17504C18.9957 6.83917 19.8128 8.32065 21.0383 9.27448L14.6655 16.4587L8.39489 11.8519C8.64 11.3039 8.8034 10.6951 8.8034 10.0457C8.8034 7.65094 6.84255 5.70269 4.43234 5.70269C2.02213 5.70269 0 7.65094 0 10.0457C0 12.4404 1.96085 14.3886 4.37106 14.3886C4.47319 14.3886 4.55489 14.3683 4.65702 14.3683L8.23149 31.8011C6.14809 32.0244 4.51404 33.7494 4.51404 35.8803C4.51404 38.1532 6.37277 40 8.66043 40H39.9319C42.2196 40 44.0783 38.1532 44.0783 35.8803C44.0783 33.7291 42.4238 32.0041 40.32 31.8011L43.6494 14.3886C46.0392 14.3683 47.9796 12.4201 47.9796 10.0457L48 10.0457ZM43.6289 8.74683C44.3438 8.74683 44.9362 9.33536 44.9362 10.0457C44.9362 10.756 44.3438 11.3445 43.6289 11.3445C42.914 11.3445 42.3217 10.756 42.3217 10.0457C42.3217 9.33536 42.914 8.74683 43.6289 8.74683ZM24.1838 3.04414C25.3685 3.04414 26.3285 3.99797 26.3285 5.17504C26.3285 6.35211 25.3685 7.30594 24.1838 7.30594C22.9991 7.30594 22.0391 6.35211 22.0391 5.17504C22.0391 3.99797 22.9991 3.04414 24.1838 3.04414ZM15.074 20.5581L24.143 10.3501H24.1838C24.1838 10.3501 24.2247 10.3501 24.2655 10.3501L33.5592 20.5378L40.3404 15.5657L37.2357 31.7605L11.3566 31.7605L7.98638 15.3628L15.074 20.5581ZM3.06383 10.0457C3.06383 9.33536 3.65617 8.74683 4.37106 8.74683C5.08596 8.74683 5.6783 9.33536 5.6783 10.0457C5.6783 10.756 5.08596 11.3445 4.37106 11.3445C3.65617 11.3445 3.06383 10.756 3.06383 10.0457ZM41.0349 35.8803C41.0349 36.4688 40.5447 36.9559 39.9523 36.9559H8.66043C8.06808 36.9559 7.57787 36.4688 7.57787 35.8803C7.57787 35.2917 8.06808 34.8047 8.66043 34.8047H39.9319C40.5243 34.8047 41.0145 35.2917 41.0145 35.8803H41.0349Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    title: "30 Million",
    content: "Downloads on all platforms",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 text-blue-500"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M48 10.0457C48 7.65094 46.0392 5.70269 43.6289 5.70269C41.2187 5.70269 39.2579 7.65094 39.2579 10.0457C39.2579 10.8168 39.4826 11.5271 39.8298 12.1563L33.9677 16.4587L27.3906 9.23389C28.6162 8.28006 29.4128 6.81887 29.4128 5.17504C29.4128 2.31355 27.0843 0 24.2043 0C21.3243 0 18.9957 2.31355 18.9957 5.17504C18.9957 6.83917 19.8128 8.32065 21.0383 9.27448L14.6655 16.4587L8.39489 11.8519C8.64 11.3039 8.8034 10.6951 8.8034 10.0457C8.8034 7.65094 6.84255 5.70269 4.43234 5.70269C2.02213 5.70269 0 7.65094 0 10.0457C0 12.4404 1.96085 14.3886 4.37106 14.3886C4.47319 14.3886 4.55489 14.3683 4.65702 14.3683L8.23149 31.8011C6.14809 32.0244 4.51404 33.7494 4.51404 35.8803C4.51404 38.1532 6.37277 40 8.66043 40H39.9319C42.2196 40 44.0783 38.1532 44.0783 35.8803C44.0783 33.7291 42.4238 32.0041 40.32 31.8011L43.6494 14.3886C46.0392 14.3683 47.9796 12.4201 47.9796 10.0457L48 10.0457ZM43.6289 8.74683C44.3438 8.74683 44.9362 9.33536 44.9362 10.0457C44.9362 10.756 44.3438 11.3445 43.6289 11.3445C42.914 11.3445 42.3217 10.756 42.3217 10.0457C42.3217 9.33536 42.914 8.74683 43.6289 8.74683ZM24.1838 3.04414C25.3685 3.04414 26.3285 3.99797 26.3285 5.17504C26.3285 6.35211 25.3685 7.30594 24.1838 7.30594C22.9991 7.30594 22.0391 6.35211 22.0391 5.17504C22.0391 3.99797 22.9991 3.04414 24.1838 3.04414ZM15.074 20.5581L24.143 10.3501H24.1838C24.1838 10.3501 24.2247 10.3501 24.2655 10.3501L33.5592 20.5378L40.3404 15.5657L37.2357 31.7605L11.3566 31.7605L7.98638 15.3628L15.074 20.5581ZM3.06383 10.0457C3.06383 9.33536 3.65617 8.74683 4.37106 8.74683C5.08596 8.74683 5.6783 9.33536 5.6783 10.0457C5.6783 10.756 5.08596 11.3445 4.37106 11.3445C3.65617 11.3445 3.06383 10.756 3.06383 10.0457ZM41.0349 35.8803C41.0349 36.4688 40.5447 36.9559 39.9523 36.9559H8.66043C8.06808 36.9559 7.57787 36.4688 7.57787 35.8803C7.57787 35.2917 8.06808 34.8047 8.66043 34.8047H39.9319C40.5243 34.8047 41.0145 35.2917 41.0145 35.8803H41.0349Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    title: "4.7 Stars",
    content: "Average ratings on iOS and Google Play",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 text-blue"
      >
        <path
          d="M25.88 35.2C25.6457 33.689 25.6457 32.151 25.88 30.64C28.0389 30.5358 30.1435 29.9281 32.0257 28.8654C33.9079 27.8028 35.5155 26.3147 36.72 24.52C38.1575 22.2072 39.1005 19.6218 39.4894 16.9266C39.8784 14.2314 39.7049 11.4849 38.98 8.86C38.3382 6.0944 37.3363 3.42496 36 0.92L35.58 0L34.54 0.16C29.3249 1.16362 24.6142 3.93208 21.2 8C17.6135 6.54688 13.7373 5.95107 9.88 6.26L8.76 6.38L8.56 7.5C8.56 7.92 6.72 17.86 9.92 23.1C11.3015 25.4819 13.4958 27.2856 16.1 28.18C17.0995 28.5157 18.1457 28.6912 19.2 28.7C19.8755 28.688 20.5471 28.594 21.2 28.42C21.704 28.983 22.2525 29.5047 22.84 29.98C22.5975 31.7182 22.5975 33.4818 22.84 35.22C18.5007 35.3733 14.2381 36.4081 10.3115 38.2614C6.38491 40.1146 2.87656 42.7476 0 46L2.26 48C4.97247 44.9031 8.31528 42.4215 12.0646 40.7213C15.8139 39.0211 19.8832 38.1416 24 38.1416C28.1168 38.1416 32.1861 39.0211 35.9354 40.7213C39.6847 42.4215 43.0275 44.9031 45.74 48L48 46C45.2085 42.8287 41.8166 40.2416 38.02 38.388C34.2235 36.5343 30.0974 35.4508 25.88 35.2ZM12.48 21.5C10.48 18.4 10.9 12.34 11.32 9.16C14.1431 9.05607 16.9585 9.51849 19.6 10.52C18.2701 13.1408 17.5845 16.0411 17.6 18.98C17.575 21.3118 18.1464 23.6112 19.26 25.66C17.8652 25.6181 16.5057 25.2121 15.3163 24.4824C14.127 23.7526 13.1492 22.7245 12.48 21.5ZM20.64 18.98C20.64 7.52 30.64 4.14 33.92 3.34C35.32 6.38 38.94 15.86 34.18 22.82C33.3142 24.1553 32.1573 25.2773 30.796 26.1016C29.4348 26.926 27.9045 27.4315 26.32 27.58C27.4229 22.8873 29.0463 18.3324 31.16 14L28.44 12.74C26.3284 17.1254 24.673 21.7162 23.5 26.44C21.6368 24.4049 20.6148 21.739 20.64 18.98Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    title: "91%",
    content: "Of Blinkist members create a better reading habit*",
  },
];
const Home = () => (
  <>
    <Banner />
    <Section title={"Understand books & podcasts in 15 minutes"}>
      <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {features.map((feature, index) => (
          <section
            key={index}
            className="flex max-w-xl flex-col items-center  w-72"
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
              <div className="audio-hero-content__subheadline text-center">
                {feature.subheadline}
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
        <div className="flex  py-4 px-24  justify-center trial-message__inner">
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
      <div className="flex justify-center">
        <Button title="Start your free trial" />
      </div>
    </Section>
    <Content>More additional content here.</Content>
    <div className="bg-pale-mint">
      <Carousel items={["Slide 1", "Slide 2", "Slide 3"]} />
    </div>
    <Content>Final content before the footer.</Content>
  </>
);

export default Home;
