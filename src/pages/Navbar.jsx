import React from "react";
import logo from "../assets/landingpage/Subtract.svg";
import user from "../assets/landingpage/User.svg";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate('/login')
  }
=======
import { useState, useContext } from "react";
import { LanguageContext } from "../context/Languagecontext";
import spanish from "../assets/landingpage/Spanish.png";
import english from "../assets/landingpage/English.png";
import french from "../assets/landingpage/French.png";
import hindi from "../assets/landingpage/Hindi.png";
import japanese from "../assets/landingpage/Japanese.png";

const flags = [
  { id: 1, name: "English", code: "en", image: english },
  { id: 2, name: "Spanish", code: "es", image: spanish },
  { id: 3, name: "French", code: "fr", image: french },
  { id: 4, name: "Hindi", code: "hi", image: hindi },
  { id: 5, name: "Japanese", code: "ja", image: japanese },
];

const Navbar = () => {
  const language = useContext(LanguageContext);
  console.log(language);
  const [selectedOption, setSelectedOption] = useState(
    flags.find((flag) => flag.name === language.selectedLanguage)?.id
  );
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/login");
    console.log(selectedLanguage);
  };
>>>>>>> 7d5968126ca4d5eef74192d0e47a64b55eb80f0a
  return (
    <nav className="custom-gradient3 rounded">
      <div className="flex items-center justify-between h-12">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} className="h-12" alt="Logo" />
          <span
            className="absolute text-white font-bold text-2xl ml-10"
            style={{ fontFamily: "Literata, serif", fontWeight: 800 }}
          >
            LingoVerse
          </span>
        </div>
        {/* Navigation links */}
        <div className="hidden sm:flex sm:items-center sm:space-x-4 ml-auto">
          <img
            src={flags[selectedOption - 1]?.image}
            alt={flags[selectedOption - 1]?.name}
            className="w-16 h-12 rounded-xl p-2"
          />
          <img
            src={user}
            className="p-2 w-12 h-12 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:border border-transparent hover:shadow-lg cursor-pointer"
            alt="User"
            onClick={handleClick}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
