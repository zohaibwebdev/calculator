import React, { FC, useEffect, useState } from "react";
import {
  CalculatorContainerProps,
  Icalculator,
  defaultValues,
} from "./interfaces";
import { CalculatorProvider } from "./CalculatorContext";
import { json } from "stream/consumers";

const CalculatorContextContainer: FC<CalculatorContainerProps> = ({
  children,
}) => {
  const [state, setState] = useState<Icalculator>(defaultValues);

  const add = (val1: number, val2: number) => {
    const operation = "+";
    const ans = val1 + val2;
    setState((prev) => {
      return {
        ...prev,
        ans,
        history: [
          ...prev.history,
          {
            val1,
            val2,
            ans,
            operation: "+",
          },
        ],
      };
    });
    postData(val1, val2, ans, operation);
  };
  const substract = (val1: number, val2: number) => {
    const operation = "-";
    const ans = val1 - val2;
    setState((prev) => {
      return {
        ...prev,
        ans,
        history: [
          ...prev.history,
          {
            val1,
            val2,
            ans,
            operation: "-",
          },
        ],
      };
    });
    postData(val1, val2, ans, operation);
  };
  const multiply = (val1: number, val2: number) => {
    const operation = "*";
    const ans = val1 * val2;
    setState((prev) => {
      return {
        ...prev,
        ans,
        history: [
          ...prev.history,
          {
            val1,
            val2,
            ans,
            operation: "*",
          },
        ],
      };
    });
    postData(val1, val2, ans, operation);
  };
  const divide = (val1: number, val2: number) => {
    const operation = "/";
    const ans = val1 / val2;
    setState((prev) => {
      return {
        ...prev,
        ans,
        history: [
          ...prev.history,
          {
            val1,
            val2,
            ans,
            operation: "/",
          },
        ],
      };
    });
    postData(val1, val2, ans, operation);
  };
  const getAllHistory = async () => {
    let res = await fetch("http://localhost:3001/api/histroy/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setState((prev) => {
      return {
        ...prev,
        history: data.history,
      };
    });
  };
  const postData = async (val1, val2, ans, operation) => {
    let res = await fetch("http://localhost:3001/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        val1,
        val2,
        operation,
        ans,
      }),
    });

    if (!res.ok) {
      throw new Error("kuch tu galat ho gya ha bahiyaaaa😭");
    }
    console.log(res);
    const d = await res.json();
    console.log(d);
  };
  useEffect(() => {
    getAllHistory();
  }, []);
  return (
    <CalculatorProvider
      value={{ ...state, add, substract, multiply, divide, getAllHistory }}
    >
      {children}
    </CalculatorProvider>
  );
};

export default CalculatorContextContainer;
