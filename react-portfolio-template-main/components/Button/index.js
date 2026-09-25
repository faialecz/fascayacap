import React from "react";
import data from "../../data/portfolio.json";

const Button = ({ children, type, onClick, classes }) => {
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`text-sm tablet:text-base px-4 py-2 m-1 laptop:m-2 rounded-full bg-[#dfeaf7] text-[#243347] border border-[#c8d9ee] font-medium tracking-[-0.02em] transition-all duration-300 ease-out first:ml-0 hover:scale-[1.02] active:scale-100 link ${
          data.showCursor && "cursor-none"
        } ${classes}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-sm tablet:text-base px-3 py-2 m-1 laptop:m-2 rounded-full flex items-center font-medium tracking-[-0.02em] transition-all ease-out duration-300 border border-transparent hover:bg-[#dfeaf7] hover:border-[#c8d9ee] hover:text-[#243347] text-[#53657d] hover:scale-[1.02] active:scale-100 tablet:first:ml-0 ${
        data.showCursor && "cursor-none"
      } ${classes} link`}
    >
      {children}
    </button>
  );
};

export default Button;
