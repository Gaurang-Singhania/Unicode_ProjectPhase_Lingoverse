import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import CardLayout from './CardLayout';
import england from '../assets/landingpage/English.png';
import france from '../assets/landingpage/French.png';
import india from '../assets/landingpage/Hindi.png';
import japan from '../assets/landingpage/Japanese.png';
import spain from '../assets/landingpage/Spanish.png';
import bgImg from "../assets/landingpage/MacBook Air - 60.svg";

function LanguageSelect() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate('/joincommunities')
  }

  const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    '@media (min-width: 1536px)': {
      width: '100vw',  
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat',
    },
  };

  return (
    <>
      <div style={bgStyle}>

      <div className='relative pt-8 pb-16 w-full flex flex-col items-center z-30'>
        <p className="p-8 xl:text-3xl sm:text-3xl md:text-3xl text-gray-900 text-center" style={{ fontFamily: 'Literata, serif', fontWeight: 800}}>
          Pick a language to start learning....
        </p>
        
        <div className='container mt-10 mb-10 grid gap-y-7 md:grid-cols-2 justify-items-center mx-2 px-20'>
          <CardLayout language="English" countryImage={england} />
          <CardLayout language="French" countryImage={france} />
          <CardLayout language="Hindi" countryImage={india} />
          <CardLayout language="Japanese" countryImage={japan} />
          
        </div> 
        <div className='self-center mb-10'>
        <CardLayout language="Spanish" countryImage={spain} /> 
        </div>

        <div className='shadow-md self-center mt-10 rounded-md bg-white'>
          <button onClick={handleClick} className="rounded-md border-2 border-gray-300 py-4 px-8">
            <p className='text-[#60359E] text-3xl font-bold rounded-lg ' style={{ fontFamily: 'Literata, serif', fontWeight: 800}}>Next</p>
          </button>
        </div>
      </div>   

      </div>
    </>
  );
}

export default LanguageSelect;
