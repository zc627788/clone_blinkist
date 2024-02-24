import React, { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  title: string;
};

const Section = ({ title, children }: SectionProps) => (
  <div className=" py-6 m:py-8 l:py-12  mt-12">
    <div className="main-features__container container">
      <div className="grid mb-7">
        <h2 className="main-features__headline  grid__el--xs-12 text-center">
          {title}
        </h2>
      </div>
      {children}
    </div>
  </div>
);

export default Section;
