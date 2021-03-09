import React from 'react';

const HomePage = ({videoList}: any) => {
    return (
        <div>
            <h2>Film Library</h2>
            <ul>
                {videoList && videoList.map((el: any) => {
                    return <li key={el.id}>{el.name}</li>
                })}
            </ul>
        </div>
    );
}

export default HomePage;