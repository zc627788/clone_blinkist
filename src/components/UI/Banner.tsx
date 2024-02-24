import React from "react";
import Image from "next/image";
import Button from "../common/Button";

const AudioHeroBanner = () => (
  <div className="audio-hero ">
    <div className="main-features py-6 md:py-8 l:py-12">
      <div className="main-features__container">
        <div className="audio-grid">
          <div className="audio-hero-content audio-hero__content ">
            <h1 className="audio-hero-content__headline audio-hero-content__headline--h2-mobile">
              More knowledge <br className="hidden md:inline" /> in less time
            </h1>
            <div className="audio-hero-content__subHeadline text-gray-700 ">
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
                className="pict__image audio-hero-image__phone__image   lg:top-12 lg:left-60 md:top-10 md:left-40 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AudioHeroBanner;
