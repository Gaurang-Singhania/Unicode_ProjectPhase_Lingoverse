import React from 'react'

const Message = ({text,sent}) => {
  return (
    <div className={`message w-full text-[#3A3148] ${sent? 'sent flex justify-end':'received flex justify-start'}`}style={{ fontFamily: 'Literata, serif'}}>
        <div className={`m-2 max-w-96 p-2 rounded-lg shadow-lg ${!sent?'bg-white':'bg-[#F8F8FF]'}`}>
            {text}
        </div>
    </div>
  )
}

export default Message