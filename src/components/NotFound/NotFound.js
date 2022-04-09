import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-5xl mt-10'>404  Page Not Found</h1>
            <div className='flex justify-center mt-5'>
                <Link to="/">
                    <Button color='secondary' variant='contained'>BACK TO HOME</Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;