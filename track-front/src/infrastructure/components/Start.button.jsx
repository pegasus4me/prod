import React from "react";

const StartButton = ({ startTime }) => {
  const handleClick = () => {
    startTime();
  };
  
  return (
    <>
      <button
        type="button"
        className="py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-indigo-200 rounded-lg border border-gray-200 hover:bg-indigo-400 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 "
        onClick={handleClick}
      >
        Start
      </button>
    </>
  );
};

export default StartButton;
