import React from "react";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

const Tasks = ({
  taskName,
  tag,
  timeSpend,
  showEditPopUp,
  deleteTask,
  timeStart,
  timeEnd,
}) => {
  return (
    <section className="xs:bg-white xs:m-2 flex flex-col items-center p-2 lg:grid grid-cols-5 shadow-md border border-gray-200">
      <div className="xs:mb-2">
        <h4 className="text-start text-md text-slate-500">{taskName}</h4>
      </div>
      <div className="bg-indigo-200 hover:bg-indigo-400 p-1 rounded-full max-w-[60%] min-w-[100px] m-auto xs:mb-2 ">
        <p className="text-center text-white text-sm">{tag}</p>
      </div>

      <div>
        <p className="text-center  text-black-300 text-sm xs:mb-1">
          {timeStart} - {timeEnd}
        </p>
      </div>
      <div className="text-center text-xl text-slate-800 ">
        <span>{timeSpend}</span>
      </div>
      <div className=" flex gap-4 text-lg justify-end">
        <button onClick={() => showEditPopUp()}>
          <FiEdit className="cursor-pointer text-indigo-300" />
        </button>
        <button onClick={() => deleteTask()}>
          <FiTrash2 className="cursor-pointer text-red-300" />
        </button>
      </div>
    </section>
  );
};

export default Tasks;

// xs:flex bg-white flex-col items-center  justify-center md:border flex md:items-center md:justify-between flex-wrap p-4 shadow-md md:flex-row m-3
