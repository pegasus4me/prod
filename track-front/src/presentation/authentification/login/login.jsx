import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { authenticateUser } from "../../../infrastructure/api/auth";
import toast, { Toaster } from "react-hot-toast";
import { setTolocalStorage, setTolocalStorageJSON } from "../../../infrastructure/actions/localStorage";
import { Navigate } from "react-router-dom";


const Login = () => {
  const { register, handleSubmit } = useForm();
  const [redirect, setRedirect] = useState(false)
  
  const checkCredentials = async (data) => {
    try {
      let userAuthentification = await authenticateUser(data);
      console.log("ddpdp",userAuthentification)
      if (userAuthentification.token === "") toast.error("Something went wrong....");
      
      setTolocalStorage("token", userAuthentification.token);
      setTolocalStorageJSON("user",userAuthentification);
      
      toast.success("Successfully logged in") 
      setRedirect(true)
    } catch (error) {
      console.log(error)
    }
  };

  if(redirect) return <Navigate to="/" />
  
  return (
    <>
      <h1 className="text-center text-2xl font-display font-medium mt-11">
        Welcome back fren👋
      </h1>
      <form
        onSubmit={handleSubmit(checkCredentials)}
        className="border border-gray rounded-md p-3 flex flex-col justify-center align-center max-w-[500px] m-auto  h-64] mt-28 bg-neutral-50 shadow-md"
      >
        <label className="font-display font-medium text-slate-800 mb-2">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="email"
          required
          className="border border-gray-300 p-1  mb-5 rounded-sm focus:outline-none"
        />
        <label className="font-display font-medium text-slate-800 mb-2">
          Password
        </label>
        <input
          {...register("password")}
          type="password"
          placeholder="password"
          required
          className="border border-gray-300 p-1  mb-5 rounded-sm focus:outline-none"
        />

        <button className="p-1 rounded-sm text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center">
          Enter to orion
        </button>
      </form>
      <Toaster position="top-left" reverseOrder={false} />
    </>
  );
};

export default Login;
