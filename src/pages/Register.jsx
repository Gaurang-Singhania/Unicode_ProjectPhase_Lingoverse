import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import waves from "../assets/landingpage/Component_1.svg";
import user from "../assets/landingpage/User3.svg";
import lock from "../assets/landingpage/Lock.svg";
import Email from "../assets/landingpage/Email.svg";
import cross from "../assets/landingpage/Cross.svg";
import Navbar from "./Navbar";

const Register = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  const handleSignin=(e)=>{
    navigate('/login')
  }
  const crossClick=()=>{
    navigate('/')
  }

  return (
    <>
    {/* <Navbar/> */}
    <div className="h-screen w-screen flex justify-center items-center relative bg-[#FEF5F2]"style={{ fontFamily: 'Literata, serif'}}>
        
      <img src={waves} alt="waves" className="h-auto w-full z-0 flex justify-end items-end absolute bottom-0 left-0 "/>

      <div className=" w-screen h-screen top-0 left-0 z-1 flex justify-center items-center ">
        <div className="relative bg-transparent z-1 border-2 border-white shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-2xl py-16 px-16">
        <span onClick={crossClick} className="cursor-pointer">
        <img src={cross} alt="waves" className="absolute top-2 right-2"/>
        </span>
            <h1 className="text-center text-3xl mb-2 font-extrabold text-[#60359E]" style={{ fontFamily: 'Literata, serif'}}>Register</h1>
            <div className="flex">
            <input
            value={email}
            placeholder="Email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            className="border-b-2 border-slate-400 w-64 py-2 bg-transparent outline-none font-medium text-slate-700"
            required
            />
            <span className="border-b-2 border-slate-400 pb-2">
                <img src={Email} className="w-8 h-8"/>
            </span>
        </div>
            <div className="flex mt-8">
            <input
            value={username}
            placeholder="Username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className="border-b-2 border-slate-400 w-64 py-2 bg-transparent outline-none font-medium text-slate-700"
            required
            />
            <span className="border-b-2 border-slate-400 pb-2">
                <img src={user} className="w-8 h-8"/>
            </span>
        </div>
            <div className="flex mt-8">
            <input
            value={password}
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="border-b-2 border-slate-400 w-64 py-2 bg-transparent outline-none font-medium text-slate-700"
            required
            />
            <span className="border-b-2 border-slate-400 pb-2">
                <img src={lock} className="w-8 h-8"/>
            </span>
        </div>

        <div className="text-center text-2xl font-extrabold text-[#60359E] bg-white py-2 px-4 mt-8 mb-8 rounded-lg shadow-lg shadow-[rgba(0,0,0,0.25)]" style={{ fontFamily: 'Literata, serif',border:"1px solid #CFC4EC"}}>
        <button className="" type="submit" onClick={handleSubmit}>Sign up</button>
      </div>

      <span className="text-[#B6B6B6] font-medium text-xl">Already have an account? </span>
      <span className="border-b-2 border-[#7D7D7D] text-[#7D7D7D] font-semibold text-xl cursor-pointer" onClick={handleSignin}> Sign In</span>

        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
