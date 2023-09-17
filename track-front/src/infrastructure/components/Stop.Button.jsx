import React from "react";

const StopButton = ({ stopTime }) => {
  const handleClick = () => {
    stopTime();
  };
  return (
    <>
      <button
        type="button"
        className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-red-200 rounded-lg border border-gray-200 hover:bg-red-300 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 "
        onClick={handleClick}
      >
        Stop
      </button>
    </>
  );
};

export default StopButton;
