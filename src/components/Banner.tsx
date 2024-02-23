import React from "react";
import Image from "next/image";
import Button from "./common/Button";

const AudioHeroBanner = () => (
  <div className="audio-hero ">
    <div className="audio-hero__container container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2  ">
        <div className="audio-hero-content audio-hero__content ">
          <h1 className="audio-hero-content__headline audio-hero-content__headline--h2-mobile text-3xl lg:text-4xl lg:mt-16 font-bold leading-tight lg:mb-6 lg:leading-tight">
            More knowledge <br className="hidden md:inline" /> in less time
          </h1>
          <div className="audio-hero-content__subheadline text-gray-700 text-lg mb-8 lg:mb-8 ">
            Perfect for curious people who love to learn, busy people who don’t
            have time to read, and even people who aren’t into reading.
          </div>
          <Button title={"Start your free trial"} />
        </div>
        <div className="audio-hero-image audio-hero__image">
          <div className="audio-hero-image__container">
            <Image
              src="/images/phones.webp"
              alt=""
              loading="lazy"
              width={450}
              height={350}
              className="pict__image audio-hero-image__phone__image mt-14 relative top-12 left-48 z-10"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AudioHeroBanner;
