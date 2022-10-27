import React from "react";
import { useDebounce } from "use-debounce";

import { useStateContext } from "../contexts/StateContextProvider";
import { useEffect, useState } from "react";
const Search = () => {
  const { setSearchTerm ,searchTerm,getResults} = useStateContext();
  const [text, setText] = useState("");
  const [debouncedValue] = useDebounce(text, 300);
  
  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);
  
  return (
    <div>
      <input
        value={text}
        type="text"
        className=" w-56 lg:w-96  md:w-96 h-2 dark:bg-gray-200  border rounded-2xl shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search Google or type URL"
        onChange={(e) => setText(e.target.value)
    
        }
      />
      {text !== "" && (
       
        <button
          type="button"
          className="text-gray-500 text-2xl px-3"
          onClick={() => setText("")}
        >
          x
        </button>
      )}
    </div>
  );
};

export default Search;
