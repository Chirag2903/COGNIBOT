import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
    return (
        <Fragment>
            <div className='home'>
                <div className='home-container'>
                    <div className='container'>
                        <div className='container-1'>
                            <img width="64" height="64" src="https://img.icons8.com/arcade/64/laptop-coding.png" alt="laptop-coding" />
                            <h1>Python Converter</h1>
                        </div>
                        <div className='container-2'>
                            <p>The "Text to Python Code" application is a versatile tool designed to simplify the process of converting written text into executable Python code. This application streamlines the translation of textual instructions, algorithms, or logic into functional Python scripts.</p>
                        </div>
                        <Link to="/code-converter"> <button>Try Now</button></Link>
                    </div>
                    <hr></hr>
                    <div className='container'>
                        <div className='container-1'>
                            <img width="64" height="64" src="https://img.icons8.com/nolan/64/sign-up.png" alt="sign-up" />
                            <h1>Paragraph Generator</h1>
                        </div>
                        <div className='container-2'>
                            <p> The input-based paragraph generator application is a versatile tool that generates paragraphs of text based on user-provided input.</p>
                        </div>
                        <Link to="/paragraph"> <button>Try Now</button></Link>
                    </div>
                    <hr></hr>
                    <div className='container'>
                        <div className='container-1'>
                            <img width="64" height="64" src="https://img.icons8.com/ios-filled/100/7950F2/summary-list.png" alt="summary-list" />
                            <h1>Text Summarization</h1>
                        </div>
                        <div className='container-2'>
                            <p> A powerful tool that condenses lengthy texts into concise summaries, saving time and providing a quick overview of the main points. Ideal for research, content curation, and information extraction from large documents or articles.</p>
                        </div>
                        <Link to="/summary"> <button>Try Now</button></Link>

                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Home