import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import axios from "axios";
import {
    Box,
    Typography,
    TextField,
    Button,
    Alert,
    Collapse,
    Card,
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Chatbot = () => {

    const [text, settext] = useState("");
    const [response, setresponse] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); // Added loading state

    //register ctrl
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios.post("/api/v1/chatbot", { text });
            setLoading(false);
            console.log(data);
            setresponse(data);
        } catch (err) {
            setLoading(false);
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
        <Box
            width={"80%"}
            p={"2rem"}
            m={"2rem auto"}
            borderRadius={5}
            sx={{ boxShadow: 5 }}
        >
            <Collapse in={error}>
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            </Collapse>
            {loading ? (
                <Loader />
            ) : response ? (
                <Card
                    sx={{
                        mt: 4,
                        border: 1,
                        boxShadow: 0,
                        height: "500px",
                        borderRadius: 5,
                        borderColor: "natural.medium",
                        bgcolor: "background.default",
                    }}
                >
                    <Typography p={2}>{response}</Typography>
                </Card>
            ) : (
                <Card
                    sx={{
                        mt: 4,
                        border: 1,
                        boxShadow: 0,
                        height: "300px",
                        borderRadius: 5,
                        borderColor: "natural.medium",
                        bgcolor: "background.default",
                    }}
                >
                    <Typography
                        variant="h1"
                        color="natural.main"
                        sx={{
                            textAlign: "center",
                            verticalAlign: "middel",
                            lineHeight: "270px",
                            fontSize: "20px"
                        }}
                    >
                        Chat
                    </Typography>
                </Card>
            )}

            <form onSubmit={handleSubmit}>
                <Typography variant="h3" align="center" m={1}>ChatBot</Typography>

                <TextField
                    placeholder="Enter Your text"
                    type="text"
                    multiline={true}
                    required
                    margin="normal"
                    style={{ width: "68%" }}
                    value={text}
                    onChange={(e) => {
                        settext(e.target.value);
                    }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{ color: "white", mt: 2, ml: 2, }}
                >
                    Chat
                </Button>
                <Typography mt={2} display={"flex"}  >
                    <ArrowBackIcon fontSize="medium" />
                    Want to Try other Tools ?  <Link style={{ textDecoration: "none", marginLeft: "8px" }} to="/">BACK</Link>
                </Typography>
            </form>
        </Box>
    );
};


export default Chatbot;