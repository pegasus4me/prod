import React, { useState, useEffect, useCallback } from "react";
import Container from "../../infrastructure/components/container";
import Task from "../../infrastructure/components/addTask";
import MapTasks from "../../infrastructure/components/map.tasks";
import { getAllTask } from "../../infrastructure/api/task";
import { deleteTaskById } from "../../infrastructure/api/task";
import toast, { Toaster } from "react-hot-toast";
import { totalSpend } from "../../infrastructure/actions/totalTimeSpend";
import Popup from "../../infrastructure/components/edit.popup";
const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTaskId, setCurrentTaskId] = useState([]);
  const [currentTask, setCurrentTask] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  let total = totalSpend(tasks);
 
  useEffect(() => {
      getTasks();
   
  }, []);

  const getTasks = async() => {
     try {
      let res = await getAllTask();
      if(res.msg !== "User doesn't have data") {
        setTasks(res);  
      }
  
      
    } catch (error) {
      console.error("an error",error)
    }
  };

  /*
   * delete task by id
  */ 
  const deleteOne = useCallback(async (id) => {
    try {
      const res = await deleteTaskById(id);
      if (res.msg === "row deleted") {
        toast.success("Task deleted successfully 🍃");
        getTasks();
      }
    } catch (error) {
      throw new Error("error deleteOne", error);
    }
  }, []);

  /*
   * edit task by id
  */
  const updateOne = useCallback(async (id) => {
      const findOneTask = tasks.find((task) => task.id === id);
      setCurrentTaskId(findOneTask.id);
      setCurrentTask(findOneTask);
      setShowPopup(true);
      getTasks();
    },[currentTaskId, tasks, showPopup, currentTask]
  );

  return (
    <div className="max-w-[70%] m-auto">

      {}
      <div className="mt-5">
        <Task />
      </div>
      <Container
        totalTimeSpent={`${total.hours}:${total.minutes}:${total.seconds}`}
      >
        {tasks.length !== 0 &&  tasks.length !== undefined ? (
          tasks.map((task) => (
            <MapTasks
              key={task.id}
              taskName={task.notes}
              tag={task.tag}
              timeSpend={task.time_spend}
              timeStart={task.time_start.slice(11, 16)}
              timeEnd={task.time_end.slice(11, 16)}
              deleteTask={() => deleteOne(task.id)}
              showEditPopUp={() => updateOne(task.id)}
            />
          ))
        ) : (
          <p className="text-center text-2xl font-medium text-slate-300 ">
            Create new Task 🚀
          </p>
        )}
      </Container>
      {showPopup ? (
        <Popup
          currentTaskId={currentTaskId}
          closeModal={() => setShowPopup(false)}
          currentTask={currentTask}
        />
      ) : null}
      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
};

export default Tasks;
