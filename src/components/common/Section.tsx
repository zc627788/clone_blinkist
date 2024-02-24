import React, { ReactNode, forwardRef } from "react";

type SectionProps = {
  children: ReactNode;
  title?: string;
  bgColor?: string;
};

const Section = forwardRef<HTMLDivElement, SectionProps>(({ title, children, bgColor }, ref) => {
  return (
    <div className={`py-6 m:py-8 l:py-12  mt-12 ${bgColor} `} ref={ref}>
      <div className="main-features__container container max-w-5xl mx-auto   ">
        <div className="grid mb-7">
          <h2 className="main-features__headline  grid__el--xs-12 text-center">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </div >
  )
});

export default Section;
