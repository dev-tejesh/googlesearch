import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
const StateContext = createContext();


export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [perpage,setPerpage]= useState([]);

  // const url =
  // "http://api.serpstack.com/search?access_key=af00c878ffc7ed6aa2212cc1f35c09ef&query=facebook&num=500";
  
  const getResults= async(url)=>{
  try{
  setLoading(true);
  const res = await axios.get(url)
  console.log(res.data.organic_results);
  console.log(res);
  await setResults(res.data.organic_results);
  await setPerpage(res.data.organic_results.slice(0,16))
  console.log(res);
  setLoading(false);
}
  catch(error){
    console.log(error)
  }

  }
  
  
  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading,perpage,setPerpage }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);