import React from "react";

const Calculator = () => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-center">Enter Values :</h1>
      <div className="flex flex-col gap-5">
        <input
          type="number"
          className="bg-transparent border-b-2 border-white outline-none"
        />
        <input
          type="number"
          className="bg-transparent border-b-2 border-white outline-none"
        />
      </div>
      <h1 className="text-center">Select Operation :</h1>
      <div className="flex justify-around">
        <button className="border-2 border-white p-2 rounded-lg">+</button>
        <button className="border-2 border-white p-2 rounded-lg">-</button>
        <button className="border-2 border-white p-2 rounded-lg">*</button>
        <button className="border-2 border-white p-2 rounded-lg">/</button>
      </div>
      <button className="border-2 border-white rounded-lg">=</button>
      <div>
        <h3>Answer is : 0</h3>
      </div>
    </div>
  );
};

export default Calculator;
