import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Login() {
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
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Sing_In</h3>
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
                Not Register Yet?{" "}
                <Link
                  to="/Signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Sing-Up
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
