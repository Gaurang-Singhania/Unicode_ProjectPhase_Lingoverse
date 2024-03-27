import React from 'react'
import '../style.css'
import waves from '../assets/landingpage/Component_1.svg'
import study from '../assets/landingpage/lp_illustration.svg'

const Homepage = () => {
    return (
        <>
            <div>
                <div className="h-screen flex justify-end items-end w-full">
                    <img src={waves} alt="waves"
                        className="object-cover object-bottom w-screen h-auto z-0" />
                    <span
                        className="absolute top-20 left-0 p-4 z-30 text-7xl text-gray-800"
                        style={{ fontFamily: 'Literata, serif', fontWeight: 800 }}>Welcome to
                        <span style={{ fontFamily: 'Literata, serif', color: '#60359E', fontWeight: 800 }}> LinguaVerse
                        </span>
                        <span
                            style={{ fontFamily: 'Literata, serif', fontWeight: 800 }}>,
                        </span>
                    </span>
                    <span
                        className="absolute top-40 left-3 p-4 z-30 text-4xl text-gray-800"
                        style={{ fontFamily: 'Literata, serif', fontWeight: 800 }}>your gateway to immersive language learning!
                    </span>
                    <span
                        className="absolute top-60 left-3 p-4 z-30 text-3xl"
                        style={{ fontFamily: 'Literata, serif', fontWeight: 500, color: '#7D7D7D' }}>Whether you're a beginner or aiming for fluency,<br /> LinguaVerse offers a unique blend of engaging<br /> features to guide you towards mastery.
                    </span>
                    <img src={study} alt="study"
                        className="absolute top-0 left-90 object-cover object-bottom z-20" />
                </div>
            </div>
        </>
    )
}

export default Homepage