import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { saveUser } from "../../../infrastructure/api/auth";
import { Navigate } from "react-router-dom";


const Register = () => {
  const { register, handleSubmit } = useForm();
  const [redirect, setRedirect] = useState(false);

  const onSubmit = async (data) => {
    try {
      data.role = "client";
      let user = await saveUser(data);
      if (user.token !== "") return toast.success("Successfully registered") && setRedirect(true);
      else toast.error("Something went wrong....");
      
    } catch (error) {
      throw new Error("error", error);
    }
  };
  if (redirect) return <Navigate to="/login" />;

  return (
    <>
      <h1 className="text-center text-2xl font-display font-medium mt-11">
        First time? Register now 👋
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-gray rounded-md p-3 flex flex-col justify-center align-center max-w-[500px] m-auto  h-64] mt-28 bg-neutral-50 shadow-md"
      >
        <label className="font-display font-medium text-slate-800 mb-2">
          Username
        </label>
        <input
          {...register("username")}
          placeholder="username"
          required
          className="border border-gray-300 p-1 mb-5 rounded-sm focus:outline-none focus:ring-4 focus:ring-blue-300"
        />
        <label className="font-display font-medium text-slate-800 mb-2">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="email"
          required
          className="border border-gray-300 p-1  mb-5 rounded-sm focus:outline-none focus:ring-4 focus:ring-blue-300"
        />
        <label className="font-display font-medium text-slate-800 mb-2">
          Password
        </label>
        <input
          {...register("password")}
          type="password"
          placeholder="password"
          required
          className="border border-gray-300 p-1  mb-5 rounded-sm focus:outline-none focus:ring-4 focus:ring-blue-300"
        />

        <label className="font-display font-medium text-slate-800 mb-2">
          chose a timezone :
        </label>
        <select
          name="timezone"
          {...register("timezone")}
          className="border border-gray-300 p-1  mb-5 rounded-sm focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <option value="">Pick your timezone</option>
          <option value="Europe/paris">Europe/paris</option>
          <option value="Asie/Tokyo">Asie/Tokyo</option>
          <option value=" america/New_york">America/New york</option>
          <option value=" america/Los_angeles">America/Los angeles</option>
        </select>
        <input
          type="submit"
          className="p-1 rounded-sm text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center"
        />

        <p className="mt-2 text-sm text-slate-800">
          already have an account?{" "}
          <Link to="/login" className="font-medium text-blue-500">
            Login
          </Link>
        </p>
      </form>

      <Toaster position="top-left" reverseOrder={false} />
    </>
  );
};
export default Register;
