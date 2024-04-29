/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <form action="">
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          How would you rate the overall experience?
        </h3>
      </div>
      {[...Array(5).keys()].map((_, index) => {
        index += 1;
        return (
          <button className={``} onClick={() => setRating(index)} key={index} type="button">
            <span>
              <AiFillStar />
            </span>
          </button>
        );
      })}
    </form>
  );
};

export default FeedbackForm;
