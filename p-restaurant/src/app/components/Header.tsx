'use client'

import React, {useState, useEffect} from 'react';
import './header.css';
import Link from 'next/link';
import AppBtn from './AppBtn';
import Nav from './Nav';

export default function Header() {
     const [scroll, setScroll] = useState(0); //Guarda la posición del scroll para aplicar o quitar la clase header-scrolled
     /* const [on, setOn] = useState(false); Indica si el menú móvil está abierto o cerrado

     const handleToogleMenu = () => {
        setOn(prev => !prev);

        document.body.classList.toggle('mobile-nav-active')
       
    } */
    
        useEffect(() => {
            window.addEventListener('scroll',()=> {
                setScroll(window.scrollY);
            });
            return () => {
                window.removeEventListener('scroll', ()=> {
                    setScroll(window.scrollY);
                });
            };
        }, [scroll]);

  return (
    <header id='header' className={`fixed-top d-flex align-items-center ${scroll > 100 ? 'header-scrolled' : undefined}`}>
        <div className='container-fluid container-xl d-flex aling-items-center justify-content-lg-between'>
            <h1 className='logo me-auto me-lg-0'>
                <Link href='/'>Restaurant</Link>
            </h1>
      
            {/*Para utilizar una imagen de logo */}
            {/* <Link href="index.html"className='logo me-auto me-lg-0'>
                <img src="assets/img/logo.png" alt="Comment" className="img-fluid" /></Link>
            
            */}
            <Nav/>
          {/*   <div className="position-relative">
             {
                    on ? (
                        <i className='bi bi-x mobile-nav-toggle' onClick={handleToogleMenu}></i>
                    ) : ( <i className='bi bi-list mobile-nav-toggle' onClick={handleToogleMenu}></i>)

                }
                </div> */}
            <AppBtn name='Book a table'/>
        </div>
    </header>
  )
}
