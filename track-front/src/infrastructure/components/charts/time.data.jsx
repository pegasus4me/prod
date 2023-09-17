import React, { useState, useEffect } from "react";
import { getAllTask } from "../../api/task";
import { totalSpend } from "../../actions/totalTimeSpend";
const TimeData = () => {
  const [timeSpend, setTotalTimeSpend] = useState({});

  useEffect(() => {
    total();
  }, [getAllTask]);

  const total = async () => {
    try {
      let res = await getAllTask();
      let totalT = totalSpend(res);
      setTotalTimeSpend(totalT);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="p-2">
        <p className="text-center font-medium">
          total time passed : {timeSpend.hours}:{timeSpend.minutes}:{timeSpend.seconds}
        </p>
      </div>
    </>
  );
};

export default TimeData;
