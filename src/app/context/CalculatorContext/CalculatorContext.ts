import { createContext, useContext } from "react";
import { defaultValues } from "./interfaces";

const CalculatorContext = createContext(defaultValues);

export const CalculatorProvider = CalculatorContext.Provider;

export const useCalculatorContext = () => useContext(CalculatorContext);
