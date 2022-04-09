import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../../redux/features/userSlice';
import SingleUser from '../SingleUser/SingleUser';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Pagination, Paper } from '@mui/material';

const Home = () => {
    const dispatch = useDispatch();

    const [allUsers, setAllUsers] = useState([]);
    // const [pagination, setPagination] = useState(1);
    const [page, setPage] = React.useState(1);


    useEffect(() => {
        const URL = `https://reqres.in/api/users?page=${page}`;
        axios.get(URL)
            .then(res => {
                setAllUsers(res.data.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [page])


    const handleChange = (event, value) => {
        setPage(value);

    };

    return (
        <>
            <NavigationBar />
            <div className='container'>
                <h2 className='text-3xl lg:text-5xl font-semibold py-5'>Welcome To Convin World</h2>

                <SingleUser />

                <Paper>
                    <div className='mx-auto my-5'>
                        {
                            allUsers.map((user, index) => <button
                                key={index}
                                onClick={() => dispatch(getUser(user.id))}
                                className="bg-gray-200 mx-3 px-2 py-1 rounded-md">
                                [{user.id}]
                            </button>
                            )
                        }
                    </div>
                </Paper>

                <h2 className='text-green-500 text-lg flex justify-end w-9/12 mb-3 mt-5'>Please Change The page</h2>
                <div className='flex justify-end w-9/12'>
                    <Pagination count={2} page={page} onChange={handleChange} />
                </div>

                {/* <button onClick={() => setPagination(1)} className="bg-green-300 hover:bg-green-400 rounded-lg px-8 py-1 ">Prev</button>
                <button onClick={() => setPagination(2)} className="bg-green-300 hover:bg-green-400 rounded-lg px-8 py-1 ml-5">Next</button> */}
            </div>
        </>
    );
};

export default Home;