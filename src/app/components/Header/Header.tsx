import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col gap-3">
      <h1>Welcome to best Calculator App 💕❤️</h1>
      <h3>Select Currency : </h3>
      <div className="flex justify-around">
        <button className="border-2 border-green-700 p-2 rounded-lg">
          Dollar $
        </button>
        <button className="border-2 border-green-700 p-2 rounded-lg">
          Euro #
        </button>
      </div>
    </div>
  );
};

export default Header;
