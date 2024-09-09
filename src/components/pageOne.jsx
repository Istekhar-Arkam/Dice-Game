import React from "react";
import dices1 from "../assets/image/dices1.png";
import Button from "../globalComponents/button";
const PageOne = () => {
  return (
    <>
      {/* container */}
      <div className="m-2 my-15 sm:flex sm:my-20 lg:mx-20">
        <div className="max-w-6xl px-3 py-3 lg:mx-20">
          <img src={dices1} alt="dice-image" />
        </div>
        <div className="flex flex-col items-center sm:my-32 sm:whitespace-nowrap">
          <h1 className="uppercase font-bold text-5xl py-10">Dice Game</h1>
          <Button />
        </div>
      </div>
    </>
  );
};

export default PageOne;
