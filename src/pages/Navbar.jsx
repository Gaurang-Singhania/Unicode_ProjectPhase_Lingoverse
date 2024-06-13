import React from 'react';
import logo from '../assets/landingpage/Subtract.svg';
import user from '../assets/landingpage/User.svg';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { LanguageContext } from '../context/Languagecontext';

const Navbar = () => {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate('/login')
    console.log(selectedLanguage)
  }
  return (
    <nav className="bg-indigo-950 rounded">
      <div className="flex items-center justify-between h-12">
        {/* Logo */}
        <div className="flex items-center"> 
          <img src={logo} className="h-12" alt="Logo" /> 
          <span className='absolute text-white font-bold text-2xl ml-10' style={{ fontFamily: 'Literata, serif', fontWeight: 800 }}>LingoVerse</span>
        </div>
        {/* Navigation links */}
        <div className="hidden sm:flex sm:items-center sm:space-x-4 ml-auto">
          <img
            src={user}
            className='p-2 w-12 h-12 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:border border-transparent hover:shadow-lg cursor-pointer'
            alt="User"
            onClick={handleClick}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
