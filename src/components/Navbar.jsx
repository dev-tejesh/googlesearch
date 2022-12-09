import React from "react";
import Search from "./Search";

const Navbar = ({ setDarkTheme, darkTheme }) => {
  return (
    <div className={darkTheme?"flex flex-wrap bg-gray-800 h-32  items-center justify-center":"flex  bg-white h-32 flex-wrap items-center justify-center"}>
      <div className={darkTheme?"hidden lg:block md:block text-white font-bold text-2xl lg:px-5 md:px-3":"hidden lg:block md:block text-blue-700 font-bold text-2xl lg:px-5 md:px-3"}>
        Google
      </div>
      <Search />
      <center>
      <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 pt-2 bg-white border rounded-full px-2 py-1 hover:shadow-lg">{darkTheme ? '💡 Light' : '🌙 Dark'}</button>
      </center>
    </div>
  );
};

export default Navbar;
