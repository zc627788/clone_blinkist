import React from "react";
import Section from "./Section";
import Image from "next/image";

interface Props {
  data: {
    src: string;
    alt: string;
    headline: string;
    subHeadline: string;
  }[];
  title: string;
}
const Knowledge = ({ data, title }: Props) => {
  return (
    <Section title={title}>
      <div className="sm:mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {data.map((feature, index) => (
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
  );
};

export default Knowledge;
