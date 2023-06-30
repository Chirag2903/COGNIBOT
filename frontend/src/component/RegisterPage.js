import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { Box, Typography, TextField, Button, Alert, Collapse, useMediaQuery } from "@mui/material";

const RegisterPage = () => {
    const navigate = useNavigate();
    const NotMobile = useMediaQuery("(min-width: 600px)");

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/v1/register", { username, email, password });
            toast.success("User Register Successfully");
            navigate("/login");
        } catch (err) {
            console.log(error);
            if (err.response.data.error) {
                setError(err.response.data.error);
            } else if (err.message) {
                setError(err.message);
            }
        }
    };
    return (
        <Box p={"2rem"} width={NotMobile ? "25%" : "80%"} m={"5rem auto"} borderRadius={5}
            sx={{
                boxShadow: 5,
            }}>

            <Collapse in={error}>
                <Alert severity="error" sx={{ mb: 1 }}>
                    {error}
                </Alert>
            </Collapse>

            <form onSubmit={handleSubmit}>
                <Typography variant="h3">SIGN UP</Typography>

                <TextField
                    label="Username"
                    required
                    margin="normal"
                    fullWidth
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />

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
                    sx={{ color: "white", mt: 3 }}
                >
                    Sign Up
                </Button>
                <Typography mt={3}>
                    Already have an account ?  <Link style={{ textDecoration: "none" }} to="/login">Login</Link>
                </Typography>
            </form>
        </Box>
    );
};

export default RegisterPage