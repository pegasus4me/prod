import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-[50%] h-[30%] border flex z-30 absolute bg-white">
      <div className="border flex flex-col  justify-evenly  border-gray-300 w-full items-center">
        <Link to="/" className="font-semibold text-lg">
          tasks
        </Link>
        <Link to="/dashboard" className="font-semibold text-lg">
          reports
        </Link>
        <Link to="/profile" className="font-semibold text-lg">
          profile
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
