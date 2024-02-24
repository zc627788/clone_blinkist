import React from "react";
import Image from "next/image";
import { SelectType } from "../UI/Interested";
import useCarousel from "@/hooks/useCarousel";
import { booksData } from "@/fakeData/data";

interface PropType {
  titleDetail: SelectType;
}
const Carousel = ({ titleDetail }: PropType) => {
  const { carouselRef, next, prev, canGoNext, canGoPrev } = useCarousel(
    booksData[titleDetail.title] || []
  );

  return (
    <div className="category-book-slider category-explorer__category-book-slider">
      <div className="container m-auto max-w-5xl">
        <h3 className="category-book-slider__headline mb-4 md:mb-2  font-bold   text-2xl ">
          Most popular in <mark>{titleDetail.title}</mark>
        </h3>
        <div className="category-book-slider__subHeadline mb-8 subHeadline subHeadline--normal subHeadline--size-medium">
          Read or listen to {titleDetail.bookNum} titles in this category
        </div>
      </div>
      {(booksData[titleDetail.title] && (
        <div className="category-book-slider__books  m-auto max-w-5xl ">
          <div className="flex max-w-256 lg:mx-auto">
            <button
              onClick={prev}
              disabled={!canGoPrev}
              className="hidden md:flex md:pr-4"
            >
              <svg
                width="24"
                height="24"
                className={`sprite-vue sprite-vue--app sprite-vue--arrow transform rotate-90 flex-shrink-0 mt-20   ${
                  canGoPrev
                    ? "text-blue-500 cursor-pointer"
                    : "text-gray-500  cursor-not-allowed"
                }`}
              >
                <path
                  fill-rule="evenodd"
                  d="m12 14.879-7.94-7.94a1.5 1.5 0 1 0-2.12 2.122l9 9a1.5 1.5 0 0 0 2.12 0l9-9a1.5 1.5 0 0 0-2.12-2.122L12 14.88Z"
                  clip-rule="evenodd"
                ></path>
                <mask
                  id="a"
                  width="22"
                  height="13"
                  x="1"
                  y="6"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                >
                  <path
                    fill-rule="evenodd"
                    d="m12 14.879-7.94-7.94a1.5 1.5 0 1 0-2.12 2.122l9 9a1.5 1.5 0 0 0 2.12 0l9-9a1.5 1.5 0 0 0-2.12-2.122L12 14.88Z"
                    clip-rule="evenodd"
                  ></path>
                </mask>
              </svg>
            </button>
            <div className="w-full overflow-hidden">
              <div
                className="flex gap-12 overflow-x-auto overflow-y-hidden -mb-16 pb-16 px-4 snap-x scroll-pl-4 scroll-pr-4 "
                ref={carouselRef}
              >
                {booksData[titleDetail.title]?.map(
                  ({ id, href, src, title, author, subtitle, duration }) => (
                    <div key={id} className="flex-shrink-0 w-44 snap-start">
                      <a
                        href={href}
                        id="journey-of-awakening-en"
                        className="book-card-mini book-card-mini--linked"
                      >
                        <figure className="book-card-mini__figure">
                          <picture className="pict book-card-mini__picture pict--whitespace-fix">
                            <Image
                              src={src}
                              width={200}
                              height={300}
                              alt={title}
                              className="pict__image book-card-mini__image"
                            />
                          </picture>
                        </figure>
                        <div className="book-card-mini__content">
                          <div className="book-card-mini__content">
                            <h4 className="book-card-mini__headline">
                              {title}
                            </h4>
                            <div className="book-card-mini__author">
                              {author}
                            </div>
                            <div className="book-card-mini__subHeadline">
                              {subtitle}
                            </div>
                            <div className="book-card-mini__duration">
                              {duration}
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  )
                )}
              </div>
            </div>
            <button
              onClick={next}
              disabled={!canGoNext}
              className="hidden md:flex md:pl-4"
            >
              <svg
                width="24"
                height="24"
                className={`sprite-vue sprite-vue--app sprite-vue--arrow transform -rotate-90 flex-shrink-0 mt-20   ${
                  canGoNext
                    ? "text-blue-500 cursor-pointer"
                    : "text-gray-500  cursor-not-allowed"
                }`}
              >
                <path
                  fill-rule="evenodd"
                  d="m12 14.879-7.94-7.94a1.5 1.5 0 1 0-2.12 2.122l9 9a1.5 1.5 0 0 0 2.12 0l9-9a1.5 1.5 0 0 0-2.12-2.122L12 14.88Z"
                  clip-rule="evenodd"
                ></path>
                <mask
                  id="a"
                  width="22"
                  height="13"
                  x="1"
                  y="6"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                >
                  <path
                    fill-rule="evenodd"
                    d="m12 14.879-7.94-7.94a1.5 1.5 0 1 0-2.12 2.122l9 9a1.5 1.5 0 0 0 2.12 0l9-9a1.5 1.5 0 0 0-2.12-2.122L12 14.88Z"
                    clip-rule="evenodd"
                  ></path>
                </mask>
              </svg>
            </button>
          </div>
        </div>
      )) || <h1 className=" text-center">not Data</h1>}
    </div>
  );
};

export default Carousel;
