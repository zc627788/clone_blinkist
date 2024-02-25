import React from "react";
import Timeline from "./Timeline";
import Section from "./Section";
import Button from "./Button";

const Investment = () => {
  return (
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
  );
};

export default Investment;
