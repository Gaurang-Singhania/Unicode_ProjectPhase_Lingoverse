import React,{useState} from 'react'
import Navbar from './Navbar'
import { useNavigate } from "react-router-dom";
import arrow from "../assets/landingpage/Arrow 3.svg";
import { TiTick } from "react-icons/ti";
import { FaLock } from "react-icons/fa";

const Levels = () => {
    const navigate=useNavigate()
    const levelsInfo = [
        { level: 'Level 1', description: 'Beginner' },
        { level: 'Level 2', description: 'Intermediate' },
        { level: 'Level 3', description: 'Advanced' },
        { level: 'Level 4', description: 'Expert' },
        { level: 'Level 5', description: 'Master' },
    ];

    const [unlockedLevels, setUnlockedLevels] = useState([true, false, false, false, false]);

    const handleStart = (index) => {
        // Unlock the next level
        const newUnlockedLevels = [...unlockedLevels];
        if (index < unlockedLevels.length - 1) {
            newUnlockedLevels[index + 1] = true;
        }
        setUnlockedLevels(newUnlockedLevels);
        navigate('/quiz');
    };
  return (
    <div>
        <Navbar />
        <div className='min-h-screen w-screen relative'>
        <img src={arrow} alt="back" className='absolute z-20 top-16 left-4 cursor-pointer bg-white p-4 rounded-md shadow-lg' onClick={()=>navigate('/languageexerciseselection')}/>
            {/* <div className='flex flex-col justify-center items-center gap-8 absolute h-screen w-screen py-8'>
                <div className='h-[20vh] w-[40%] bg-[#907AF9] rounded-lg shadow-xl'>
                    <div className='flex h-full'>
                    <div className='flex flex-col justify-evenly'>
                        <div className='pl-8 flex gap-8'>
                        <div className='text-xl font-semibold'>Level 1</div>
                        <div className='text-lg '>Beginner</div>
                        </div>
                        <button className='text-lg font-semibold bg-white px-8 rounded-lg py-2 ml-6 text-[#60359E]'>Start</button>
                    </div>
                    <div className=''></div>
                    </div>
                </div>
                <div className='h-[20vh] w-[40%] bg-[#907AF9] rounded-lg shadow-xl'>
                    <div className='flex h-full'>
                    <div className='flex flex-col justify-evenly'>
                        <div className='pl-8 flex gap-8'>
                        <div className='text-xl font-semibold'>Level 1</div>
                        <div className='text-lg '>Beginner</div>
                        </div>
                        <button className='text-lg font-semibold bg-white px-8 rounded-lg py-2 ml-6 text-[#60359E]'>Start</button>
                    </div>
                    <div className=''></div>
                    </div>
                </div>
                <div className='h-[20vh] w-[40%] bg-[#907AF9] rounded-lg shadow-xl'>
                    <div className='flex h-full'>
                    <div className='flex flex-col justify-evenly'>
                        <div className='pl-8 flex gap-8'>
                        <div className='text-xl font-semibold'>Level 1</div>
                        <div className='text-lg '>Beginner</div>
                        </div>
                        <button className='text-lg font-semibold bg-white px-8 rounded-lg py-2 ml-6 text-[#60359E]'>Start</button>
                    </div>
                    <div className=''></div>
                    </div>
                </div>
                <div className='h-[20vh] w-[40%] bg-[#907AF9] rounded-lg shadow-xl'>
                    <div className='flex h-full'>
                    <div className='flex flex-col justify-evenly'>
                        <div className='pl-8 flex gap-8'>
                        <div className='text-xl font-semibold'>Level 1</div>
                        <div className='text-lg '>Beginner</div>
                        </div>
                        <button className='text-lg font-semibold bg-white px-8 rounded-lg py-2 ml-6 text-[#60359E]'>Start</button>
                    </div>
                    <div className=''></div>
                    </div>
                </div>
                <div className='h-[20vh] w-[40%] bg-[#907AF9] rounded-lg shadow-xl'>
                    <div className='flex h-full'>
                    <div className='flex flex-col justify-evenly'>
                        <div className='pl-8 flex gap-8'>
                        <div className='text-xl font-semibold'>Level 1</div>
                        <div className='text-lg '>Beginner</div>
                        </div>
                        <button className='text-lg font-semibold bg-white px-8 rounded-lg py-2 ml-6 text-[#60359E]'>Start</button>
                    </div>
                    <div className=''></div>
                    </div>
                </div>
            </div> */}
             <div className='flex flex-col justify-center items-center gap-8 absolute z-10 h-screen w-screen py-8'>
            {levelsInfo.map((levelInfo, index) => (
                <div 
                    key={index}
                    className={`h-[20vh] w-[40%] rounded-lg shadow-xl ${unlockedLevels[index] ? 'bg-[#907AF9]' : 'bg-[#EDEDED]'}`}
                >
                    <div className='flex h-full '>
                        <div className='flex flex-col justify-evenly w-[42%]'>
                            <div className='pl-8 flex gap-8'>
                                <div className={`text-xl font-semibold ${unlockedLevels[index] ? 'text-white':'text-gray-500'} `}>{levelInfo.level}</div>
                                <div className={`text-lg flex items-center ${unlockedLevels[index] ? 'text-white':'text-gray-500'} `}>
                                    <span className={`h-2 w-2 rounded-full mr-2 ${unlockedLevels[index] ? 'bg-white':'bg-gray-500'} `}></span>
                                    {levelInfo.description}
                                </div>
                            </div>
                            <button 
                                className={`text-lg font-semibold px-8 rounded-lg py-2 ml-6  ${unlockedLevels[index] ? 'bg-white text-[#60359E] hover:border-2 hover:border-[#60359E]' : 'bg-white text-gray-700'}`}
                                onClick={() => unlockedLevels[index] && handleStart(index)}
                                disabled={!unlockedLevels[index]}
                            >
                               Start
                            </button>
                        </div>
                        <div className='flex justify-end items-center w-[40%]'>
                        <div className={`${unlockedLevels[index] ?'bg-white text-[#907AF9]' :'text-[#7D7D7D] text-3xl'} p-2 rounded-full  text-2xl`}>
                            {   
                            unlockedLevels[index] ? <TiTick/>:<FaLock/>
                            }
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
            <div className='flex'>
            <div className='w-[50%] h-screen bg-gradient-to-r from-purple-100 to-white'></div>
            <div className='w-[50%] h-screen bg-gradient-to-l from-purple-100 to-white'></div>
            </div>
        </div>
    </div>
  )
}

export default Levels