import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl ">
            We'er delighted to have you,{" "}
            <span className="text-purple-500">Here! :)</span>
          </h1>
          <p className="mt-6">
            Books give us knowledge and thrlls to creativity and take to a
            beautifullnworld of imagination. They inspire us to do great things
            in life and overcome failure. they give us pleasure of life .They
            make us laugh,cry, kaes us understand the real meaning and essence
            of living.They hepl us diffentiate between wrong and right,they
            never leave us go and always stay with us.I conclude by saying{" "}
            <span className="text-purple-700">
              Man cannot live without books
            </span>
          </p>
          <Link to="/">
            <button className="btn mt-6 btn-secondary">Back</button>
          </Link>
        </div>
        <div className="mt-12  grid grid-cols-1 md:grid-cols-3">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
