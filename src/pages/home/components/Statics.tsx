import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../../../components/common/Button";
import { phoneData, staticsData } from "@/fakeData/data";

const Statics = () => {
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prevIndex) =>
        prevIndex === staticsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" py-6 m:py-8 l:py-12  mt-12 max-w-5xl mx-auto  ">
      <div className=" lg:flex md:flex justify-between ">
        <div className="rotating-headers__header  justify-between flex-1">
          {staticsData.map((title, index) => (
            <h2
              key={title}
              className={`mb-2 ${index === highlightIndex ? "highlight" : ""}`}
            >
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
      <div className="md:flex justify-around mt-28">
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
          {phoneData.map((title, index) => (
            <h2
              key={title}
              className={`mb-3 ${index === highlightIndex ? "highlight" : ""}`}
            >
              {title}
            </h2>
          ))}
          <Button title={"Start your free trial"} />
        </div>
      </div>
    </div>
  );
};

export default Statics;
