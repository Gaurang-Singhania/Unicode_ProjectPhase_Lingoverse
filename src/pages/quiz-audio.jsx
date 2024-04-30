import React, { useState } from "react";
import component from "../assets/landingpage/Component 4.svg";

function QuizAudio() {
  const [score, setScore] = useState(0);
  const [isScoreUpdated, setIsScoreUpdated] = useState(false);
  const [questionBG, setQuestionBG] = useState({
    option1: "bg-white",
    option2: "bg-white",
    option3: "bg-white",
    option4: "bg-white"
  });

  const divQuestionAlign =
    "rounded-md h-14 w-60 px-10 m-10 flex justify-center items-center z-20 md:m-10 sm:m-4 min-[320px]:m-2";
  const divAlign =
    "rounded-md border-2 border-slate-700 md:text-xl sm:text-lg min-[320px]:text-md bg-slate-200 h-14 w-60 px-10 m-10 flex justify-center items-center z-20 md:m-10 sm:m-4 min-[320px]:m-2";
  const commonStyles = {
    fontFamily: "Literata, serif",
    fontWeight: 800
  };
  const questionHover =
    "transition-transform hover:scale-110 cursor-pointer hover:border-black";
  const buttonHover =
    "transition-transform hover:scale-110 cursor-pointer hover:bg-white hover:border-slate-700";
  const questionBox =
    "border-2 border-gray-200 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]";
  const boxShadow1 =
    "border-2 border-gray-200 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-gray-200";

  const handleClick1 = (answer) => {
    if (answer === "option2") {
      setQuestionBG({ ...questionBG, [answer]: "bg-green-200 border-2 border-green-500" });
    } else {
      setQuestionBG({ ...questionBG, [answer]: "bg-red-200 border-2 border-red-400" });
    }

    if (answer === "option2" && !isScoreUpdated) {
      setScore(score + 1);
      setIsScoreUpdated(true);
    }
  };

  return (
    <>
      <div className="h-screen w-screen relative bg-[#ffffff]">
        <img
          src={component}
          alt="component"
          className="h-30 w-full z-0 flex justify-end items-end absolute bottom-0 left-0"
        />
        <div className="p-30">
          <div className="text-right px-20 py-10">
            <p
              className="text-slate-600 text-xl min-[320px]:text-lg sm:text-lg md:text-xl"
              style={{ ...commonStyles }}
            >
              Score: {score}
            </p>
          </div>
          <p
            className="text-center text-slate-600 text-2xl pb-4 min-[320px]:text-md sm:text-lg md:text-2xl"
            style={{ ...commonStyles }}
          >
            Question: 1 /10
          </p>
          <p
            className="text-center text-slate-800 text-3xl min-[320px]:text-2xl sm:text-2xl md:text-3xl"
            style={{ ...commonStyles }}
          >
            Select the correct meaning- <span className="italic">man</span>
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-5 mt-10 sm:gap-y-2 sm:mt-4 md:mt-10 md:grid-x-20">
            <div
              className={`${divQuestionAlign} ${questionBG.option1} ${questionBox} ${questionHover}`}
              style={{ ...commonStyles }}
              onClick={() => handleClick1("option1")}
            >
              mujer
            </div>
            <div
              className={`${divQuestionAlign} ${questionBG.option2} ${questionBox} ${questionHover}`}
              style={{ ...commonStyles }}
              onClick={() => handleClick1("option2")}
            >
              hombre
            </div>
            <div
              className={`${divQuestionAlign} ${questionBG.option3} ${questionBox} ${questionHover}`}
              style={{ ...commonStyles }}
              onClick={() => handleClick1("option3")}
            >
              nina
            </div>
            <div
              className={`${divQuestionAlign} ${questionBG.option4} ${questionBox} ${questionHover}`}
              style={{ ...commonStyles }}
              onClick={() => handleClick1("option4")}
            >
              manzana
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-7 mx-20">
          <div
            className={`${divAlign} ${buttonHover} ${boxShadow1} text-left `}
            style={{ ...commonStyles }}
          >
            Skip
          </div>
          <div
            className={`${divAlign} ${buttonHover} ${boxShadow1} text-right `}
            style={{ ...commonStyles }}
          >
            Next
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizAudio;
