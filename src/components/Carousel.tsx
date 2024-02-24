import React from 'react';

type CarouselProps = {
  items: string[];
};

const Carousel = ({ items }: CarouselProps) => (
  <div className="carousel">
    {items.map((item, index) => (
      <div key={index}>{item}</div>
    ))}
  </div>
);

export default Carousel;