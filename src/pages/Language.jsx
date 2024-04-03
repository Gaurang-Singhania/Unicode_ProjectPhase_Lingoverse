import React from 'react'
import Navbar from './Navbar'
import Question from '../assets/landingpage/Question.svg'
import call from '../assets/landingpage/Video_Call_(1).png'
import translate from '../assets/landingpage/translate.svg'
import community from '../assets/landingpage/community.svg'

const Language = () => {
    return (
        <>
            <Navbar />
            <div class="grid grid-cols-1 md:grid-cols-2 gap-14 mt-12 ml-48">
                {/* <!-- Quiz --> */}
                <div class="bg-pink-100 p-6 rounded-xl relative transition-transform transform hover:scale-130 w-64 h-56 hover:scale-110 cursor-pointer">
                    <img src={Question} alt="study" className="absolute inset-0 object-cover z-20 mx-auto my-auto" />
                    <div className='ml-64'>
                        <span className='text-3xl font-extrabold' style={{ fontFamily: 'Literata, serif', color: '#60359E', fontWeight: 500 }} >Quiz <br />Exercises</span>
                    </div>
                </div>

                {/* <!-- Connect and Learn --> */}
                <div class="bg-green-100 p-6 rounded-xl relative transition-transform transform hover:scale-130 w-64 h-56 hover:scale-110 cursor-pointer">
                    <img src={call} alt="study" className="absolute inset-0 object-cover z-20 mx-auto my-auto w-56" />
                    <div className='ml-64'>
                        <span className='text-3xl font-extrabold' style={{ fontFamily: 'Literata, serif', color: '#60359E', fontWeight: 500 }} >Connect <br />And <br/> Learn</span>
                    </div>
                </div>

                {/* <!-- Language Translate --> */}
                <div class="bg-green-100 p-6 rounded-xl relative transition-transform transform hover:scale-130 w-64 h-56 hover:scale-110 cursor-pointer">
                    <img src={translate} alt="study" className="absolute inset-0 object-cover z-20 mx-auto my-auto  w-56" />
                    <div className='ml-64'>
                        <span className='text-3xl font-extrabold' style={{ fontFamily: 'Literata, serif', color: '#60359E', fontWeight: 500 }} >Language <br />Translate</span>
                    </div>
                </div>

                {/* <!-- Communities --> */}
                <div class="bg-pink-100 p-6 rounded-xl relative transition-transform transform hover:scale-130 w-64 h-56 hover:scale-110 cursor-pointer">
                    <img src={community} alt="study" className="absolute inset-0 object-cover z-20 mx-auto my-auto w-56" />
                    <div className='ml-64'>
                        <span className='text-3xl font-extrabold' style={{ fontFamily: 'Literata, serif', color: '#60359E', fontWeight: 500 }} >Communities</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Language