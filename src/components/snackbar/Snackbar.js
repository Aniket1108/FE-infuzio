// Snackbar.js
import React, { useEffect } from 'react';

import './snackbar.scss';
const Snackbar = ({ message, handleClose, Type }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            handleClose();
        }, 3000);

        // Clear the timer if the component is unmounted or if handleClose is triggered
        return () => {
            clearTimeout(timer);
        };
    }, [handleClose]);

    return (
        <div id="snackbar__component">
            <div className={Type}>
                <div className='snackbar__content'>

                    <p>{message}</p>
                    <button className="close__btn" onClick={handleClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Snackbar;
