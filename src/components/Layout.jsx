import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';
import {Logo } from './Logo';
// import { useAppSelector } from '../../store/hook';
import Footer from '../pages/homepage/Footer';
import { ChoiceOfDirection } from './ChoiceOfDirection';
import './components-style/components-style.css';
import React from 'react';


const Layout = () => {
    
    return (
        <>
        <div className='main-header-top'>
          
        <div className="header__logo">
        <Logo className="logo" to="/">Лого</Logo>
        </div>
        <header>
            {/* <CustomLink className="menu__item" to="about-us">О нас</CustomLink> */}
            <CustomLink className="nav__item" to="/" onClick={() => window.scroll(0, 700)}>О нас</CustomLink>
            <CustomLink to="/posts">Как это работает</CustomLink>
            <CustomLink to="/" onClick={() => window.scroll(0, 2000)}>Отзывы</CustomLink>
            <CustomLink to="/order">Контакты</CustomLink>
        </header>
        
        <ChoiceOfDirection/>
       
         </div> 
        <main className="container">
            <Outlet />
        </main>
       
        <footer className="container-footer">
            <Footer/>
        </footer>
      
        </>
    )
}

export {Layout}
