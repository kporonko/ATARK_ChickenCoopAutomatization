import React from 'react';

const Loader = () => {
    return (
        <div className='loader-wrap'>
            <div>
                <img className='loader-gif' src={require('../assets/icons8-spinner.gif')} alt="loading..." />
            </div>
            <div>
                <h2 className='loader-text'>Loading...</h2>
            </div>
        </div>
    );
};

export default Loader;