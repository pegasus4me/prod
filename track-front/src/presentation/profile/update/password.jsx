import React from "react";
import { updadeUserPassword } from "../../../infrastructure/api/auth";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Password = () => {
  const { register, handleSubmit } = useForm();
  const updateUserPassword = async (data) => {
    try {
      if (data.password === data.confirmNewPassword) {
        const { password, confirmNewPassword } = data;
        let update = await updadeUserPassword({
          new_password: password,
        });
        if (update.msg === "password updated") return toast.success("Password successfully updated");
        else return toast.error("Passwords do not match");
      }
    } catch (error) {
      console.log(error);
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
        Update your Password ⚡
      </h1>

      <form
        onSubmit={handleSubmit(updateUserPassword)}
        className="border border-gray rounded-md p-3 flex flex-col justify-center align-center max-w-[500px] m-auto  h-64] mt-28 bg-neutral-50 shadow-md"
      >
        <label className="font-display font-medium text-slate-800 mb-2">
          New Password
        </label>
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="password"
          className="border border-gray-300 p-1 mb-5 rounded-sm focus:outline-none focus:ring-4 focus:ring-blue-300"
        />
        <label className="font-display font-medium text-slate-800 mb-2">
          confirm New Password
        </label>
        <input
          {...register("confirmNewPassword", { required: true })}
          type="password"
          placeholder="password"
          className="border border-gray-300 p-1  mb-5 rounded-sm focus:outline-none focus:ring-4 focus:ring-blue-300"
        />

        <input
          type="submit"
          className="p-1 rounded-sm text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center"
        />
      </form>

      <Toaster position="top-left" reverseOrder={false} />
    </div>
  );
};

export default Password;
