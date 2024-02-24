import React from "react";

const Drawer = () => {
  return (
    <div className=" bg-slate-500 z-50 overflow-y-auto fixed top-0 w-full h-screen lg:hidden">
      <div className="px-5 py-6 flex justify-between border-b border-b-lightest-grey">
        <span>logo</span>
        <button>
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
            <hr className="border-gray-500 mx-5 my-2" />
          </li>
          <li>
            <label className="mx-5 uppercase border-gray-500 font-bold  text-xs  h-8">
              {" "}
              Categories{" "}
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
