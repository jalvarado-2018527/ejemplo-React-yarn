import React from 'react';
import ReactDOM from 'react-dom/client'
import { PrimeraApp } from './PrimeraApp';
import { HolaMundo } from './ElPokeJairo';
import { Contador } from './Contador';

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>

    {/* <Contador/> */}
    <PrimeraApp  nombre={" ElPokejairo "}/>


    </React.StrictMode>

);