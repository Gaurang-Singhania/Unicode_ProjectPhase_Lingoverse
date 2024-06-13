import React, { useState,useContext } from 'react';
import { useNavigate } from "react-router-dom";
import CardLayout from '../components/CardLayout';
import england from '../assets/landingpage/English.png';
import france from '../assets/landingpage/French.png';
import india from '../assets/landingpage/Hindi.png';
import japan from '../assets/landingpage/Japanese.png';
import spain from '../assets/landingpage/Spanish.png';
import bgImg from "../assets/landingpage/MacBook Air - 60.svg";
import { LanguageContext } from '../context/Languagecontext';

function LanguageSelect() {
  const navigate = useNavigate();
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);

  const handleClick = () => {
    navigate('/joincommunities')
  }

  const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    minWidth: '100vw',
  };

  const buttonHover = "transition-transform hover:scale-110 cursor-pointer hover:bg-slate-100 hover:border-black";

  const handleLanguage = (lang) => {
    setSelectedLanguage(lang);
    console.log(lang);
  }

  return (
    <>
      <div style={bgStyle}>
        <div className='relative pt-8 pb-16 w-full flex flex-col items-center z-30'>
          <p className="p-8 xl:text-3xl sm:text-3xl md:text-3xl text-gray-900 text-center" style={{ fontFamily: 'Literata, serif', fontWeight: 800}}>
            Pick a language to start learning....
          </p>
          
          <div className='container mt-10 mb-10 grid gap-y-14 md:grid-cols-2 justify-items-center mx-2 px-20'>
            <div onClick={() => handleLanguage('English')}><CardLayout language="English" flag={england} isSelected={selectedLanguage === 'English'} /></div>
            <div onClick={() => handleLanguage('French')}><CardLayout language="French" flag={france} isSelected={selectedLanguage === 'French'} /></div>
            <div onClick={() => handleLanguage('Hindi')}><CardLayout language="Hindi" flag={india} isSelected={selectedLanguage === 'Hindi'} /></div>
            <div onClick={() => handleLanguage('Japanese')}><CardLayout language="Japanese" flag={japan} isSelected={selectedLanguage === 'Japanese'} /></div>
          </div> 
          
          <div className='self-center mb-10' onClick={() => handleLanguage('Spanish')}>
            <CardLayout language="Spanish" flag={spain} isSelected={selectedLanguage === 'Spanish'} /> 
          </div>

          <div className={`shadow-md self-center mt-10 rounded-md bg-white ${buttonHover}`}>
            <button onClick={handleClick} className="rounded-md border-2 border-gray-300 py-4 px-8 ho">
              <p className='text-[#60359E] text-3xl font-bold rounded-lg w-18' style={{ fontFamily: 'Literata, serif', fontWeight: 800}}>Next</p>
            </button>
          </div>
        </div>   
      </div>
    </>
  );
}

export default LanguageSelect;
