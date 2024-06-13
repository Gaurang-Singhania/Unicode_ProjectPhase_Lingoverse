import React, { useState,useEffect, useContext } from "react";
import component from "../assets/landingpage/Component 4.svg";
import axios from 'axios';
import loader from '../assets/loader.gif'
import { LanguageContext } from '../context/Languagecontext';

function Quiz() {
  const [data,setData]=useState(null)
  const [options,setOptions]=useState([])
  const [optionsImg,setOptionsImg]=useState([])
  const [type,setType]=useState('')
  const [correct,setCorrect]=useState('')
  const [correctImg,setCorrectImg]=useState(null)
  const [questionNumber,setQuestionNumber]=useState(1)
  const [answerSelected,setAnswerSelected]=useState(false)
  const [clicked,setClicked]=useState(false)
  const [urlvalid,seturlvalid]=useState(true)

  
  const choosenLanguage = useContext(LanguageContext)
  const v = choosenLanguage.selectedLanguage;
  console.log(v)

  const languages = [
    { id: 1, name: 'English', code: 'en'},
    { id: 2, name: 'Spanish', code: 'es' },
    { id: 3, name: 'French', code: 'fr'},
    { id: 4, name: 'Hindi', code: 'hi' },
    { id: 5, name: 'Japanese', code: 'ja'}
];

 const quizLanguage = languages.find(lang => lang.name === v);
 console.log(quizLanguage.code);

  const validateImageUrls = async (url) => {
    try {
      const response = await fetch(url, { method: "HEAD" });
      return response.ok;
    } catch {
      return false;
    }
  };

  const fetchQuestion = async () => {
    try {
        const response = await axios.get('http://localhost:8000/question/', {
            params: {
                difficulty: 'easy', // Specify the desired difficulty
                language: quizLanguage.code // Specify the desired language
            }
        });
        console.log('Fetched question:', response);
        const shuffleArray = (array) => {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
          };
          
        setData(response.data)
        const { alt1, alt2, alt3, correct_alt } = response.data;

        const wordOptions = shuffleArray([alt1, alt2, alt3, correct_alt]);
        setOptions(wordOptions);

        // setOptions([alt1, alt2, alt3, correct_alt]);
        console.log('Options:', [alt1, alt2, alt3, correct_alt]);

        console.log(response.status)
        const { url1, url2, url3, correct_url } = response.data;

        const areUrlsValid = await validateImageUrls(url1);
      if (!areUrlsValid) {
        seturlvalid(false)
        console.warn("Invalid image URLs detected, fetching a new question...");
        fetchQuestion(); // Recursively fetch a new question
        seturlvalid(false)
        return;
      }
      else{
        seturlvalid(true)
      }

        
      const imageOptions = shuffleArray([url1, url2, url3, correct_url]);
      setOptionsImg(imageOptions);

        // setOptionsImg([url1, url2, url3, correct_url]);
        console.log('OptionsImg:', [url1, url2, url3, correct_url]);
        seturlvalid(true)

        setType(response.data.type)
        setCorrect(response.data.correct_alt)
        setCorrectImg(response.data.correct_url)
    } catch (error) {
        console.error('Error fetching question:', error);
    }
};

const populateDatabase = async () => {
  console.log("populating")
    try {
        await axios.post('http://localhost:8000/populate/', {
            difficulty: 'easy', // Specify the desired difficulty
            language: 'es' // Specify the desired language
        });
        console.log('Database populated successfully');
        fetchQuestion(); // Fetch a question after populating the database
    } catch (error) {
        console.error('Error populating database:', error);
    }
};

// Automatically call populateDatabase when component mounts
useEffect(() => {
    // populateDatabase();
    fetchQuestion()
}, []);

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
    "transition-transform hover:scale-110 cursor-pointer hover:text-[#8943FF] hover:border-[#8943FF] hover:bg-[#F8F8FF]";
  const buttonHover =
    "transition-transform hover:scale-110 cursor-pointer hover:bg-white hover:border-slate-700";
  const questionBox =
    "border-2 border-gray-200 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]";
  const boxShadow1 =
    "border-2 border-gray-200 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-gray-200";

  const handleClick1 = (answer,optionKey) => {
    if(!clicked){
    if (type=='word' && answer === correct) {
      console.log(answer)
      console.log(correct)
      setQuestionBG({ ...questionBG, [optionKey]: "bg-green-200 border-2 border-green-500", });
    }
    else if (type=='image' && answer === correctImg) {
      console.log(answer)
      console.log(correctImg)
      setQuestionBG({ ...questionBG, [optionKey]: "bg-green-200 border-2 border-green-500", });
    }
     else {
      setQuestionBG({ ...questionBG, [optionKey]: "bg-red-200 border-2 border-red-400" });
    }

    if (answer === correct && !isScoreUpdated) {
      setScore(score + 1);
      setIsScoreUpdated(true);
    }
    else if(answer==correctImg && !isScoreUpdated){
      setScore(score + 1);
      setIsScoreUpdated(true);
    }
    setAnswerSelected(true)
  }
  setClicked(true)
  };
  const handleNext = () => {
    if (answerSelected && questionNumber<25) {
      setQuestionNumber(questionNumber + 1);
      fetchQuestion();
      setAnswerSelected(false);
      setIsScoreUpdated(false);
      setQuestionBG({option1: "bg-white",
      option2: "bg-white",
      option3: "bg-white",
      option4: "bg-white" });
      setClicked(false)
    }
  }
  const handleSkip = () => {
    if (questionNumber<25) {
      setQuestionNumber(questionNumber + 1);
      fetchQuestion();
      setAnswerSelected(false);
      setIsScoreUpdated(false);
      setQuestionBG({option1: "bg-white",
      option2: "bg-white",
      option3: "bg-white",
      option4: "bg-white"});
      setClicked(false)
    }
  }
  return (
    <>
    { urlvalid && data ?
      <div className="min-h-[100vh] w-screen relative bg-[#ffffff]">
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
            Question: {questionNumber}/25
          </p>
          <p
            className="text-center text-slate-800 text-3xl min-[320px]:text-2xl sm:text-2xl md:text-3xl"
            style={{ ...commonStyles }}
          >
            Select the correct meaning- <span className="italic">{data.word}</span>
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-5 mt-10 sm:gap-y-2 sm:mt-4 md:mt-10 md:grid-x-20">
            {type=='word'? options.map((opt,index)=>{
              return(
                <div
                className={`${divQuestionAlign} ${questionBG[`option${index + 1}`]} ${questionBox} ${questionHover}`}
                style={{ ...commonStyles }}
                onClick={() => handleClick1(opt, `option${index + 1}`)}
                key={index}
              >
                {opt}
              </div>
              )
            }):
            optionsImg.map((opt,index)=>{
              return(
                <div
                className={`rounded-md h-46 w-60 px-10 m-10 flex justify-center items-center z-20 md:m-10 sm:m-4 min-[320px]:m-2 ${questionBG[`option${index + 1}`]} ${questionBox} ${questionHover}`}
                style={{ ...commonStyles }}
                onClick={() => handleClick1(opt, `option${index + 1}`)}
                key={index}
              >
                <img src={opt} className="h-42"/>
              </div>
              )
            })
            }
            
            {/* <div
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
            </div> */}
          </div>
        </div>

        <div className="flex justify-between mt-7 mx-20">
          <div
            className={`${divAlign} ${buttonHover} ${boxShadow1} text-left `}
            style={{ ...commonStyles }}
            onClick={handleSkip}
          >
            Skip
          </div>
          <div
            className={`${divAlign} ${buttonHover} ${boxShadow1} text-right `}
            style={{ ...commonStyles }}
            onClick={handleNext}
          >
            Next
          </div>
        </div>
      </div>
      :
      <div className="flex flex-col justify-center items-center h-screen">
        <div>
        <p className="text-4xl md:text-6xl m-4 text-[#60359E] font-semibold">Exploring new words for you... Hold on!</p>
        </div>
        <div className="m-2">
        <img src={loader}/>
        </div>
      </div>
}
    </>
  );
}

export default Quiz;
