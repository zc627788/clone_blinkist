import { categories } from "@/fakeData/data";
import Link from "next/link";
import React from "react";

const Catalogue = ({ title }: { title: string }) => {
  return (
    <div className="w-full overflow-hidden bg-slate-100 pt-12 md:pt-16">
      <h2 className="mb-6 containerTop headline font-bold text-2xl">{title}</h2>
      <div className="flex overflow-x-auto containerTop pb-16 -mb-16 lg:justify-between">
        {categories.map((category, index) => (
          <div
            key={index}
            className="w-64 lg:w-full mr-8 md:mr-12 last:mr-0 flex-shrink-0 lg:flex-shrink"
          >
            <h3 className="mb-6 headline font-bold text-xl">
              {category.title}
            </h3>
            <ul>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-4 last:mb-0">
                  <Link
                    href="#"
                    className="text-sm hover:text-blue-500 text-gray-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container   max-w-5xl  mx-auto ">
        <hr className="mt-8 md:mt-12  border-gray-800 border-b-0" />
      </div>
    </div>
  );
};

export default Catalogue;
