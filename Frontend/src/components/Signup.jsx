import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate, NavLink } from "react-router-dom";
import Login from "./Login";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post(
        "http://localhost:4001/user/signup",
        userInfo
      );
      console.log(response.data);
      if (response.data) {
        toast.success("Signup Successfully");
        navigate(from, { replace: true });
        localStorage.setItem("Users", JSON.stringify(response.data.user));
      }
    } catch (error) {
      if (error.response) {
        console.error(error);
        toast.error("Error: " + error.response.data.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#EBEFFF]">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800">Signup</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            ✕
          </Link>
          {/* Full Name Field */}
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your fullname"
              className={`w-full px-4 py-2 border rounded-md ${
                errors.fullname ? "border-red-500" : "border-gray-300"
              }`}
              {...register("fullname", { required: "Full name is required" })}
            />
            {errors.fullname && (
              <p className="text-sm text-red-500 mt-1">
                {errors.fullname.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-2 border rounded-md ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className={`w-full px-4 py-2 border rounded-md ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            Signup
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/" className="text-blue-500 hover:underline">
              Login
            </Link> 
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
