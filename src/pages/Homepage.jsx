import React, { useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../style.css'
import Typed from 'typed.js';
import waves from '../assets/landingpage/Component_1.svg';
import study from '../assets/landingpage/lp_illustration.svg';
import students from '../assets/landingpage/students_in_a_class.svg'
import video_call from '../assets/landingpage/Video_Call.svg'
import girl_music from '../assets/landingpage/girl_music.svg'
import Question from '../assets/landingpage/Question.svg'
import man from '../assets/landingpage/Man.svg'
import spanish from '../assets/landingpage/Spanish.png'
import english from '../assets/landingpage/English.png'
import french from '../assets/landingpage/French.png'
import hindi from '../assets/landingpage/Hindi.png'
import japanese from '../assets/landingpage/Japanese.png'


// IMP: DO THESE INSTALLATIONS BEFORE RUNNING THE CODE

// npm install typedjs
// npm i framer-motion clsx tailwind-merge react-element-to-jsx-string



const Homepage = () => {

    const shimmerComponent = {
        name: "Shimmer",
        description: "Shimmer button for your website",
        showDot: false,
        component: {
            type: "button",
            props: {
                className: "inline-flex h-20 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-60 text-3xl",
            },
            children: "Get Started",
        },
    };

    const el = useRef(null); // Create a reference to store the DOM element

    useEffect(() => {
        if (el.current) {
            const typed = new Typed(el.current, {
                //                 /**
                //  * @property {boolean} showCursor show cursor
                //  * @property {string} cursorChar character for cursor
                //  * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
                //  */

                strings: ['Hello', 'Hola', 'Bonjour', 'Hallo', 'Ciao'],
                typeSpeed: 70,
                showCursor: false,
                // cursorChar: '|',
                // autoInsertCss: false,
            });

            return () => {
                typed.destroy(); // Destroy Typed instance during cleanup to stop animation
            };
        }
    }, [el]);
    const navigate = useNavigate();
    const handleClick=(e)=>{
        navigate('/login')
      }
    return (
        <>
        <div className="h-screen w-full relative">
        <div className='h-screen flex justify-end items-end relative z-0'>
            <img src={waves} alt="waves" className="object-cover object-bottom w-screen h-auto" />
        </div>
        <div className='flex h-screen w-full absolute top-0 left-0 z-1'>
            <div className='flex flex-col h-full w-[60vw] justify-center ml-32'>
                <p className="p-4 z-30  xl:text-6xl md:text-5xl text-gray-800" style={{ fontFamily: 'Literata, serif', fontWeight: 800}}>Welcome to
                    <span style={{ fontFamily: 'Literata, serif', color: '#60359E', fontWeight: 800 }}> LinguaVerse
                    </span>
                    <span style={{ fontFamily: 'Literata, serif', fontWeight: 800 }}>,
                    </span>
                </p>
                <p className=" p-4 z-30 md:text-2xl xl:text-3xl text-gray-800" style={{ fontFamily: 'Literata, serif', fontWeight: 800}}>your gateway to immersive language learning!
                </p>
                <p className="p-4 z-30 md:text-xl xl:text-2xl" style={{ fontFamily: 'Literata, serif', fontWeight: 500, color: '#7D7D7D' }}>Whether you're a beginner or aiming for fluency,<br /> LinguaVerse offers a unique blend of engaging<br /> features to guide you towards mastery.
                </p>
                <p className=" p-4 z-40 md:text-4xl xl:text-5xl ml-64 my-4" style={{ fontFamily: 'Literata, serif', fontWeight: 1000, color: '#3A3148' }} ref={el} />
                <span className="p-4 z-40 ml-48">
                    <button {...shimmerComponent.component.props} onClick={handleClick}>
                        {shimmerComponent.component.children}
                    </button>
                </span>
            </div>
            <div className='w-[40vw] flex justify-center items-center mr-4'>
                <img src={study} alt="study" className="object-cover object-bottom z-20 w-[30vw]" />
            </div>
        </div>
    </div>


            <div className="">
                <div className="custom-gradient h-screen flex flex-col justify-center items-center w-full relative" style={{ height: '900px' }}>
                    <div className='flex'>
                    <div>
                    <p className="p-4 z-30 text-5xl" style={{ fontFamily: 'Literata, serif', fontWeight: 700, color: '#3A3148' }}>Unlock Your Linguistic Potential</p>
                    <p className="p-4 z-30 text-2xl" style={{ fontFamily: 'Literata, serif', fontWeight: 500, color: '#7D7D7D' }}>Explore a comprehensive language learning <br /> experience with multiple tiers of quizzes. Progress <br /> through each stage by  advancing towards mastery <br /> through immersive audio-based quizzes.</p>
                    </div>
                    <img src={students} alt="study" className="object-cover object-bottom z-20 overflow-hidden" width="600" height="376" />
                    </div>
                    <div className='flex'>
                        <div style={{width:"600px" ,height:"406px"}}>
                    <img src={video_call} alt="study" className="object-cover object-bottom z-20 mr-8" width="400" height="276" />
                        </div>
                    <div >
                    <p className="p-4 z-30 text-5xl" style={{ top: 500, left: 650, fontFamily: 'Literata, serif', fontWeight: 700, color: '#3A3148' }}>Connect and Collaborate
                    </p>
                    <p className="p-4 z-30 text-2xl" style={{ top: 575, left: 650, fontFamily: 'Literata, serif', fontWeight: 500, color: '#7D7D7D' }}>Engage in video calls and language-specific chat <br />  rooms. Foster community-based learning, sharing <br />  insights and experiences with fellow language <br />  enthusiasts.
                    </p>
                    </div>
                    </div>
            </div>
            </div>
            <div className="">
                <div className="h-screen flex flex-col justify-center items-center w-full relative" style={{ height: '900px' }}>
                    <div className='flex'>
                    <div>
                    <p className="p-4 z-30 text-5xl" style={{ fontFamily: 'Literata, serif', fontWeight: 700, color: '#3A3148' }}>Expand Your Horizon</p>
                    <p className="p-4 z-30 text-2xl" style={{ fontFamily: 'Literata, serif', fontWeight: 500, color: '#7D7D7D' }}>Discover curated recommendations for movies, <br /> books, and audio songs. Immerse yourself in <br />  authentic cultural content while enhancing <br /> language proficiency.</p>
                    </div>
                    <img src={girl_music} alt="study" className="object-cover object-bottom z-20 overflow-hidden" width="600" height="376" />
                    </div>
                    <div className='flex'>
                        <div style={{width:"600px" ,height:"540px"}}>
                    <img src={Question} alt="study" className="object-cover object-bottom z-20 mr-8" width="400" height="276" />
                        </div>
                    <div >
                    <p className="p-4 z-30 text-5xl" style={{ top: 500, left: 650, fontFamily: 'Literata, serif', fontWeight: 700, color: '#3A3148' }}>Refine your skills
                    </p>
                    <p className="p-4 z-30 text-2xl" style={{ top: 575, left: 650, fontFamily: 'Literata, serif', fontWeight: 500, color: '#7D7D7D' }}>Receive detailed feedback on quiz performance.<br /> Understand and overcome mistakes with <br /> explanations for incorrect answers at each level.
                    </p>
                    </div>
                    </div>
            </div>
            </div>
            {/* <div className="relative">
                <div className="h-screen flex justify-end items-end w-full relative" style={{ height: '940px' }}>
                    <span className="absolute top-20 left-12 p-4 z-30 text-6xl" style={{ fontFamily: 'Literata, serif', fontWeight: 700, color: '#3A3148' }}>Expand Your Horizon
                    </span>
                    <img src={girl_music} alt="study" className="absolute top-0 left-90 object-cover object-bottom z-20" width="600" height="476" />
                    <span className="absolute top-40 left-8 p-4 z-30 text-3xl" style={{ fontFamily: 'Literata, serif', fontWeight: 500, color: '#7D7D7D' }}>Discover curated recommendations for movies, <br /> books, and audio songs. Immerse yourself in <br />  authentic cultural content while enhancing <br /> language proficiency.
                    </span>
                    <img src={Question} alt="study" className="absolute top-2/4 left-44 object-cover object-bottom z-20" width="350" height="406" />
                    <span className="absolute p-4 z-30 text-5xl" style={{ top: 550, left: 750, fontFamily: 'Literata, serif', fontWeight: 700, color: '#3A3148' }}>Refine your skills
                    </span>
                    <span className="absolute p-4 z-30 text-[1.5rem]" style={{ top: 625, left: 750, fontFamily: 'Literata, serif', fontWeight: 500, color: '#7D7D7D' }}>Receive detailed feedback on quiz performance.<br /> Understand and overcome mistakes with <br /> explanations for incorrect answers at each level.
                    </span>
                </div>
            </div> */}
        <div className='custom-gradient2 relative h-screen flex justify-center items-center'>
            <div className='  flex justify-center items-center'>
                <span className="absolute xl:top-[20%] xl:left-[43%] md:top-[18%] md:left-[43%] p-4 z-30 text-5xl  text-center" style={{ fontFamily: 'Literata, serif', fontWeight: 700, color: '#3A3148', paddingTop: '5%' }}>Languages <br /> we <br />offer</span>
                <img src={man} alt="study" className="absolute xl:top-[50%] xl:left-[45%] md:top-[45%] md:left-[45%] transform-translate object-cover object-bottom z-40" width={225} height={200}/>
                <img src={french} alt="study" className="absolute xl:top-[45%] xl:left-[20%] md:top-[45%] md:left-[15%] object-cover object-bottom z-20" />
                <img src={english} alt="study" className="absolute xl:top-[15%] xl:left-[20%] md:top-[15%] md:left-[15%] object-cover object-bottom z-20" />
                <img src={hindi} alt="study" className="absolute xl:top-[2%] xl:left-[45%] md:top-[2%] md:left-[45%] object-cover object-bottom z-20" />
                <img src={spanish} alt="study" className="absolute xl:top-[15%] xl:left-[70%] md:top-[15%] md:left-[75%] object-cover object-bottom z-20" />
                <img src={japanese} alt="study" className="absolute xl:top-[45%] xl:left-[70%] md:top-[45%] md:left-[75%] object-cover object-bottom z-20 border border-black rounded border-solid" />
            </div>
        </div>
        </>
    );
}

export default Homepage;
