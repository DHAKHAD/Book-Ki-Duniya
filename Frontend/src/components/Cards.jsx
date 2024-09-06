import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3">
        <div className="card glass w-96 bg-base-100 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img src={item.image} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">
                <button className="badge badge-secondary">
                  {item.category}
                </button>
              </div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <button className="badge badge-outline">${item.price}</button>
              <button className="cursor-pointer p-2 rounded-full border-[2px] hover:bg-pink-500 hover:text-white  duration-150">
                buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
