import React from "react";

const PageTwo = () => {
  return (
    <div className="border-4 border-red-600 mx-2 sm:flex sm:justify-between">
<div className="border-lime-300 border-4 my-8 mx-3 flex">
      <button className="w-full sm:max-w-20 h-16 border-2 border-black text-2xl font-semibold">1</button>
      <button className="w-full sm:max-w-20 h-16 border-2 border-black text-2xl font-semibold">2</button>
      <button className="w-full sm:max-w-20 h-16 border-2 border-black text-2xl font-semibold">3</button>
      <button className="w-full sm:max-w-20 h-16 border-2 border-black text-2xl font-semibold">4</button>
      <button className="w-full sm:max-w-20 h-16 border-2 border-black text-2xl font-semibold">5</button>
      <button className="w-full sm:max-w-20 h-16 border-2 border-black text-2xl font-semibold">6</button>
    </div>
    <div className="border-4 border-blue-600">
    <button className="w-full sm:max-w-20 h-16 border-2 border-black text-2xl font-semibold">0</button> 
    </div>
    </div>


    
  );
};

export default PageTwo;
