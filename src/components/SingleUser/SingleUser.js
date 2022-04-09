import { CircularProgress } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const SingleUser = () => {

    const { user, loading } = useSelector(state => state);
    const { first_name, last_name, email, avatar } = user?.user;
    return (
        <div className='mx-auto'>
            {
                loading ? <h2 className='text-4xl'><CircularProgress /> </h2>
                    :
                    <>
                        {
                            user.user.id ?
                                <div className="card-container pb-3">
                                    <img className="round" src={avatar} alt="user Img" />
                                    <h3>First Name: {first_name}</h3>
                                    <h3 className='my-2'>Last Name: {last_name}</h3>

                                    <p>{email} <br /> front-end developer</p>
                                    <div className="buttons">
                                        <button className="primary mr-1">
                                            Message
                                        </button>
                                        <button className="primary ghost ml-1">
                                            Following
                                        </button>
                                    </div>
                                </div>
                                :
                                <h2 className='text-4xl'>Please click the buttons below and load a single user.</h2>
                        }
                    </>
            }
        </div >
    );
};

export default SingleUser;