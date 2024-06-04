import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';
import {Logo } from './Logo';
// import { useAppSelector } from '../../store/hook';
import Footer from '../pages/homepage/Footer';
import { ChoiceOfDirection } from './ChoiceOfDirection';
import './components-style/components-style.css';
import React from 'react';


const Layout = ({searchValue, setSearchValue}) => {
    
   
    return (
        <>
        <div className='main-header-top'>
          
        <div className="header__logo">
        <Logo className="logo" to="/">Лого</Logo>
        </div>
        <div className="header-bg_items">
        <header className="header-items">
            
            {/* <CustomLink className="menu__item" to="about-us">О нас</CustomLink> */}
            <CustomLink className="header_link" to="/" onClick={() => window.scroll(0, 700)}>О нас</CustomLink>
            <CustomLink className="header_link" to="/posts">Как это работает</CustomLink>
            <CustomLink className="header_link" to="/" onClick={() => window.scroll(0, 2000)}>Отзывы</CustomLink>
            <CustomLink className="header_link" to="/order">Контакты</CustomLink>
        </header>
        </div>
        
        <ChoiceOfDirection />
       
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
