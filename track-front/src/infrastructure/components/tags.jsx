import React from "react";
import { AiFillTag } from "react-icons/ai";

const Tags = ({ selectedTag }) => {
  return (
    <div className="flex items-center">
      <AiFillTag className="text-indigo-500" />

      <select
        className="focus:outline-none text-indigo-500 p-2"
        onClick={selectedTag}
      >
        <option value="" className="text-gray-200">
          chose an option
        </option>
        <option value="programming">programming</option>
        <option value="study">study</option>
        <option value="sport">sport</option>
        <option value="lifestyle">lifestyle</option>
        <option value="job">job task</option>
        <option value="other">other</option>
      </select>
    </div>
  );
};

export default Tags;
