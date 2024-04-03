import { ReactNode } from "react";

export interface IhistoryObject {
  val1: number;
  val2: number;
  ans: number;
  operation: string;
}

export interface Icalculator {
  history: Array<IhistoryObject>;
  add: (val1: number, val2: number) => void;
  substract: (val1: number, val2: number) => void;
  multiply: (val1: number, val2: number) => void;
  divide: (val1: number, val2: number) => void;
  getAllHistory: () => void;
  ans: number;
}

export const defaultValues: Icalculator = {
  substract: function (): number {
    throw new Error("Function not implemented.");
  },
  multiply: function (): number {
    throw new Error("Function not implemented.");
  },
  divide: function (): number {
    throw new Error("Function not implemented.");
  },
  add: function (): number {
    throw new Error("Function not implemented.");
  },
  history: [],
  getAllHistory: function (): void {
    throw new Error("Function not implemented.");
  },
  ans: 0
};

export interface CalculatorContainerProps {
  children: ReactNode;
}
