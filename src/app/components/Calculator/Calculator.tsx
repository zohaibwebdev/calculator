import React, { useContext, useState } from "react";
import { useCalculatorContext } from "../../context/CalculatorContext/CalculatorContext";

const Calculator = () => {
  const [val1, setVal1] = useState<number>(0);
  const [val2, setVal2] = useState<number>(0);
  const { add, substract, multiply, divide, ans } = useCalculatorContext();
  const handleAdd = () => {
    add(val1, val2);
  };
  const handleSubstract = () => {
    substract(val1, val2);
  };
  const handleMultiply = () => {
    multiply(val1, val2);
  };
  const handleDivide = () => {
    divide(val1, val2);
  };
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-center">Enter Values :</h1>
      <div className="flex flex-col gap-5">
        <input
          type="number"
          className="bg-transparent border-b-2 border-white outline-none"
          value={val1}
          onChange={(e) => setVal1(parseInt(e.target.value))}
        />
        <input
          type="number"
          value={val2}
          onChange={(e) => setVal2(+e.target.value)}
          className="bg-transparent border-b-2 border-white outline-none"
        />
      </div>
      <h1 className="text-center">Select Operation :</h1>
      <div className="flex justify-around">
        <button
          className="border-2 border-white p-2 rounded-lg"
          onClick={handleAdd}
        >
          +
        </button>
        <button
          className="border-2 border-white p-2 rounded-lg"
          onClick={handleSubstract}
        >
          -
        </button>
        <button
          className="border-2 border-white p-2 rounded-lg"
          onClick={handleMultiply}
        >
          *
        </button>
        <button
          className="border-2 border-white p-2 rounded-lg"
          onClick={handleDivide}
        >
          /
        </button>
      </div>
      <div>
        <h3>Answer is : {ans}</h3>
      </div>
    </div>
  );
};

export default Calculator;
