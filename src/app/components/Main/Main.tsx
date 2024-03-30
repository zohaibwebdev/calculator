import React from "react";
import Header from "../Header/Header";
import Calculator from "../Calculator/Calculator";
import History from "../History/History";

const Main = () => {
	return (
		<div className="flex flex-col max-w-[400px] bg-gray-800 text-white p-4 rounded-lg gap-5">
			<Header />
			<Calculator />
			<History />
		</div>
	);
};

export default Main;
