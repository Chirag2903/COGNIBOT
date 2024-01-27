import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import headerimage from "../../assests/chatbotheader.png"
import "./Header.css";
import axios from "axios"
import { toast } from "react-hot-toast";


const Header = () => {

    const navigate = useNavigate();
    const loggedIn = JSON.parse(localStorage.getItem("authToken"));

    //Logging out
    const handleLogout = async () => {
        try {
            await axios.post("/api/v1/logout");
            localStorage.removeItem("authToken");
            toast.success("Logout Successful");
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className='header'>
            <div className='container1'>
                <img src={headerimage} alt='bot' />
                <h2>CryptoQuill</h2>
            </div>{
                loggedIn ? (
                    <>
                        <div className='contain2'>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/tools'>AI Tools</NavLink>
                            <NavLink to='/chatbot'>ChatBot</NavLink>
                            <NavLink to='/image-generate'>Image Generator</NavLink>
                            <NavLink to='/login' onClick={handleLogout}>Logout</NavLink>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='contain3'>
                            <NavLink to='/login'>Login In</NavLink>
                            <NavLink to='/register'>Sign Up</NavLink>
                        </div>
                    </>
                )
            }

        </div>
    )
}

export default Header