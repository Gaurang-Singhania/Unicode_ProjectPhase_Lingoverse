import React, { useState } from "react";
import bgImg from "../assets/landingpage/MacBook Air - 65.svg";
import { FaCheck, FaTimes } from "react-icons/fa";

function Quiz() {
  const [score, setScore] = useState(0);
  const [isScoreUpdated, setIsScoreUpdated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    minWidth: '100vw',
  };

  const divAlign = "rounded-md bg-white h-14 w-64 px-10 m-10 flex justify-center items-center";  
  const commonStyles = {
    fontFamily: 'Literata, serif',
    fontWeight: 800
  };
  const questionHover = "transition-transform hover:scale-110 cursor-pointer hover:border-black";
  const buttonHover = "transition-transform hover:scale-110 cursor-pointer hover:bg-slate-200 hover:border-slate-700";
  const questionBox = "border-2 border-gray-200 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]";
  const boxShadow1 = 'border-2 border-gray-200 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]';

  const handleClick1 = (answer) => {
    if (answer === 'hombre'){
      setModalContent("Correct answer!");
      setIsCorrectAnswer(true);
      setShowModal(true);
    } else {
      setModalContent("Wrong answer!");
      setIsCorrectAnswer(false);
      setShowModal(true);
    }

    if (answer === 'hombre' && !isScoreUpdated) {
      setScore(score + 1);
      setIsScoreUpdated(true);
    } 
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div style={bgStyle}>
        <div className="p-30">
          <div className="text-right px-20 py-10">
            <p className="text-slate-600 text-xl" style={{ ...commonStyles }}>Score: {score}</p>
          </div>
          <p className="text-center text-slate-600 text-2xl pb-4" style={{ ...commonStyles }}>Question:  1 /10</p>
          <p className="text-center text-slate-800 text-3xl" style={{ ...commonStyles }}>Select the correct meaning- <span className="italic">man</span></p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-5 mt-10">
            <div className={`${divAlign} ${questionBox} ${questionHover}`} style={{ ...commonStyles }} onClick={() => handleClick1('mujer')}>mujer</div>
            <div className={`${divAlign} ${questionBox} ${questionHover}`} style={{ ...commonStyles }} onClick={() => handleClick1('hombre')}>hombre</div>
            <div className={`${divAlign} ${questionBox} ${questionHover}`} style={{ ...commonStyles }} onClick={() => handleClick1('nina')}>nina</div>
            <div className={`${divAlign} ${questionBox} ${questionHover}`} style={{ ...commonStyles }} onClick={() => handleClick1('manzana')}>manzana</div>
          </div>
        </div>

        <div className="flex justify-between mt-7 mx-20">
          <div className={`${divAlign} ${buttonHover} ${boxShadow1} text-left`} style={{ ...commonStyles }}>Skip</div>
          <div className={`${divAlign} ${buttonHover} ${boxShadow1} text-right`} style={{ ...commonStyles }}>Next</div>
        </div>

      </div>
      {showModal && ( 
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-md p-6 flex flex-col items-center">
            {isCorrectAnswer ? <FaCheck className="text-green-600 text-4xl mb-4" /> : <FaTimes className="text-red-600 text-4xl mb-4" />}
            <p className={isCorrectAnswer ? "text-green-600 text-xl" : "text-red-600 text-xl"}>{modalContent}</p>
            <button className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Quiz;
