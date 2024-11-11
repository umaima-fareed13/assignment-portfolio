"use client";

import { TypeAnimation } from 'react-type-animation';

import Header from "./components/header";

import Link from "next/link";

export default function Home(){
    return(
        <div>
            <Header />
            <div>
            <div className="homeContainer">
            <div className="homeTitle">
                <h1>MY PORTFOLIO</h1>        
            </div>
            <div className="homeContent">
                <h2><span className="umaimaName">This is me,</span><br/>
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Umaima Fareed',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'software developer',
        1000,
        'learning from Governor House ',
        1000,
        'Teacher is Sir Anas & Sir Ubaid',
        1000
      ]}
      wrapper="span"
      speed={50}

      repeat={Infinity}
    />
                </h2>
            </div>  
            </div> 
            <div className="descriptionHome">
            <p>I am a passionate and dedicated software engineer with
                  <br/> a keen interest in creating innovative solutions for
                   various industries.</p>
            </div> 
            <div className="myPicture">
            <img src="./profile.jpg"/>
            </div>
            </div>
            <div className="resumeContainer">
                <p className="click">click</p>
                <Link href={"./Resume"}>My Resume</Link>
             </div>
        </div>
    )
}