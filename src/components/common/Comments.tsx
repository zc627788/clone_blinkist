import React from "react";
import Section from "./Section";
import Button from "./Button";
interface Props {
  title: string;
  data: {
    title: string;
    content: JSX.Element;
  }[];
}
const Comments = ({ title, data }: Props) => {
  return (
    <Section title={title}>
      <div className="grid  grid-flow-row  grid-cols-12 sm:gap-x-6 md:gap-x-6 lg:gap-x-8 ">
        <div className="app-reviews__user-reviews">
          {data.map(({ title, content }) => (
            <div key={title} className="bg-yellow-100 p-4 rounded mb-8">
              <div className="flex flex-col md:flex-row items-start md:items-center text-midnight font-medium mb-4 md:mb-2 text-base leading-normal">
                {title}
                <div className=" ml-2 flex">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <div
                      key={value}
                      className="mr-1 relative  text-blue-500 w-3 h-3"
                    >
                      <div className="relative w-full h-full">
                        <div className="absolute w-full h-full star-shaped">
                          <div
                            className="h-full "
                            style={{ width: "100%" }}
                          ></div>
                        </div>{" "}
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute w-full h-full left-0"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.2064 6.17467L2.07483 6.80601L5.06828 9.87398L4.37426 14.1285L7.99999 12.1243L11.6259 14.1286L10.9319 9.87398L13.9253 6.80603L9.7936 6.17467L8 2.35348L6.2064 6.17467ZM5.52788 5.26675L0 6.11145L4.00007 10.2111L3.05577 16L8 13.2669L12.9444 16L12.0001 10.2111L16 6.11163L10.4721 5.26675L8 0L5.52788 5.26675Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>{" "}
                      <div className="absolute -bottom-6 whitespace-nowrap transform -translate-x-1/2 left-1/2 hidden "></div>
                    </div>
                  ))}
                </div>
              </div>
              {content}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button title="Start your free trial" />
      </div>
    </Section>
  );
};

export default Comments;
