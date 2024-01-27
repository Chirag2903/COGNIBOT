import React, { useEffect } from 'react'
import "./HomePage.css"
import image from "../../assests/chatbot.png"
import { Link } from "react-router-dom";
import Typed from 'typed.js';


const HomePage = () => {

    useEffect(() => {

        const options = {
            strings: ["CHAT BOT", "INTELLI CHAT", "CIPHER CHAT"],
            typeSpeed: 80,
            backSpeed: 60,
            backDelay: 1000,
            loop: true,
        };
        const typed = new Typed(".typed-text", options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='homepage'>
            <div className='homepage-container'>
                <div className='homepage-left'>
                    <h1><span className="typed-text"></span></h1>
                    <p>A cryptocurrency chatbot is an AI-powered conversational agent designed to assist users in obtaining real-time information, updates, and insights related to various cryptocurrencies and their market activities.</p>
                    <Link to="/chatbot"> <button>Lets Get Started →</button></Link>
                </div>
                <div className='homepage-right'>
                    <img src={image} alt='bot' />
                </div>
            </div>
        </div >
    )
}

export default HomePage