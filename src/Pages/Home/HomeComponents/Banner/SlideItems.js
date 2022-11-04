import React from "react";
import "./slide.css";

const SlideItems = ({ slides }) => {
  const { id, next, prev, image } = slides;
  return (
    <>
      <div
        id={`slide${id}`}
        className="carousel-item relative w-full h-[60hv] rounded-lg"
      >
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className="w-full flex justify-center items-center slides z-10 rounded-lg"
        >
          <h1 className="font-bold text-6xl text-indigo-500">Hello World</h1>
        </div>
        <div className="absolute flex justify-end gap-2 transform -translate-y-1/2  right-5 bottom-0 z-10">
          <a href={`#slide${prev}`} className="btn btn-circle">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </>
  );
};

export default SlideItems;
