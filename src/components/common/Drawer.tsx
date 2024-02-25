import { useMyContext } from "@/contexts/CustomContext";
import { MenuItem, Router } from "@/router";
import React, { useState } from "react";

const Drawer = ({ isOpen }: { isOpen: boolean }) => {
  const [activeMenu, setActiveMenu] = useState<number | "">("");
  const { setValue } = useMyContext();

  const handleMenuClick = (id: number | "") => {
    setActiveMenu(activeMenu === id ? "" : id);
  };
  const handleBackMenu = () => {
    setActiveMenu("");
  };
  const activeMenuItem = Router.find((item) => item.id === activeMenu);

  const renderSubMenu = (children: MenuItem[]) => (
    <div
      className="absolute top-0 h-full w-full light-pale-mint-grey"
      onClick={handleBackMenu}
    >
      <button className="mx-5 my-4">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-6 h-6 hover:text-blue-500"
        >
          <path
            d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
      <div className="flex flex-col">
        <ul className="overflow-y-auto">
          {children.map((child) => (
            <li key={child.id} className="flex mb-2 last:mb-0">
              <a
                href="#"
                className="flex items-center h-12 lg:h-10 w-full group cursor-pointer hover:text-blue-500 active:text-blue-500"
              >
                <div className="w-1 h-full rounded flex-shrink-0 mr-4 group-hover:bg-blue group-active:bg-blue-500 bg-transparent"></div>
                <div className="w-full flex items-center font-medium">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      d="M24 24H0v-7.3h5.72l-.1-5.57h5.64V5.57h5.62V0H24zM1.5 22.51h21V1.5h-4.12v5.57h-5.62v5.57H7.15l.09 5.57H1.5z"
                      fill="currentColor"
                    ></path>
                  </svg>{" "}
                  {child.subTitle}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div
      className={`light-pale-mint-grey z-50 overflow-y-auto fixed top-0 w-full h-screen  ${
        isOpen ? "" : "hidden"
      } `}
    >
      <div className="px-5 py-6 flex justify-between border-b border-b-lightest-grey">
        <span>logo</span>
        <button onClick={() => setValue(false)}>
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6  hover:text-blue-500 cursor-pointer"
          >
            <path
              d="M19.3 20.7l-6.8-6.8-6.8 6.8-1.4-1.4 6.8-6.8-6.8-6.8 1.4-1.4 6.8 6.8 6.8-6.8 1.4 1.4-6.8 6.8 6.8 6.8z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
      <div className="relative overflow-y-auto">
        <ul>
          <li rel="nofollow" className="flex my-2">
            <a
              data-test-id="navigation-item"
              href="https://www.blinkist.com/en/nc/login?last_page_before_login=https%3A%2F%2Fwww.blinkist.com%2Fen%2Fbooks%2Fthe-5-am-club-en"
              className="flex items-center h-12 lg:h-10 w-full  group cursor-pointer hover:text-blue active:text-blue"
            >
              <div className="w-1 h-full rounded flex-shrink-0 mr-4 group-hover:bg-blue-500 group-active:bg-blue-500 bg-transparent"></div>
              <div className="w-full flex items-center font-medium">Login</div>
            </a>
          </li>
          <li>
            <hr className="border-gray-500  mx-5 my-2" />
          </li>
          <li>
            <label className="mx-5 uppercase border-gray-100 font-bold text-gray-500   text-xs  h-8">
              Categories{" "}
            </label>
          </li>
          <li className="pr-4 overflow-y-auto">
            <ul>
              {Router.map((route) => (
                <li key={route.id} className="mb-2 last:mb-0">
                  <ul>
                    <li className="flex mb-2 last:mb-0">
                      <button
                        type="button"
                        className="flex items-center h-12 lg:h-10 w-full cursor-pointer hover:text-blue-500 active:text-blue-500"
                        onClick={() => handleMenuClick(route.id)}
                      >
                        <div className="w-1 h-full rounded flex-shrink-0 mr-4 bg-transparent"></div>
                        <div className="w-full flex items-center font-medium">
                          {route.title}
                        </div>
                        <div>
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-6 h-6 p-1 -rotate-90 flex-shrink-0"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </button>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        {activeMenuItem?.children && renderSubMenu(activeMenuItem.children)}
      </div>
    </div>
  );
};

export default Drawer;
