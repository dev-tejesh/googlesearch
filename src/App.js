import React, { useState } from 'react';

// import { Footer } from './components/Footer';
import  Navbar  from './components/Navbar';
import { Changes, Routes } from './components/Changes';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'bg-gray-800' : 'bg-white'}>
    {/* // <div className='bg-red-800'> */}
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Changes darkTheme={darkTheme}/>
        
      </div>
    </div>

  );
};

export default App;
// import React from 'react'
// import { ReactDOM } from 'react'
// import { Links } from './components/Links'
// import Navbar from './components/Navbar'
// const App = () => {
//   return (
//     <div>
//     <Navbar></Navbar>
    
   
//     </div>
//   )
// }

// export default App