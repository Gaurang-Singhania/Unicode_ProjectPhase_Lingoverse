import React from 'react';

function CardLayout({ language, flag, isSelected }) {

  // const hover = "transition-transform hover:scale-110 cursor-pointer hover:border-black";

  const hover = isSelected ? "transition-transform scale-110 cursor-pointer border-black" : "hover:scale-110 hover:border-black ";

  return (
    <div className={`border-2 border-gray-200 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex rounded-md bg-white h-24 w-64 ${hover}`}>

      {flag && (
        <div className="image border-2 text-gray-900 m-4 rounded-md hidden sm:block">
          <img src={flag} alt={language} className='size-full' />
        </div>
      )}
      
      <div className="country self-center m-3">
        <p className={`text-lg ${!flag && 'text-center'}`} style={{ fontFamily: 'Literata, serif', fontWeight: 800 }}>{language}</p>
      </div>
    </div>
  );
}

export default CardLayout;
