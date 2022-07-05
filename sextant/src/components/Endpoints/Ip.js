import React, { useEffect, useState } from 'react'

const Ip = ({IpType}) => {

  const [data6, setData6]=useState();
  const [data4, setData4]=useState();

  const getData= ()=>{
    fetch('https://api64.ipify.org?format=json')
    .then(results => results.json())
    .then(data => {
      setData4(data.ip)
    },
    (error)=>{
      setData4("NO IP4 FOUND")
    }
    );
  }

  const getData6= ()=>{
    fetch('https://api.ipify.org?format=json')
    .then(results => results.json())
    .then(data => {
      setData6(data.ip)
    },
    (error)=>{
      setData6("NO IP6 FOUND")
    }
    );
  }

  useEffect(()=>{
      getData();
      getData6();

  },[])


  return (
    <div>

     {
      (IpType===4) && <h1 className='font-bold text-center text-xl'>{data4}</h1>
     }
     {
      (IpType===6) && <h1 className='font-bold text-center text-xl'>{data6}</h1>
     }

    </div>
  )
}

export default Ip