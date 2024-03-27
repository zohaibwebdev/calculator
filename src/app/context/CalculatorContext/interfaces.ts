import { ReactNode } from "react";

export interface Icalculator {
  add: (val1: number, val2: number) => number;
  substract: (val1: number, val2: number) => number;
  multiply: (val1: number, val2: number) => number;
  divide: (val1: number, val2: number) => number;
  ans: number;
}

export const defaultValues: Icalculator = {
  substract: function (val1: number, val2: number): number {
    throw new Error("Function not implemented.");
  },
  multiply: function (val1: number, val2: number): number {
    throw new Error("Function not implemented.");
  },
  divide: function (val1: number, val2: number): number {
    throw new Error("Function not implemented.");
  },
  add: function (val1: number, val2: number): number {
    throw new Error("Function not implemented.");
  },
  ans: 0,
};

export interface CalculatorContainerProps {
  children: ReactNode;
}
