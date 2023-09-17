import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { getAllTask } from "../../api/task";
import LoadSpinner from "../load.spinner";
import { converDurationToNumber } from "../../actions/totalTimeSpend";

// display le total Time passé sur toutes les task
const TotalTime = () => {
  
  const [data, setData] = useState([]);
  const [spinner, setSpinner] = useState(<LoadSpinner />);
  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    try {
      let res = await getAllTask();

      let newData = res.map((task) => {

        const durationperTask = converDurationToNumber(task.time_spend) / 60000;
        return {
          taskid: task.id,
          name: task.notes,
          'duration/min': durationperTask.toFixed(2),
          time : task.time_spend
        };
      });
      setData(newData);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="flex justify-center p-3">
      {data.length !== 0 ? (
         <BarChart
          className="w-full"
            width={1000}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="duration/min" />
            <Tooltip />
            <Legend />
            <Bar dataKey="duration/min" fill="#8884d8" />
        </BarChart>
       
      ) : (
        spinner
      )}
    </div>
  );
};

export default TotalTime;
