import React, { useState } from "react";
import Carousel from "../../../components/common/Carousel";

interface PropType {
  dataSource: {
    id: number;
    icon: string;
    title: string;
    bookNum: number;
  }[];
}
export interface SelectType {
  title: string;
  bookNum: number;
}
function Interested({ dataSource }: PropType) {
  const [selected, setSelected] = useState<SelectType>({
    title: dataSource[0].title,
    bookNum: dataSource[0].bookNum,
  });

  const handleClickType = (params: SelectType) => {
    setSelected(params);
  };
  return (
    <>
      <div className="trial-duration-explanation__subheader">
        With over 6,500 nonfiction books, we have the
        <mark className="trial-duration-explanation__books-and-podcasts">
          <strong>most comprehensive</strong>
        </mark>{" "}
        library of its kind.
      </div>
      <div className="category-explorer__category-selector">
        <div className="max-w-5xl lg:mx-auto">
          <div className="category-selector__chips mx-4 category-selector__chips--visible">
            {dataSource.map(({ id, title, icon, bookNum }) => (
              <button
                onClick={() => handleClickType({ title, bookNum })}
                key={id}
                className={`category-selector__chip chip midnight flex items-center py-2.5 px-4 rounded cursor-pointer border-2 border-solid  ${
                  selected.title === title
                    ? "border-green-500"
                    : "hover:border-green-500"
                }  bg-white`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 mr-2 whitespace-normal chip__sprite text-midnight sprite-vue sprite-vue--category sprite-vue--career-and-success"
                >
                  <path d={icon}></path>
                </svg>{" "}
                <span className="block whitespace-nowrap">{title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <Carousel titleDetail={selected} />
    </>
  );
}

export default Interested;
