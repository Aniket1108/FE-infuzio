'use client'

import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

const BitcoTasks = () => {

    const containerStyle = {
        width: '100%',
        height: '700px',
        border: '0',
        padding: '0',
        margin: '0',
        overflow: 'auto', // Add scrolling behavior to the container
    };

    const iframeStyle = {
        width: '100%',
        height: '100%',
        border: '0',
    };

    const [url, setUrl] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        const decoded = jwtDecode(token);
        const dynamicUrl = `https://bitcotasks.com//offerwall/09qe9dy1cb0jyo3dj5rtnnqbc4t1rd/${decoded.userId}`;
        setUrl(dynamicUrl);
    }, []);


    return (
        <div style={containerStyle}>
            <iframe
                style={iframeStyle}
                src={url}
            ></iframe>
        </div>

    );
};

export default BitcoTasks;