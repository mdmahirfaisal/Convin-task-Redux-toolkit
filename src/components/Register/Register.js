import React, { useState } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Paper, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("FirstName: ", firstName, "Last Name: ", "Address: ", address, "Phone: ", phone, lastName, "Email: ", email, "Password: ", password);
    }

    return (
        <>
            <NavigationBar />
            <div className='container'>
                <h2 className='text-4xl font-semibold py-5'>Please Register Here</h2>
                <Paper>
                    <form onSubmit={handleRegister} className="flex flex-col gap-2 p-3 ">
                        <div className='flex justify-between gap-5'>
                            <TextField className="w-3/6" type="text" onChange={(e) => setFirstName(e.target.value)} label="First Name" variant="standard" required />
                            <TextField className="w-3/6" type="text" onChange={(e) => setLastName(e.target.value)} label="Last Name" variant="standard" required />
                        </div>
                        <div className='flex justify-between gap-5'>
                            <TextField className="w-3/6" type="text" onChange={(e) => setAddress(e.target.value)} label="Address" variant="standard" required />
                            <TextField className="w-3/6" type="number" onChange={(e) => setPhone(e.target.value)} label="Phone" variant="standard" required />
                        </div>
                        <TextField type="email" onChange={(e) => setEmail(e.target.value)} label="Email" variant="standard" required />
                        <TextField type="password" onChange={(e) => setPassword(e.target.value)} label="Password" variant="standard" required />
                        <Button type="submit" variant="contained" color="secondary">Please Login</Button>
                    </form>
                    <p className="pb-4 text-right mr-2">Already have an account?: <Link className="font-semibold text-blue-500" to="/login">Please Login</Link></p>
                </Paper>
            </div>
        </>
    );
};

export default Register;