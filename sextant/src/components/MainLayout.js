import React,{useState} from 'react'
import Container from './Container';
import Ip from './Endpoints/Ip';
import Dp3 from './Endpoints/Dp3';
import Dp4 from './Endpoints/Dp4'
import Latency from './Endpoints/Latency';



const MainLayout = () => {

    const [dataPoint,setDataPoint]=useState(1);
    const [IpType,setIpType]=useState(4);
    const [isClicked,setIsClicked] =useState(false);
    const [render,setRender]=useState(false);
 


    const onClickHandler4=()=>{
            setIpType(4);
            setIsClicked(true);
    }

    const onClickHandler6=()=>{
            setIpType(6);
            setIsClicked(true);

    }

  return (
    <div>
        {(dataPoint===1) && 
            <Container dataPoint={dataPoint} setDataPoint={setDataPoint}>
                    <h1 className='font-bold text-center p-5'>IP Information</h1>
                    <div className='mt-4 space-x-4 sm:mt-6 p-3 flex justify-center '>
                        <button onClick={onClickHandler4} className='inline-block px-5 py-3 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base'>Get my Ip4 Address</button>
                        <button onClick={onClickHandler6} className='inline-block px-5 py-3 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base'>Get my Ip6 Address</button>
                    </div>
                <div className='flex justify-center sm:justify-start sm:ml-10 mt-10 mr-10'>
                        {
                        (isClicked) && <Ip IpType={IpType} />
                        }
                </div>
            </Container>
        }
        {(dataPoint===2) && 
            <Container dataPoint={dataPoint} setDataPoint={setDataPoint}>
                <div>
                    <h1 className='font-bold text-center p-5'>Latency Information</h1>
                    <div className='mt-2 space-x-4 sm:mt-1 sm:mr-5 p-3 flex justify-center'>
                    <button
                    className='inline-block px-5 m-4 py-3 ml-5 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base sm:ml-20' 
                    onClick={()=>setRender(!render)}
                    >Get the Latency Info Now</button>
                    </div>
                </div>
                        {<Latency render={render}/>}
            </Container>
        }
        {(dataPoint===3) && 
            <Container dataPoint={dataPoint} setDataPoint={setDataPoint}>
                {<Dp3/>}
            </Container>
        }
        {(dataPoint===4) && 
            <Container dataPoint={dataPoint} setDataPoint={setDataPoint}>
                {<Dp4/>}
            </Container>
        }




    </div>
  )
}

export default MainLayout