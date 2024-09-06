import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div className=" w-[600px] border-[3px] shadow-md p-5 rounded-md">
        <div className=" modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to={"/"}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Sing_Up</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="name"
                placeholder="Enter your name"
                className="w-80 px-3 py-2 rounded-md outline-none"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/*email*/}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-80 px-3 py-2 rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/*pasword*/}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="Password"
                placeholder="Enter your password"
                className="w-80 px-3 py-2 rounded-md outline-none"
                {...register("Password", { required: true })}
              />
              <br />
              {errors.Password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex space-y-4  mt-4 justify-between">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-600 duration-200">
                Sign-In
              </button>
              <p>
                Already Register?{" "}
                <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Sign-In
                </button>{" "}
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
