import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';
import {Logo } from './Logo';
import Footer from '../pages/homepage/Footer'

const Layout = () => {
    return (
        <>
            <div className="header__bg">
        <div className="header__logo">
        <Logo className="logo" to="/">Лого</Logo>
        </div>
        <header>
            {/* <CustomLink className="menu__item" to="about-us">О нас</CustomLink> */}
            <CustomLink className="nav__item" to="/" onClick={() => window.scroll(0, 700)}>О нас</CustomLink>
            <CustomLink to="/posts">Как это работает</CustomLink>
            <CustomLink to="/" onClick={() => window.scroll(0, 2000)}>Отзывы</CustomLink>
            <CustomLink to="/about">Контакты</CustomLink>
        </header>
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
