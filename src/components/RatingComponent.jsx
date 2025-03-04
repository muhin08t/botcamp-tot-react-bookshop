import React from "react";

export default function RatingComponent({ rating }) {
  return (
    <div className="rating scale-75">
      {[...Array(5)].map((_, index) => {
        const isHalf = rating - index === 0.5; // Check if it's a half star
        return (
          <input
            key={index}
            type="radio"
            name="rating"
            className={`mask ${
              isHalf ? "mask-star-2 bg-yellow-400 opacity-50" : "mask-star-2 bg-yellow-400"
            }`}
            checked={index + 1 <= rating || isHalf} // Mark full or half stars
            disabled
          />
        );
      })}
    </div>
  );
}

