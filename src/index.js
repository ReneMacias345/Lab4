import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { CustomHook } from './components/CustomHook';
//import { PokemonCard } from './components/PokemonCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomHook />
  </React.StrictMode>
);

reportWebVitals();  
