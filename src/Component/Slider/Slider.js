import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextSlide, prevSlide, dotSlide } from "../Feature/Slice/SliderSlice"; // Adjust the path accordingly
import DammyData from "../Data/DammyData";
import "./Slider.css";
function Slider() {
  const slideIndex = useSelector((state) => state.slider.value); // Correct the state slice name
  console.log("slideIndex", slideIndex);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="relative pb-4  slider-container">
        <div>
          {DammyData().map((item) => (
            <div
              key={item.id}
              className={
                parseInt(item.id) === slideIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
            >
              <div>
                {parseInt(item.id) === slideIndex && (
                  <img src={item.img} alt="Shoes" />
                )}
              </div>
              <div className=" text-3xl  slider-text">
                {parseInt(item.id) === slideIndex && <p>{item.text}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="flex  dot-ball">
          {DammyData().map((dot, index) => (
            <div className="mr-2 dot-ball-inn" key={index}>
              <div
                className={
                  index === slideIndex ? "dot-active  " : " dot-deactive"
                }
                onClick={() => dispatch(dotSlide(index))}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="next-btn"
        onClick={() => dispatch(nextSlide(slideIndex + 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <button
        className="prev-btn"
        onClick={() => dispatch(prevSlide(slideIndex - 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default Slider;
