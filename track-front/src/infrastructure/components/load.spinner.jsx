import React from "react";
import { Oval } from "react-loader-spinner";
const LoadSpinner = () => {
  return (
    <div className="flex justify-center p-2">
      <Oval
      
        height={80}
        width={80}
        color="#1B4DFF"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#1B4DFF"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default LoadSpinner;
