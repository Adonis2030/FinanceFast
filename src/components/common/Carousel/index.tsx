import React, { useState, useEffect, useRef } from "react";
import LogoPic from "../../../assets/images/logo-4.svg";

const Carousel: React.FC = () => {
  const images = [
    LogoPic,
    LogoPic,
    LogoPic,
    LogoPic,
    LogoPic,
    LogoPic,
    LogoPic,
    LogoPic,
    LogoPic,
  ];
  const realWidth = useRef<HTMLDivElement | null>(null);
  const wrapWidth = useRef<HTMLDivElement | null>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  let realLength = 0;
  let wrapLength = 0;

  const calcWidth = () => {
    realLength = realWidth.current ? realWidth.current.clientWidth : 0;
    wrapLength = wrapWidth.current ? wrapWidth.current.clientWidth : 0;
    return (realLength - wrapLength) / images.length;
  };

  useEffect(() => {
    const slideWidth = calcWidth();
    const maxSlide = realLength - wrapLength;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        console.log(prevSlide + slideWidth, maxSlide);
        return prevSlide + slideWidth > maxSlide ? 0 : prevSlide + slideWidth;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="w-full flex md:w-full lg:w-2/3 sm:w-full p-2 justify-center items-center"
      ref={wrapWidth}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 gap-22 w-max"
          style={{
            transform: `translateX(-${currentSlide}px)`,
          }}
          ref={realWidth}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
