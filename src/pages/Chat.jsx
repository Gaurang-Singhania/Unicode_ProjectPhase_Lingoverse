import React from 'react';
import Sidebar from '../components/Sidebar';
import ChatArea from '../components/ChatArea';



const Chat = () => {

    return (
        <div className="h-screen w-full flex justify-between" style={{ fontFamily: 'Literata, serif' }}>
            <Sidebar/>
            
            <ChatArea/>
        </div>
    );
}

export default Chat;
