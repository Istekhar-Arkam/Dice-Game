import React from "react";

const PageTwo = () => {
  return (
    <div className="border-4 border-red-600 my-8 mx-3 sm:flex sm:justify-between sm:mx-10 sm:mt-20">

      <div className="border-4 border-blue-600">

        <h1 className="w-full h-20 border-2 border-black text-6xl font-semibold flex items-center justify-center">
          0
        </h1>
        <p className="text-lg font-semibold text-center sm:pt-2">Total Score</p>
      </div>
      <div className="border-lime-300 border-4 my-8 mx-3 flex">
        <button className="w-full  h-14 border-2 border-black text-2xl font-semibold">
          1
        </button>
        <button className="w-full h-14 border-2 border-black text-2xl font-semibold">
          2
        </button>
        <button className="w-full h-14 border-2 border-black text-2xl font-semibold">
          3
        </button>
        <button className="w-full h-14 border-2 border-black text-2xl font-semibold">
          4
        </button>
        <button className="w-full  h-14 border-2 border-black text-2xl font-semibold">
          5
        </button>
        <button className="w-full  h-14 border-2 border-black text-2xl font-semibold">
          6
        </button>
      </div>
    </div>
  );
};

export default PageTwo;
