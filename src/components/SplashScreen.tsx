import React from 'react';

const SplashScreen = ({nextPage}: any) => {

    return (
        <div>
            <h1>WELCOME!</h1>
            <button onClick={nextPage}>COME INSIDE!</button>
        </div>
    );
}

export default SplashScreen;