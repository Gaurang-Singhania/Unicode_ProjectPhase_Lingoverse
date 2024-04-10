import React from 'react';
import illustration from "../assets/landingpage/Business agreement.svg";
import plus from "../assets/landingpage/Plus.svg";
import cross from "../assets/landingpage/Cross.svg";
import Modal from 'react-modal';
import Sidebar from '../components/Sidebar';



const Community = () => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          height:'50vh',
          width:'25%',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          borderRadius:'10px'
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }
      };

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="h-screen w-full flex justify-between" style={{ fontFamily: 'Literata, serif' }}>
            <Sidebar/>
            
            <div className='relative bg-[#F6FFF6] flex flex-col justify-center items-center' style={{ width: '75%', height: '100vh' }}>
                <img src={illustration} alt="illustration"/>
                <p className='text-3xl font-bold text-[#7D7D7D]'>Connect and learn...</p>
                <button onClick={openModal} className='absolute bottom-8 right-8 flex bg-[#60359E] text-[#F8F8FF] text-3xl font-bold rounded-lg px-4 py-2 shadow-2xl hover:bg-[#4f228f] hover:shadow-lg'>
                    <span>Create &nbsp;</span>
                    <img src={plus} alt="plus" className='mt-2'/>
                </button>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button onClick={closeModal} className='absolute left-4 top-4'>
                        <img src={cross} alt="plus" className='mt-2'/>
                    </button>
                    <form>
                        <div className='flex flex-col'style={{ fontFamily: 'Literata, serif' }}>
                        <label className='font-bold text-2xl text-[#3A3148]'>Enter community name</label>
                        <input type='text' className='bg-[#EDEDED] rounded p-2 mt-2'/>
                        </div>
                        <div className='flex flex-col mt-4'style={{ fontFamily: 'Literata, serif' }}>
                        <label className='font-bold text-2xl text-[#3A3148]'>Enter language</label>
                        <input type='text' className='bg-[#EDEDED] rounded p-2 mt-2'/>
                        </div>
                        <div >
                    <button className='mt-8 w-64 flex bg-[#60359E] text-center text-[#F8F8FF] text-3xl font-bold rounded-lg px-4 py-2 shadow-2xl hover:bg-[#4f228f] hover:shadow-lg'>
                    <span className='text-center transform translate-x-1/2'>Create &nbsp;</span>
                    <img src={plus} alt="plus" className='mt-2 transform translate-x-16'/>
                    </button>
                    </div>

                    </form>
                </Modal>
            </div>
        </div>
    );
}

export default Community;
