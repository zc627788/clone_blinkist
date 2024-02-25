import { MenuItem, Router } from "@/router";
import React, { useState } from "react";

const SubMenu: React.FC<{ items?: MenuItem[] }> = ({ items }) => (
  <ul className="w-80 m-6 bg-light-pale-mint-grey z-10">
    {items?.map(({ id, subTitle }) => (
      <li key={id}>
        {" "}
        <button
          type="button"
          className="flex items-center h-12 l:h-10 w-full  hover:text-indigo-500 group cursor-pointer  "
        >
          {" "}
          <div className="w-full flex items-center font-medium">
            {subTitle}{" "}
          </div>{" "}
        </button>
      </li>
    ))}
  </ul>
);

const Navigation: React.FC = () => {
  const [selectMainRouter, setSelectMainRouter] = useState("");
  const currentSelect = Router.find(
    (item) => item.title === selectMainRouter
  ) || { children: [] };
  return (
    <div
      className="flex bg-light-pale-mint-grey rounded-lg border border-light-grey z-50 absolute top-14 "
      style={{ boxShadow: "rgba(58, 70, 73, 0.2) 0px 10px 20px 0px" }}
    >
      <ul className="w-80 m-6 bg-light-pale-mint-grey z-10">
        {Router.map(({ id, title }) => (
          <li key={id} className="flex mb-2 last:mb-0">
            <button
              onMouseEnter={() => setSelectMainRouter(title)}
              type="button"
              className="flex items-center h-12 l:h-10 w-full hover:text-indigo-500  group cursor-pointer "
            >
              <div className="w-full flex items-center font-medium">
                {title}
              </div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 ml-2 mt-1"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.121 12l-7.94-7.94a1.5 1.5 0 012.122-2.12l9 9a1.5 1.5 0 010 2.12l-9 9a1.5 1.5 0 01-2.122-2.12L9.12 12z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
      <div>
        {currentSelect.children && <SubMenu items={currentSelect.children} />}
      </div>
    </div>
  );
};

export default Navigation;
