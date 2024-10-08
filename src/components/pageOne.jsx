import React from "react";
import dices1 from "../assets/image/dices1.png";
import Button from "../globalComponents/button";

const PageOne = (toggle) => {
  return (
    <>
      {/* container */}
      <div className="m-2 my-15 sm:flex sm:my-20 lg:mx-20 height:auto">
        <div className="max-w-6xl px-3 py-3 lg:mx-16">
          <img src={dices1} alt="dice-image" />
        </div>
        <div className="flex flex-col items-center sm:my-32 sm:whitespace-nowrap">
          <h1 className="uppercase font-bold text-5xl lg:text-6xl py-10 lg:pt-20">
            Dice Game
          </h1>
          <Button/>
        </div>
      </div>
    </>
  );
};

export default PageOne;
