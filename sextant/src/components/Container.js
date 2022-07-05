import React from 'react'

const Container = ({setDataPoint,children}) => {

  return (
    <div>
      <div className="relative min-h-screen md:flex">
      
      <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div 
        className="sidebar bg-blue-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
          <span className="text-center text-2xl font-extrabold py-2.5 px-4 ">Sextant</span>
         <nav>
          <a 
            href="/" 
            onClick={(e)=>{
              e.preventDefault();
              return(
                setDataPoint(1)
              )
            }}
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 hover:text-white ">
            IP Address
          </a>
          <a 
            href="/" 
            onClick={(e)=>{
              e.preventDefault();
              return(
                setDataPoint(2)
              )
            }}
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 hover:text-white">
            Latency INFO
          </a>
          <a href="/"
            onClick={(e)=>{
              e.preventDefault();
              return(
                setDataPoint(3)
              )
            }}
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 hover:text-white ">
            DataPoint 3
          </a>
          <a 
            href="/" 
            onClick={(e)=>{
              e.preventDefault();
              return(
                setDataPoint(4)
              )
            }}
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 hover:text-white ">
            DataPoint 4
          </a>
          </nav>
        
        </div>

        <div className="flex-1 p-10 text-2xl font-bold">
           {children}
        </div>

      </div>
    </div>
  )
}

export default Container