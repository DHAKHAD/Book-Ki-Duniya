import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contect() {
  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <div className=" w-[1000px] border-[12px] shadow-md p-10 rounded-md item-center">
          <h3 className="   text-center justify-center text-5xl font-bold">
            Contect Us
          </h3>
          <div className="mt-4 space-y-2 text-center">
            <span>Name</span>
            <br />
            <input
              type="name"
              placeholder="Enter your name"
              className="w-1000  px-20 py-2 text-center rounded-md outline-1"
            />
          </div>
          {/*email*/}
          <div className="mt-4 space-y-2 text-center">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-80 px-3 py-2 text-center rounded-md outline-1"
            />
          </div>
          <div className="mt-4 space-y-2 text-center">
            <span>Message</span>
            <br />
            <input
              type="Message"
              placeholder="Enter your message"
              className="w-80 px-10 py-8 text-center rounded-md outline-1"
            />
          </div>
        </div>
      </div>
      <Navbar />
      <Footer />
    </>
  );
}

export default Contect;
