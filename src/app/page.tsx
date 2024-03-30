"use client";
import React from "react";
import Main from "./components/Main/Main";
import CalculatorContextContainer from "./context/CalculatorContext/CalculatorContextContainer";

const App = () => {
	return (
		<div className="min-h-[100vh] bg-gray-900 text-white flex justify-center items-center">
			<CalculatorContextContainer>
				<Main />
			</CalculatorContextContainer>
		</div>
	);
};

export default App;
