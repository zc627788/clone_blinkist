import React, { useState } from "react";
import Section from "@/components/common/Section";
import { faqsData } from "@/fakeData/data";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggleAccordion = (index: number | null) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Section title="The 5 AM Club FAQs" bgColor="bg-slate-100">
      <div className="bg-light-pale-mint-grey">
        <div className="py-12 md:py-16 px-4 md:px-0 md:max-w-2xl md:mx-auto text-midnight">
          {faqsData?.map((faq) => (
            <div
              key={faq.id}
              className="border-b border-light-grey py-4 md:py-8"
            >
              <summary
                className="flex justify-between cursor-pointer"
                onClick={() => toggleAccordion(faq.id)}
              >
                <h3 className="font-bold  text-lg">{faq.question}</h3>
                <div className="self-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-6 h-6 ml-4 transition-transform transition-700 linear ${
                      openIndex === faq.id ? "transform rotate-180" : ""
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </summary>
              {openIndex === faq.id && (
                <div className=" text-gray-400 mt-4 md:mt-6 md:pr-10 with-styled-ul-list with-styled-ol-list overflow-hidden animate-expand-height max-h-[100rem] opacity-100">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQs;
