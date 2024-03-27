"use client";
import React, { FC, useState } from "react";
import {
  CalculatorContainerProps,
  Icalculator,
  defaultValues,
} from "./interfaces";
import { CalculatorProvider } from "./CalculatorContext";

const CalculatorContextContainer: FC<CalculatorContainerProps> = ({
  children,
}) => {
  const [state, setState] = useState<Icalculator>(defaultValues);
  const add = (val1: number, val2: number) => {
    const ans = val1 + val2;
    return ans;
  };
  const substract = (val1: number, val2: number) => {
    const ans = val1 - val2;
    return ans;
  };
  const multiply = (val1: number, val2: number) => {
    const ans = val1 * val2;
    return ans;
  };
  const divide = (val1: number, val2: number) => {
    const ans = val1 / val2;
    return ans;
  };
  return (
    <CalculatorProvider value={{ ...state, add, substract, multiply, divide }}>
      {children}
    </CalculatorProvider>
  );
};

export default CalculatorContextContainer;
