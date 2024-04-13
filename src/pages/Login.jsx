import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import waves from "../assets/landingpage/Component_1.svg";
import user from "../assets/landingpage/User3.svg";
import lock from "../assets/landingpage/Lock.svg";
import cross from "../assets/landingpage/Cross.svg";
import logo from "../assets/landingpage/Lingoverse.png";
import Navbar from "./Navbar";

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleSignup = (e) => {
    navigate('/register')
  }
  const crossClick = () => {
    navigate('/')
  }

  return (
    <>
    {/* <Navbar /> */}
      {/* <div className="h-screen w-screen flex justify-center items-center relative bg-[#FEF5F2]" style={{ fontFamily: 'Literata, serif' }}> */}
      <div className="h-screen w-screen flex justify-center items-center relative bg-white" style={{ fontFamily: 'Literata, serif' }}>
        <img src={waves} alt="waves" className="h-auto w-full z-0 flex justify-end items-end absolute bottom-0 left-0 " />

        <div className=" w-screen h-screen top-0 left-0 z-1 flex justify-center items-center ">
          <div className="relative bg-[##ffffff5e] z-1 border-2 border-[#f0f0ff] shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-2xl py-16 px-16">
            <span onClick={crossClick} className="cursor-pointer">
              <img src={cross} alt="waves" className="absolute top-4 right-4" />
            </span>
            <div className="flex">
              <img src={logo} className="h-24 mr-8 mb-4"/>
            <h1 className="text-center text-4xl mt-4 mb-8 font-extrabold text-[#60359E]" style={{ fontFamily: 'Literata, serif' }}>Login</h1>
            </div>
            <div className="flex">
            <input
            value={username}
            placeholder="Username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className="border-b-2 border-slate-400 w-64 py-2 bg-transparent outline-none font-medium text-slate-700"
            required
            />
            <span className="border-b-2 border-slate-400 pb-2">
                <img src={user}/>
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
                <img src={lock}/>
            </span>
        </div>

            <div className="text-center text-2xl font-extrabold text-[#60359E] bg-white py-2 px-4 mt-8 mb-8 rounded-lg shadow-lg shadow-[rgba(0,0,0,0.25)]  hover:bg-[#60359E] hover:text-white cursor-pointer" style={{ fontFamily: 'Literata, serif', border: "1px solid #CFC4EC" }}>
              <button className="" type="submit" onClick={handleSubmit}>Log in</button>
            </div>

            <span className="text-[#B6B6B6] font-medium text-xl">Don't have an account? </span>
            <span className="border-b-2 border-[#7D7D7D] text-[#7D7D7D] font-semibold text-xl cursor-pointer" onClick={handleSignup}> Sign up</span>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
