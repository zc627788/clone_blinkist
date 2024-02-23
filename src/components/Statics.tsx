import React, { ReactNode } from "react";
import Image from "next/image";
import Button from "./common/Button";
const staticsData = [
  "Be more knowledgeable",
  "Be more successful",
  "Be healthier",
  "Be a better parent",
  "Be happier",
  "Be your best self!",
];
const phoneData = [
  "Feed your brain while",
  "Driving",
  "Doing housework",
  "Walking",
  "Relaxing",
];

const Statics = () => (
  <div className=" py-6 m:py-8 l:py-12  mt-12">
    <div className=" flex justify-between ">
      <div className="rotating-headers__header  justify-between flex-1">
        {staticsData.map((title) => (
          <h2 key={title} className="mb-2">
            {title}
          </h2>
        ))}
      </div>
      <div className=" flex-1">
        <div className="figures__data">
          <div className="flex  mb-6">
            <div className="figures__percentage">95%</div>
            <div className="figures__text">
              of Blinkist members<b>read significantly more</b>than before*
            </div>
          </div>
          <div className="flex mb-6">
            <div className="figures__percentage">91%</div>
            <div className="figures__text">
              of Blinkist members <b>create better habits*</b>
            </div>
          </div>
          <div className="flex mb-6">
            <div className="figures__percentage">87%</div>
            <div className="figures__text">
              have made <b>positive changes in their lives</b> thanks to
              Blinkist*
            </div>
          </div>
        </div>
        <div className="figures__more-info">
          * Based on internal study using survey data <br /> from general
          Blinkist customers
        </div>
      </div>
    </div>
    <div className=" flex justify-around mt-28">
      <div>
        <Image
          src="/images/mp3_phone.webp"
          alt=""
          loading="lazy"
          width={450}
          height={350}
        />
      </div>
      <div className="rotating-headers__header  justify-around ">
        {phoneData.map((title) => (
          <h2 key={title} className="mb-3">
            {title}
          </h2>
        ))}
        <Button title={"Start your free trial"} />
      </div>
    </div>
  </div>
);

export default Statics;
