import React from 'react';
import './CardBottom.css';

function CardBotton({ nome, imagem, upSubscribers, followers, colorUpDonw, donwup }) {
    const UpDonw = { color: colorUpDonw }

    return (
        <section className='card-bottom'>
            <div className='topo'>
                <h4> {nome} </h4>
                <img src={imagem} alt={imagem} />
            </div>
            <div className='rodape-bottom'>
                <h5>{followers}</h5>
                <h6 style={UpDonw}>{donwup}{upSubscribers}</h6>
            </div>
        </section>
    )
};

export default CardBotton;