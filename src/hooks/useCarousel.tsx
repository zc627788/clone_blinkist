import { useEffect, useRef, useState } from "react";
interface BooksType {
  id: string;
  href: string;
  src: string;
  title: string;
  author: string;
  subtitle: string;
  duration: string;
}
[];
const useCarousel = (data: BooksType[]) => {
  const [currentPage, setCurrentPage] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(data.length / 5);
  const next = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prev = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: scrollAmount * currentPage,
        behavior: "smooth",
      });
    }
  }, [currentPage, data]);

  return {
    carouselRef,
    next,
    prev,
    canGoNext: currentPage < totalPages - 1,
    canGoPrev: currentPage > 0,
  };
};

export default useCarousel;
