import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";
import { useStateContext } from "../contexts/StateContextProvider";
import { Loading } from "./Loading";
import Pagination from "./Pagination";
// const baseURL = "https://jsonplaceholder.typicode.com/posts";

export const Results = ({darkTheme}) => {
  const { results, loading, getResults, searchTerm ,perpage,setPerpage} = useStateContext();
  const location = useLocation();
  const [post, setPost] = React.useState(null);
  const url = `http://api.serpstack.com/search?access_key=48dadaaf0ac214f9c1f538b02c8034c4&query=${searchTerm}&num=400`;
  const [currentpageno,setcurrentpageNo] = useState(1);
  useEffect(() => {
    if (searchTerm !== "") {
      getResults(url);
    }
  }, [searchTerm, location.pathname]);
 
  if (loading) return <Loading/>;
  const pageHandler =(pageNumber)=>{
    setcurrentpageNo(pageNumber)
    setPerpage(results.slice((pageNumber*16)-16,pageNumber*16))

  }

  switch (location.pathname) {
    case "/search":
      return (
        <div>
        <div
        className={darkTheme?"flex bg-gray-800 flex-wrap justify-around space-y-6  pl-2 pr-2 mx-4":"flex bg-white flex-wrap justify-around space-y-6  pl-2 pr-2 mx-4"}>
       
         
          {perpage.map((item) => {
            return (
              
              <div key={item.position} className="lg:w-2/5 md:w-full w-full">
                <a href={item.url} target="_blank" rel="noreferrer">
                  <p className={darkTheme?"text-sm text-white":"text-sm"}>{item.url.length > 30 ? item.url.substring(0, 30) : item.url}</p>
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                    {item.title}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
        
        <Pagination data={results} pageHandler={pageHandler} currentpageno={currentpageno}/>
        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap justify-center items-center ">
          {results?.image_results?.map(
            ({ image, link: { href, title } }, index) => (
              <a
                href={href}
                target="_blank"
                key={index}
                rel="noreferrer"
                className="sm:p-3 p-5"
              >
                <img src={image?.src} alt={title} loading="lazy" />
                <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
              </a>
            )
          )}
        </div>
      );
    case "/news":
      return (
        <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
          {results?.entries?.map(({ id, links, source, title }) => (
            <div key={id} className="md:w-2/5 w-full ">
              <a
                href={links?.[0].href}
                target="_blank"
                rel="noreferrer "
                className="hover:underline "
              >
                <p className="text-lg dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <div className="flex gap-4">
                <a
                  href={source?.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline hover:text-blue-300"
                >
                  {" "}
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    case "/videos":
      return (
        <div className="flex flex-wrap ">
          {results?.results?.map((video, index) => (
            <div key={index} className="p-2">
              <ReactPlayer
                url={video.additional_links?.[0].href}
                controls
                width="355px"
                height="200px"
              />
            </div>
          ))}
        </div>
      );
    default:
      return "Error...";
  }
};

// import React from 'react'

// const Content = () => {
//   return (
//     <div className='flex  flex-col justify-center  pt-5'>
//         <a href="http://" className='text-center text-xs'>https://www.w3schools.in</a>
//         <div className='text-center text-blue-500 no-underline hover:underline-offset-4 hover:underline cursor-pointer'>w3schools-wikipedia</div>
//     </div>
//   )
// }

// export default Content
