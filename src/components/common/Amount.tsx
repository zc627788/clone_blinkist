import React from "react";
import Section from "./Section";
import Button from "./Button";

interface Porps {
  title?: string;
  data: {
    icon: JSX.Element;
    title: string;
    content: string;
  }[];
}

const Amount = ({ title: name, data }: Porps) => {
  return (
    <Section title={name}>
      <div className="grid gap-x-8 gap-y-8 md:gap-y-2 grid-cols-1 md:grid-cols-3">
        {data.map(({ icon, title, content }) => (
          <div
            key={title}
            className={`flex flex-col items-center ${
              name ? "bg-blue-100" : ""
            } rounded-xl pt-7 pb-14 px-6`}
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
        {name && "* Based on survey data from Blinkist customers"}
      </div>
      <div className="flex justify-center  mt-10">
        <Button title="Start your free trial" />
      </div>
    </Section>
  );
};

export default Amount;
