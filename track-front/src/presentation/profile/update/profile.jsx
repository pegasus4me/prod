import React from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { updateUserData } from "../../../infrastructure/api/auth";
const Profile = () => {
  const { register, handleSubmit } = useForm();

  const updateProfile = async (data) => {
    try {
      let res = await updateUserData(data);
      if (res.msg === "user updated") return toast.success("Successfully updated your profile ");
        else toast.error("Something went wrong....");
    } catch (error) {
      throw new Error("error", error);
    }
  };

  return (
    <div className="max-w-[70%] m-auto">
      <Link
        to="/profile"
        className="inline-flex items-center font-medium text-blue-600  hover:underline p-2 "
      >
        go to your profile
      </Link>

      <h1 className="text-center text-2xl font-display font-medium mt-11">
        Update your profile ⚡
      </h1>

      <form
        onSubmit={handleSubmit(updateProfile)}
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
          <option value=" america/New_york">america/New york</option>
          <option value=" america/Los_angeles">america/Los angeles</option>
        </select>
        <input
          type="submit"
          className="p-1 rounded-sm text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center"
        />
      </form>

      <Toaster position="top-left" reverseOrder={false} />
    </div>
  );
};

export default Profile;
