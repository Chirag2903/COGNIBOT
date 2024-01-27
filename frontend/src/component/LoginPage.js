import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { Box, Typography, TextField, Button, Alert, Collapse, useMediaQuery } from "@mui/material";

const LoginPage = () => {
    const navigate = useNavigate();
    const NotMobile = useMediaQuery("(min-width: 1000px)");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/v1/login", { email, password });
            if (data.token) {
                localStorage.setItem("authToken", true);
                toast.success("Login Successfully");
                navigate("/tools");
            }

        } catch (err) {
            console.log(error);
            if (err.response.data.error) {
                setError(err.response.data.error);
            } else if (err.message) {
                setError(err.message);
            }
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };
    return (
        <Box width={NotMobile ? "25%" : "80%"} p={"2rem"} m={"5rem auto"} borderRadius={5}
            sx={{
                boxShadow: 5,
                backgroundColor: "white"
            }}>

            <Collapse in={error}>
                <Alert severity="error" sx={{ mb: 3 }}>
                    {error}
                </Alert>
            </Collapse>

            <form onSubmit={handleSubmit} >
                <Typography variant="h3" fontWeight={"bolder"} style={{
                    background: "linear-gradient(to left, #800080, #4B0082)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                }}>LOGIN</Typography>

                <TextField label="Email" type="email" required margin="normal"
                    fullWidth
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <TextField
                    label="Password"
                    type="password"
                    required
                    margin="normal"
                    fullWidth
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                        color: "white", mt: 3, background: "linear-gradient(to left, #800080, #4B0082)",
                    }}
                >
                    Sign In
                </Button>
                <Typography mt={3}>
                    Don't have an account ? <Link style={{ textDecoration: "none" }} to="/register">Register</Link>
                </Typography>
            </form>
        </Box>
    );
};

export default LoginPage;
