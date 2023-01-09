import React from 'react';
import './CardTop.css';

function CardTop({ numero, imagem, upSubscribers, social, followers, color, colorUpDonw, donwup }) {
  const corDaBorda = { borderColor: color }
  const UpDonw = { color: colorUpDonw }

  return (
    <section className='card-top' style={corDaBorda}>
      <div className='topo'>
        <img src={imagem} alt={imagem} />
        <h4> {social} </h4>
      </div>
      <div className='rodape-top'>
        <h4>{numero}</h4>
        <h5>{followers}</h5>
        <h6 style={UpDonw}>{donwup}{upSubscribers}</h6>
      </div>
    </section>
  )
};

export default CardTop;