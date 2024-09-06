import React from "react";
import banner from "../../public/banner.jpg";
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt:12 md:mt-32">
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold">
              Book for every chapter of your life,{" "}
              <span className="text-purple-500">
                Discover world between the page
              </span>
            </h1>
            <p>
              {" "}
              Books give us knowledge and thrlls to creativity and take to a
              beautifullnworld of imagination. They inspire us to do great
              things in life and overcome failure. they give us pleasure of life
              .They make us laugh,cry, kaes us understand the real meaning and
              essence of living.They hepl us diffentiate between wrong and
              right,they never leave us go and always stay with us.I conclude by
              saying{" "}
              <span className="text-purple-700">
                Man cannot live without books
              </span>
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary">Get Started</button>
        </div>

        <div className="  order-1 w-full md:w-1/2">
          <div className="space-y-8">
            <img src={banner} className=" w-85 h-85" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
