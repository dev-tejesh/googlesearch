import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Results } from "./Results";

export const Changes = ({darkTheme}) => (
  <div className={darkTheme?"bg-gray-800":"bg-white"}>
  
    <Routes>
      <Route path="/" element={ <Navigate to="/search" /> }>
        {/* <Navigate to="/search" /> */}
      </Route>
      <Route path="/search" element={<Results darkTheme={darkTheme}/>}></Route>
      <Route path="/images" element={<Results />}></Route>
      <Route path="/news" element={<Results />}></Route>
      <Route path="/videos" element={<Results />}></Route>
    </Routes>
  </div>
);
