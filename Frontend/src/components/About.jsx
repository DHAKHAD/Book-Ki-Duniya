import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contect() {
  return (
    <>
      <div className="flex h-screen   items-center justify-center ">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
          <div className="w-full order-2 md:order-1  mt:6 md:mt-2">
            <div className="space-y-4">
              <h1 className="text-5xl text-center font-extrabold">
                About Us,{" "}
              </h1>
              <p>
                {" "}
                This activity-based teaching-learning material is made at two
                levels: free and paid. The books, with rich illustrations,
                invite children to actively colour, draw and write in them,
                there by making the books as well as the Hindi language their
                own. Books give us knowledge and thrlls to creativity and take
                to a beautifullnworld of imagination. They inspire us to do
                great things in life and overcome failure. they give us pleasure
                of life .They make us laugh,cry, kaes us understand the real
                meaning and essence of living.They hepl us diffentiate between
                wrong and right,they never leave us go and always stay with us.I
                conclude by saying{" "}
                <span className="text-purple-700">
                  Man cannot live without books{" "}
                </span>
                <div className="flex space-y-4 justify-center  mt-4 ">
                  <Link
                    to={"/"}
                    className="bg-pink-500 text-white  rounded-md px-3 py-1 hover:bg-blue-600 duration-200"
                    onClick={() =>
                      document.getElementById("my_modal_3").close()
                    }
                  >
                    Home
                  </Link>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
      <Footer />
    </>
  );
}

export default Contect;
