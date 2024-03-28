import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import waves from '../assets/landingpage/Component_1.svg';
import study from '../assets/landingpage/lp_illustration.svg';


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
                /**
 * @property {boolean} showCursor show cursor
 * @property {string} cursorChar character for cursor
 * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
 */

                strings: ['Hello', 'Hola', 'Bonjour', 'Hallo', 'Ciao'],
                typeSpeed: 70,
                showCursor: true,
                cursorChar: '|',
                autoInsertCss: true,
            });

            return () => {
                typed.destroy(); // Destroy Typed instance during cleanup to stop animation
            };
        }
    }, [el]);

    return (
        <>
            <div>
                <div className="h-screen flex justify-end items-end w-full">
                    <img src={waves} alt="waves" className="object-cover object-bottom w-screen h-auto z-0" />
                    <span className="absolute top-20 left-0 p-4 z-30 text-7xl text-gray-800" style={{ fontFamily: 'Literata, serif', fontWeight: 800 }}>Welcome to
                        <span style={{ fontFamily: 'Literata, serif', color: '#60359E', fontWeight: 800 }}> LinguaVerse
                        </span>
                        <span style={{ fontFamily: 'Literata, serif', fontWeight: 800 }}>,
                        </span>
                    </span>
                    <span className="absolute top-40 left-3 p-4 z-30 text-4xl text-gray-800" style={{ fontFamily: 'Literata, serif', fontWeight: 800 }}>your gateway to immersive language learning!
                    </span>
                    <span className="absolute top-60 left-3 p-4 z-30 text-3xl" style={{ fontFamily: 'Literata, serif', fontWeight: 500, color: '#7D7D7D' }}>Whether you're a beginner or aiming for fluency,<br /> LinguaVerse offers a unique blend of engaging<br /> features to guide you towards mastery.
                    </span>
                    <span className="absolute top-96 left-64 p-4 z-40 text-5xl" style={{ fontFamily: 'Literata, serif', fontWeight: 1000, color: '#3A3148' }} ref={el} />
                    <img src={study} alt="study" className="absolute top-0 left-90 object-cover object-bottom z-20" />
                    <span className="absolute top-2/3 left-48 p-4 z-40">
                        <button {...shimmerComponent.component.props}>
                        {shimmerComponent.component.children}
                    </button></span>
                </div>
            </div>
        </>
    );
}

export default Homepage;
