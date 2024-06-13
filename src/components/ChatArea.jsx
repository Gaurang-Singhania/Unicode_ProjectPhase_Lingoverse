import React, { useState } from 'react';
import Message from './Message';
import send from '../assets/landingpage/Send.svg';

const ChatArea = () => {
    const [msg, setMsg] = useState("");

    const handleChange = (e) => {
        setMsg(e.target.value);
    };

    const handleSend = () => {
        console.log("msg sent");
    };

    return (
        <div className='relative bg-white flex flex-col h-screen w-3/4'>
            <div className='header'></div>
            <div className='overflow-y-auto flex-1'>
                <Message text="Hello" sent/>
                <Message text="How are you?" received/>
                <Message text="I'm planning my next trip and could use some recommendations." sent/>
                <Message text="Does anyone have tips for traveling solo? I'm a bit nervous about my upcoming trip." received/>
            </div>
            <div className='flex p-4'>
                <textarea 
                    className='flex-1 h-12 rounded-md p-2 mr-4 bg-[#F8F8FF] resize-none focus:outline-none focus:border-indigo-500 text-[#3A3148]' 
                    placeholder='Type your message...' 
                    value={msg} 
                    onChange={handleChange}
                ></textarea>
                <img src={send} alt="send" className='cursor-pointer' onClick={handleSend}/> 
            </div>
        </div>
    );
};

export default ChatArea;
