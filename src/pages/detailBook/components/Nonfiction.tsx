import Button from "@/components/common/Button";
import Phone from "@/components/svg/Phone";
import PhoneLeft from "@/components/svg/PhoneLeft";
import PhoneRight from "@/components/svg/PhoneRight";
import React from "react";
import Image from "next/image";

const Nonfiction = () => {
  return (
    <div className="mb-12">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bottom-12 md:bottom-16  z-10 bg-yellow-100"></div>
        <section className=" flex w-full max-w-[80rem] mx-auto md:px-12 px-4 ">
          <article className="w-full pt-12 md:grid md:grid-cols-12 z-20 md:gap-x-6 md:px-2">
            <div className="mb-6 md:mb-0 md:col-span-5 md:pt-11 z-11">
              <div className="mb-4 font-bold text-midnight text-xl md:mb-8 md:text-2xl">
                {" "}
                Powerful ideas from top nonfiction{" "}
              </div>
              <p className="mb-8 text-base md:text-xl ">
                Try Blinkist to get the key ideas from{" "}
                <strong>
                  7,000+ bestselling nonfiction titles and podcasts.
                </strong>{" "}
                Listen or read in just <strong>15&nbsp;minutes.</strong>
              </p>
              <Button title={" Start your free trial "} />
            </div>
            <div className="flex items-center justify-center md:col-span-7 md:justify-start md:ml-7">
              <PhoneLeft />
              <div className="relative w-44 flex-none mx-1 md:w-56">
                <Phone />
                <div className="absolute top-0 pt-[25%]">
     
                  <div className="w-[80%] mx-auto mt-[5%]">
                    <p
                      className="text-white font-cera-pro font-bold text-center line-clamp-1"
                      style={{ fontSize: "11.872px;" }}
                    >
                      {" "}
                      Blink 3 of 8 - The 5 AM Club{" "}
                    </p>
                    <p
                      className="text-light-grey font-medium text-center line-clamp-1"
                      style={{ fontSize: "8.288px" }}
                    >
                      {" "}
                      by Robin Sharma{" "}
                    </p>
                  </div>
                </div>
              </div>
              <PhoneRight />
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Nonfiction;
