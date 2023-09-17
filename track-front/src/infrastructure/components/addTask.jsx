import React, { useState, useEffect } from "react";
import StartButton from "./Start.button";
import StopButton from "./Stop.Button";
import { useStopwatch } from "react-timer-hook";
import Tags from "./tags";
import { setDate } from "../actions/date";
import { getUserData } from "../api/auth";
import { getTimeDifference } from "../actions/date";
import { addNewTask } from "../api/task";
import { useSelector, useDispatch } from "react-redux";
import { getAllTask } from "../api/task";
import {
  startTimer,
  stopTimer,
  selectTimer,
  incrementTimer,
} from "../../application/libs/redux/time";
import toast, { Toaster } from "react-hot-toast";

const Task = () => {
  const { seconds, minutes, hours, isRunning, start, pause, reset } = useStopwatch({ autoStart: false });
  const dispatch = useDispatch();
  const heure = useSelector(selectTimer);
  
  const [taskName, setTaskName] = useState("");
  const [tag, setTag] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [date, setDates] = useState(""); // format YYYY-MM-DD

  useEffect(() => {
    dispatch(startTimer({ hours, minutes, seconds }));
    // dispatch(incrementTimer({ hours, minutes, seconds })); // counter fait maison
  }, [dispatch, isRunning, hours, minutes, seconds]);

  useEffect(() => {
    
  },[])
  // lordque l'utisateur arrete une tache toute la logique de sauvegarde est executé dans la function stop()
  const stop = async () => {
    try {
      const getUserTimeZone = await getUserData();
      let dates = setDate(getUserTimeZone.timezone);
      let timeEnd = `${dates.hours}:${dates.minutes}:${dates.seconds}`;
      let diff = getTimeDifference(timeStart, timeEnd);

      let data = {
        time_start: `${date} ${timeStart}`,
        time_end: `${dates.day} ${timeEnd}`,
        time_spend: `${diff.hours}:${diff.minutes}:${diff.seconds}`,
        timezone: getUserTimeZone.timezone,
        notes: taskName,
        tag: tag,
      };

      await addNewTask(data);
      // dispatch(stopTimer());
      reset(); // Réinitialise le compteur
      pause(); // Arrête le compteur
      toast.success("Task added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const startTime = async () => {
    try {
      const getUserTimeZone = await getUserData();
      let dates = setDate(getUserTimeZone.timezone);
      setDates(dates.day);
      setTimeStart(`${dates.hours}:${dates.minutes}:${dates.seconds}`);

      reset(); // Réinitialise le compteur
      start();
      toast.success("Task created successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="xs:flex bg-white flex-col items-center justify-center md:border flex md:items-center md:justify-between flex-wrap p-2 shadow-md md:flex-row">
      <div>
        <input
          type="text"
          className="xs:w-auto lg:w-96 p-2 focus:outline-indigo-200 m-1"
          placeholder="Task Name"
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div>
        <Tags selectedTag={(e) => setTag(e.currentTarget.value)} />
      </div>
      <div className="xs:text-center text-xl text-slate-500 ml-[30%]">
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>

      <div>
        {isRunning ? (
          <StopButton stopTime={stop} />
        ) : (
          <StartButton startTime={startTime} />
        )}
      </div>
      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
};

export default Task;
