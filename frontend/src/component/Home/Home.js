import React, { Fragment } from 'react'
import Description from "@mui/icons-material/Description";
import CreateIcon from '@mui/icons-material/Create';
import ChatIcon from '@mui/icons-material/Chat';
import CodeIcon from '@mui/icons-material/Code';
import ImageIcon from '@mui/icons-material/Image';
import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
    return (
        <Fragment>
            <div className='home'>

                <Link to="/image-generate">
                    <div className='container'>
                        <div className='container-1'>
                            <ImageIcon fontSize="large" color='primary' />
                            <h1>Image Generator</h1>
                        </div>
                        <div className='container-2'>
                            <p> The "Text to Image Converter" application is a powerful tool designed to transform textual content into visually appealing images effortlessly. With this application, users can easily convert written text, quotes, or messages into captivating images suitable for various purposes.</p>
                        </div>
                    </div>
                </Link>


                <Link to="/code-converter">
                    <div className='container'>
                        <div className='container-1'>
                            <CodeIcon fontSize="large" color='primary' />
                            <h1>Python Converter</h1>
                        </div>
                        <div className='container-2'>
                            <p>The "Text to Python Code" application is a versatile tool designed to simplify the process of converting written text into executable Python code. This application streamlines the translation of textual instructions, algorithms, or logic into functional Python scripts.</p>
                        </div>
                    </div>
                </Link>


                <Link to="/paragraph">
                    <div className='container'>
                        <div className='container-1'>
                            <CreateIcon fontSize="large" color='primary' />
                            <h1>Paragraph Generator</h1>
                        </div>
                        <div className='container-2'>
                            <p> The input-based paragraph generator application is a versatile tool that generates paragraphs of text based on user-provided input.</p>
                        </div>
                    </div>
                </Link>

                <Link to="/summary">
                    <div className='container'>
                        <div className='container-1'>
                            <Description fontSize="large" color='primary' />
                            <h1>Text Summarization</h1>
                        </div>
                        <div className='container-2'>
                            <p> A powerful tool that condenses lengthy texts into concise summaries, saving time and providing a quick overview of the main points. Ideal for research, content curation, and information extraction from large documents or articles.</p>
                        </div>
                    </div>
                </Link>


                <Link to="/chatbot">
                    <div className='container'>
                        <div className='container-1'>
                            <ChatIcon fontSize="large" color='primary' />
                            <h1>ChatBot</h1>
                        </div>
                        <div className='container-2'>
                            <p> The chat bot effortlessly understands and responds to a wide array of questions across various domains. From general knowledge inquiries to specific interests, the chat bot provides accurate and reliable information in real-time. </p>
                        </div>
                    </div>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home