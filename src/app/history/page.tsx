"use client";
import React from "react";
import { useCalculatorContext } from "../context/CalculatorContext/CalculatorContext";

const HistoryData = () => {
  const { history } = useCalculatorContext();
  console.log(history);
  return (
    <div>
      {history.map((el) => (
        <div>
          <p>{el.val1}</p>
          <p>{el.operation}</p>
          <p>{el.val2}</p>
          <p>=</p>
          <p>{el.ans}</p>
        </div>
      ))}
    </div>
  );
};

export default HistoryData;
