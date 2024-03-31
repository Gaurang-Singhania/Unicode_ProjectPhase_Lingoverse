import React,{useState} from 'react';

const communities = [
    'General language learning',
    'Business language learning',
    'Tourism language learning',
    'Academic language learning',
    'Cultural language learning',
    'Cultural language learning',
    'General language learning',
    'Business language learning',
    'Tourism language learning',
    'Academic language learning',
    'Cultural language learning',
  ];
  const Checkbox = ({ label }) => {
    const [checked, setChecked] = useState(false);
  
    const handleCheckboxChange = () => {
      setChecked(!checked);
    };
  
    return (
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
    );
  };
  

const JoinCommunities = () => {

  return (
    <div className=' relative custom-gradient4 h-screen w-full flex flex-col justify-evenly items-center'>
        <div className='ellipse3 rounded-full absolute bottom-0 left-0'></div>
        <div className='ellipse3 rounded-full absolute bottom-[40%] right-0'></div>
      <p className='text-5xl text-[#3A3148] font-extrabold mb-8' style={{ fontFamily: 'Literata, serif' }}>Which communities would you like to join...?</p>
      <div className='bg-white shadow-2xl overflow-hidden p-4 w-48 mb-4' style={{ height: '350px',width:"420px", overflowY: 'auto' }}>
        {
            communities.map((community, index) => (
                <p className='my-4 mr-4 flex justify-between items-center text-2xl text-[#7D7D7D] font-bold' key={index}>
                  <p className='mr-4'>{community}</p>
                  <Checkbox />
                </p>
              ))
        }
      </div>
      <button className='bg-white text-[#60359E] text-3xl font-bold rounded-lg shadow-lg px-4 py-3 mt-8 hover:font-extrabold hover:bg-slate-50 hover:shadow-xl transition-all duration-300' style={{ fontFamily: 'Literata, serif', width:"15%" }}>Next</button>


    </div>
  );
};

export default JoinCommunities;
