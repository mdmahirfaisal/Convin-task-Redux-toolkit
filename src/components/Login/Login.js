import React, { useState } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Paper, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Email: ", email, "Password: ", password);
    }

    return (
        <>
            <NavigationBar />
            <div className='container'>
                <h2 className='text-4xl font-semibold py-5'>Please Login Here</h2>
                <Paper>
                    <form onSubmit={handleLogin} className="flex flex-col gap-2 p-3 ">
                        <TextField type="email" onChange={(e) => setEmail(e.target.value)} label="Email" variant="standard" required />
                        <TextField type="password" onChange={(e) => setPassword(e.target.value)} label="Password" variant="standard" required />
                        <Button type="submit" variant="contained" color="secondary">Please Login</Button>
                    </form>
                    <p className="pb-4 text-right mr-2">Don't have account?: <Link className="font-semibold text-blue-500" to="/register">Please Register</Link></p>
                </Paper>
            </div>
        </>
    );
};

export default Login;