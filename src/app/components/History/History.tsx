"use client";
import React from "react";
import Link from "next/link";
import { useCalculatorContext } from "../../context/CalculatorContext/CalculatorContext";

const History = () => {
  const { getAllHistory } = useCalculatorContext();

  const getHistory = () => {
    getAllHistory();
  };

  return (
    <div className="flex flex-col gap-3">
      <h1>Click below for previous histroy 🥳🥳</h1>
      <Link
        href={"/history"}
        className="border-2 border-blue-950 rounded-lg"
        onClick={getHistory}
      >
        History
      </Link>
    </div>
  );
};

export default History;
