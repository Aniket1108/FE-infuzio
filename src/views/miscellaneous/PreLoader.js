import React, { Fragment } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles'

const Backdrop = styled('div')({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    zIndex: 9998, // Ensure the backdrop is behind the preloader
});

const PreloaderContainer = styled('div')({
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999, // Ensure the preloader is on top of the backdrop
});

const Preloader = () => {
    return (
        <>
            <Backdrop />
            <PreloaderContainer>
                <CircularProgress color="inherit" />
            </PreloaderContainer>
        </>
    );
};

export default Preloader;


// import Preloader from 'src/views/miscellaneous/Preloader.js';

// const [isLoading, setIsLoading] = useState(true);

// setIsLoading(false); //inside api

// return(
//     <Fragment>
// {isLoading ? (
//     <Preloader />
// ) : (<>
// //your code
// </>
// )}
// <Fragment/>
// )