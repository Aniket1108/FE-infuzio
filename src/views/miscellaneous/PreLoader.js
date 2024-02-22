// Preloader.js
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Preloader = ({ loading }) => {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: loading ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999, // Adjust as needed
                backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
            }}
        >
            <CircularProgress />
        </Box>
    );
};

export default Preloader;
