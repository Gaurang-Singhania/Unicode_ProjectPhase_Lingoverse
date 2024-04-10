import React from 'react'
import { useNavigate } from "react-router-dom";
import arrow from "../assets/landingpage/Arrow 3.svg";

const communities = [
    'General language learning',
    'Business language learning',
    'Tourism language learning',
    'Academic language learning',
    'Cultural language learning',
  ];

const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <div className='relative bg-[#F8F8FF]' style={{ width: '25%', height: '100vh' }}>
                <img src={arrow} alt="back" className='absolute top-4 left-4 cursor-pointer' onClick={()=>navigate('/languageexerciseselection')}/>
                <div className='text-4xl font-extrabold mt-10 text-[#60359E] text-center'>Spanish</div>
                <div className='text-2xl transform translate-x-1/2 font-extrabold mt-10 text-[#3A3148] text-center border-b-2 border-[#3A3148] w-1/2'>Communities</div>
                <div className='text-center mt-8'>
                    {
                        communities.map(c=>{
                            return(
                                <p className='my-6 text-[#7D7D7D] text-2xl font-medium cursor-pointer hover:bg-purple-100 hover:mx-8 hover:py-2 hover:rounded-lg'>{c}</p>
                            )
                        })
                    }
                </div>
            </div>
  )
}

export default Sidebar