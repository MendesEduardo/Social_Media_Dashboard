import React from 'react';
import './App.css'
import Titulo from './components/Titulo';
import SubTitulo from './components/SubTitulo';
import CardTop from './components/CardTop';
import CardBottom from './components/CardBotton';
import Face from './img/icon-facebook.svg';
import Twitter from './img/icon-twitter.svg';
import Instagram from './img/icon-instagram.svg';
import Youtube from './img/icon-youtube.svg';
import ThemeProvider from './components/Darkmode';

function App() {

  const dadosCardTop = [
    {
      numero: '1987',
      social: '@nathanf',
      followers: 'Followers',
      imagem: Face,
      upSubscribers: '12 Today',
      color: '#028AE3',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      numero: '1044',
      social: '@nathanf',
      followers: 'Followers',
      imagem: Twitter,
      upSubscribers: '99 Today',
      color: '#03A3ED',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      numero: '11K',
      social: '@realnathanf',
      followers: 'Followers',
      imagem: Instagram,
      upSubscribers: '1099 Today',
      color: '#e24b91',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      numero: '8239',
      social: 'Nathan F.',
      followers: 'Subscribers',
      imagem: Youtube,
      upSubscribers: '144 Today',
      color: '#D90427',
      colorUpDonw: '#E20C0C',
      donwup: '-'
    },
  ]

  const dadosCardBottom = [
    {
      nome: 'Page Views',
      followers: '87',
      imagem: Face,
      upSubscribers: '3%',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      nome: 'Likes',
      followers: '52',
      imagem: Face,
      upSubscribers: '2%',
      colorUpDonw: '#E20C0C',
      donwup: '-'
    },
    {
      nome: 'Likes',
      followers: '5462',
      imagem: Instagram,
      upSubscribers: '2257%',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      nome: 'Profile Views',
      followers: '52k',
      imagem: Instagram,
      upSubscribers: '1375%',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      nome: 'Retweets',
      followers: '117',
      imagem: Twitter,
      upSubscribers: '303%',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      nome: 'Likes',
      followers: '507',
      imagem: Twitter,
      upSubscribers: '553%',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      nome: 'Likes',
      followers: '107',
      imagem: Youtube,
      upSubscribers: '19%',
      colorUpDonw: '#E20C0C',
      donwup: '-'
    },
    {
      nome: 'Total Views',
      followers: '1407',
      imagem: Youtube,
      upSubscribers: '12%',
      colorUpDonw: '#E20C0C',
      donwup: '-'
    },
  ]

  return (
    <div className='App'>
      <ThemeProvider>
        <Titulo />

        {dadosCardTop.map(cardTop => <CardTop
          key={cardTop.imagem}
          numero={cardTop.numero}
          social={cardTop.social}
          followers={cardTop.followers}
          imagem={cardTop.imagem}
          upSubscribers={cardTop.upSubscribers}
          color={cardTop.color}
          colorUpDonw={cardTop.colorUpDonw}
          donwup={cardTop.donwup}
        />)}

        <SubTitulo />

        {dadosCardBottom.map(cardBottom => <CardBottom
          key={cardBottom.followers}
          nome={cardBottom.nome}
          followers={cardBottom.followers}
          imagem={cardBottom.imagem}
          upSubscribers={cardBottom.upSubscribers}
          colorUpDonw={cardBottom.colorUpDonw}
          donwup={cardBottom.donwup}
        />)}

      </ThemeProvider>
    </div>
  );
}

export default App;
