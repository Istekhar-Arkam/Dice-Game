import React from 'react'
import dices1 from "../assets/image/dices1.png"
const PageOne = () => {
  return (
    <>
    {/* container */}
    <div className="flex justify-center m-2 ">
    <div className="border-4 border-red-600 max-w-6xl px-3 py-3">
     <img src={dices1} alt="dice-image" /></div>
     <div>
      <h1>Istekhar Arkam</h1>
     </div>
    </div>
    </>
    
  )
}

export default PageOne