import React, { useState, useEffect } from 'react';
import './App.css';
import  SplashScreen from './components/SplashScreen';
import HomePage from "./components/HomePage";

const App = () => {
    const [open, setOpen] = useState(true);
    const [videoList, setVideoList] = useState(null);


    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    }

    useEffect(() => {
        fetch("https://thebetter.bsgroup.eu/Authorization/SignIn", requestOptions)
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(e => console.log(e));
    }, []);

    const handleClick = () => {
        setOpen(false);
    }

    return (
      <div>
          {open ?
            <SplashScreen nextPage={handleClick}/>
          :
            <HomePage videoList={videoList}/>
          }
      </div>
    );
}

export default App;
