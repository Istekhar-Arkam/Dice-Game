import React from "react";

const Button = () => {
  return (
    <>
      <button
        type="button"
        class="rounded-md bg-black px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black border-2 border-black hover:font-semibold"
      >
        Play Now
      </button>
    </>
  );
};

export default Button;
