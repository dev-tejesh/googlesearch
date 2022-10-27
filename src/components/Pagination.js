import React from "react";

const Pagination = ({ data, pageHandler,currentpageno}) => {
  let pageNumbers = [];
  for (let i = 1; i < Math.ceil(data.length / 16); i++) {
    pageNumbers.push(i);
  }
 
  const defaultclass = "bg-transparent hover:bg-blue-300 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 active:bg-violet-700 hover:border-transparent rounded"
  const selected = "bg-blue-500  text-white font-semibold  py-2 px-2 border border-blue-500 active:bg-violet-700 hover:border-transparent rounded"
  return (
    <div>
      <div>
        <center className="mt-6 ">
          {pageNumbers.map((page) => (
            (page!=currentpageno)?
            <button
              className={defaultclass}
              onClick={() => pageHandler(page)}
            >
              {page}
            </button>:<button className={selected}>{page}</button>
          ))}
        </center>
      </div>
     
    </div>
  );
};

export default Pagination;
