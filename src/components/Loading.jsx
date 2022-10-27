import React from 'react';
// import Loader from 'react-loader-spinner';
import * as Loader from "react-loader-spinner";
import { BallTriangle } from 'react-loader-spinner'
export const Loading = () => (
  <div className='flex items-center justify-center min-h-screen'>
  <BallTriangle 
  height={100}
  width={100}
  radius={5}
  color="#00BFFF"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>
</div> 
);