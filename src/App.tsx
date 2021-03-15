import React, { useState, useEffect } from 'react';
import './App.css';
import  SplashScreen from './components/SplashScreen';
import HomePage from "./components/HomePage";
import {fetchTokenAPI} from "./utils";
import { Box } from "@material-ui/core";

const App = () => {
    const [open, setOpen] = useState(true);
    const [token, setToken] = useState('');

    useEffect(() => {
        fetchTokenAPI().then(res => setToken(res))
    }, []);

    const handleClick = () => {
        setOpen(false);
    }

    return (
      <Box>
          {open ?
            <SplashScreen nextPage={handleClick}/>
          :
            <HomePage token={token}/>
          }
      </Box>
    );
}

export default App;
