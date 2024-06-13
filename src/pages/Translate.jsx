import React, { useState, useContext } from 'react';
import axios from 'axios';
import '../style.css';
import arrow from '../assets/landingpage/Arrows.svg';
import bg from '../assets/landingpage/bg_languagetranslate.svg';
import spanish from '../assets/landingpage/Spanish.png';
import english from '../assets/landingpage/English.png';
import french from '../assets/landingpage/French.png';
import hindi from '../assets/landingpage/Hindi.png';
import japanese from '../assets/landingpage/Japanese.png';
import { LanguageContext } from '../context/Languagecontext';

const flags = [
    { id: 1, name: 'English', code: 'en', image: english },
    { id: 2, name: 'Spanish', code: 'es', image: spanish },
    { id: 3, name: 'French', code: 'fr', image: french },
    { id: 4, name: 'Hindi', code: 'hi', image: hindi },
    { id: 5, name: 'Japanese', code: 'ja', image: japanese }
];

const Translate = () => {
    const [selectedOption1, setSelectedOption1] = useState('1');
    const language  = useContext(LanguageContext);
    console.log(language)
    const [selectedOption2, setSelectedOption2] = useState(flags.find(flag => flag.name === language.selectedLanguage)?.id)
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    const handleSelectChange1 = (event) => {
        setSelectedOption1(event.target.value);
    };

    const handleSelectChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };

    const handleInputChange1 = (event) => {
        setInputValue1(event.target.value);
    };

    const handleInputChange2 = (event) => {
        setInputValue2(event.target.value);
    };

    const handleTranslate = async () => {
        // const apiKey = 'AIzaSyAw_zVcGq_e0xIKptyXRjIe5N4XfoEN8Wk'; 
        const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
        const sourceLang = flags[selectedOption1 - 1].code;
        const targetLang = flags[selectedOption2 - 1].code;
        // const targetLang = language ? language.toLowerCase() : '';
        console.log(targetLang);

        try {
            const response = await axios.post(url, {
                q: inputValue1,
                source: sourceLang,
                target: targetLang,
                format: 'text'
            });
            setInputValue2(response.data.data.translations[0].translatedText);
        } catch (error) {
            console.error('Error translating text:', error);
        }
    };

    return (
        <div className='h-screen bg-cover relative' style={{ backgroundImage: `url(${bg})` }}>
            <div className='flex flex-col md:flex-row items-center justify-center h-full'>
                <div className='w-64 md:w-auto border border-black p-3 m-5 flex flex-col justify-center items-center rounded-xl bg-gray-200'>
                    <div className="flex items-center">
                        <img src={flags[selectedOption1 - 1]?.image} alt={flags[selectedOption1 - 1]?.name} className='w-16 h-12 rounded-xl p-2' />
                        <select className="custom-select w-52" value={selectedOption1} onChange={handleSelectChange1} style={{ fontFamily: 'Literata, serif', color: '#60359E', fontWeight: 700 }}>
                            {flags.map(flag => (
                                <option key={flag.id} value={flag.id}>
                                    {flag.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <input type="text" value={inputValue1} onChange={handleInputChange1} className="border border-gray-300 rounded-md p-1 mt-2 w-72 h-40 flex-shrink-0" />
                </div>
                <img className='mt-5 gap-5 mr-3 md:mt-0 md:ml-5' src={arrow} alt="Arrow" />
                <div className='w-64 md:w-auto border border-black p-3 m-5 flex flex-col justify-center items-center rounded-xl bg-gray-200'>
                    <div className="flex items-center">
                    <img src={flags[selectedOption2 - 1]?.image} alt={flags[selectedOption2 - 1]?.name} className='w-16 h-12 rounded-xl p-2' />
                        <select className="custom-select w-52" value={selectedOption2} onChange={handleSelectChange2} style={{ fontFamily: 'Literata, serif', color: '#60359E', fontWeight: 700 }}>
                            {flags.map(flag => (
                                <option key={flag.id} value={flag.id}>
                                    {flag.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <input type="text" value={inputValue2} onChange={handleInputChange2} className="border border-gray-300 rounded-md p-1 mt-2 w-72 h-40 flex-shrink-0" />
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <button onClick={handleTranslate} className='w-96 hover:bg-purple-700 hover:text-white text-purple-700 text-2xl font-bold py-4 px-8 bg-white rounded-lg absolute bottom-20 shadow-md'>
                    Translate
                </button>
            </div>
        </div>
    );
}

export default Translate;
