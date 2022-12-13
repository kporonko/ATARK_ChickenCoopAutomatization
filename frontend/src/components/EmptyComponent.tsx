import React from 'react';

const EmptyComponent = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', margin: '20px 0'}}>
            <div>
                <h2 style={{fontSize: '34px', fontFamily: 'Oswald', fontWeight: '100'}}>
                    No data...
                </h2>
            </div>
        </div>
    );
};

export default EmptyComponent;