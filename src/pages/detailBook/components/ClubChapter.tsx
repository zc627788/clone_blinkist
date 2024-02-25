import { keyIdeas, summaryIdeasData } from "@/router";
import React, { useState } from "react";

const KeyIdeasList = ({
  keyIdeas,
  setSelectIdeas,
}: {
  keyIdeas: { title: string; id: number }[];
  setSelectIdeas: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="row-span-2">
      <h2 className="text-md font-bold mb-2">Key ideas in The 5 AM Club</h2>
      <ul>
        {keyIdeas.map((idea, index) => (
          <li key={index} className="border-b  border-gray-400 last:border-b-0">
            <button
              onClick={() => setSelectIdeas(idea.id)}
              className="py-4 flex items-center outline-none w-full"
            >
              {index !== 0 && (
                <div className="text-xl font-bold mr-4">{index}</div>
              )}
              <h3
                className={` text-gray-500   text-xs text-left ${
                  index === 0 ? "ml-7" : ""
                }`}
              >
                {idea.title}
              </h3>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

function ClubChapter() {
  const [selectIdeas, setSelectIdeas] = useState<number>(0);
  const idea = summaryIdeasData.find((item) => item.id === selectIdeas);

  return (
    <div id="chapters-preview" className="relative mb-0 lg:mb-12 py-12 lg:py-16    bg-gray-50">
      <section className="flex-col  flex w-full max-w-[80rem] mx-auto md:px-12 px-4 ">
        <div className="w-full px-2 lg:px-12 bg-white pt-12">
          <h2  className=" mb-4 max-w-3xl font-bold text-h3 md:text-3xl">
            The 5 AM Club
            <span className="font-normal">
              <br />
              <span className="bg-yellow-400 ">Summary of 6 key ideas</span>
            </span>
          </h2>
          <div className="flex items-center text-dark-grey  text-xl lg:text-xl">
            Audio &amp; text in the Blinkist app
          </div>
        </div>
        <div className="grid bg-white pt-12 md:px-8 lg:grid-cols-3 lg:gap-x-16 px-2 lg:px-12 lg:rounded">
          <div className="text-h4 font-bold mb-12  lg:col-span-3">
            <span>
              {idea?.id === 0 ? "Introduction" : `Key idea ${idea?.id} of 6`}
            </span>
          </div>
          <section className="lg:col-span-2">
            <h2 className="mb-6 font-bold  text-xl">{idea?.title}</h2>
            <div className=" text-gray-700"> {idea?.content}</div>
          </section>
          <KeyIdeasList keyIdeas={keyIdeas} setSelectIdeas={setSelectIdeas} />
        </div>
      </section>
    </div>
  );
}

export default ClubChapter;
