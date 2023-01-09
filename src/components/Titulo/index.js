import React from 'react';
import BotaoTrocaTema from '../BotaoTrocaTema/BotaoTrocaTema';
import "./Titulo.css";

function Titulo() {
  return (
    <header>
      <div className='titulo-principal'>
        <h1>Social Media Dashboard</h1>
        <h4>Total Followers: 23,004</h4>
      </div>
      <div>
      <BotaoTrocaTema />
      </div>
    </header>
  )
};

export default Titulo;