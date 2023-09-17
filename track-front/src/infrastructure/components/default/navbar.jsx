import React, { useEffect, useState } from "react";
import Logo from "../../../application/assets/Vector.png";
import { Link } from "react-router-dom";
import { checkAuth } from "../../api/auth";
import { getUserData } from "../../api/auth";
import { RxHamburgerMenu } from "react-icons/rx";
// import { GrClose } from "react-icons/rx";
import Sidebar from "../sidebar";

const Navbar = () => {
  const user = checkAuth();
  const [name, setName] = useState("");
  const [click, setClick] = useState(false);
  useEffect(() => {
    if (user) {
      userData();
    }
  }, []);

  const userData = async () => {
    try {
      let data = await getUserData();
      setName(data.username);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="">
      
      <div className="lg:hidden md:hidden border p-2 flex justify-end">
      <RxHamburgerMenu className="text-2xl cursor-pointer" onClick={() => setClick(!click)}/>
      </div>
      <div className="lg:hidden md:hidden flex justify-end">
      {click && <Sidebar />}
      </div>
      
      <div className="hidden md:flex justify-around p-3  border  border-gray-300">
        <div className="ml-10">
          <img src={Logo} alt="" className="w-28" />
        </div>

        {/* si il est connecté montrer ces routes sinon en pas montrer */}
        {user ? (
          <div className=" flex justify-center items-center gap-10 font-inter  text-slate-800">
            <Link
              to="/"
              className="hover:bg-slate-100 p-2 rounded-xl hover:animate-pulse font-semibold"
            >
              tasks
            </Link>
            <Link
              to="/dashboard"
              className="hover:bg-slate-100 p-2 rounded-xl hover:animate-pulse font-semibold"
            >
              reports
            </Link>
            <Link
              to="/profile"
              className="hover:bg-slate-100 p-2 rounded-xl hover:animate-pulse font-semibold"
            >
              profile
            </Link>
          </div>
        ) : null}

        {!user ? (
          <div className="mr-10">
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <Link to="/register">Register</Link>
            </button>
          </div>
        ) : (
          <div className="mr-10 flex items-center ">
            <span className="relative flex h-3 w-3 mr-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <div>
              <h2 className="text-sm font-medium text-gray-900">
                connected as : <span className="text-gray-500">{name}</span>
              </h2>
              <p className="text-xs font-medium text-gray-900">
                {" "}
                statut : <span className="text-green-500">authenticated</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
