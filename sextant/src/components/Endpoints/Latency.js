/* eslint-disable no-unused-vars */
import React, {} from 'react'

const timePoints=[];

const Latency = ({render}) => {

      const ws = new WebSocket('ws://localhost:55455/');

      ws.onopen = function() {
        console.log('WebSocket Client Connected');
      };

      ws.onmessage = function(e) {
        timePoints.push(e.data)
        ws.close()
      };
  
  return (

    <div>
      
        {
           (timePoints[1] && timePoints[0]) && 
           
           <div>

           <h1 className='font-bold text-center p-5'>{timePoints[timePoints.length-1]-timePoints[timePoints.length-2]}<span className='ml-3'>milli seconds</span></h1>
           </div>
        }
    </div>
  )
}

export default Latency


 