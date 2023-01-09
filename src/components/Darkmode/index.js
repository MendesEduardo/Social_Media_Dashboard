import React, { createContext, useState, useEffect } from 'react';
import './ThemeContext.css';

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.querySelector('body').classList.add('dark')
      setTheme('dark')
    } else {
      document.querySelector('body').classList.remove('dark')
      setTheme('light')
    }
  }, [])

  function toggleThemeMode() {
    if (
      !localStorage.getItem('theme') ||
      localStorage.getItem('theme') === 'light'
    ) {
      localStorage.theme = 'dark'
      document.querySelector('body').classList.add('dark');
      document.querySelector('.titulo-principal').classList.add('dark');
      document.querySelector('.sub-titulo').classList.add('dark');
      
      const cardTop = document.querySelectorAll('.card-top')
      for (let i = 0; i < cardTop.length; i++) {
        cardTop[i].classList.add('dark');
      }

      const cardBottom = document.querySelectorAll('.card-bottom')
      for (let i = 0; i < cardBottom.length; i++) {
        cardBottom[i].classList.add('dark');
      }
      setTheme('dark')
    } else {
      localStorage.theme = 'light'
      document.querySelector('body').classList.remove('dark');
      document.querySelector('.titulo-principal').classList.remove('dark');
      document.querySelector('.sub-titulo').classList.remove('dark');

      const cardTop = document.querySelectorAll('.card-top')
      for (let i = 0; i < cardTop.length; i++) {
        cardTop[i].classList.remove('dark');
      }
      
      const cardBottom = document.querySelectorAll('.card-bottom')
      for (let i = 0; i < cardBottom.length; i++) {
        cardBottom[i].classList.remove('dark');
      }
      setTheme('light')
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleThemeMode }}>
      {children}
    </ThemeContext.Provider>
  )
};

export default ThemeProvider;