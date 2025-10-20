'use client';

import React, {useState} from 'react';
import './header.css';
import Link from 'next/link';
import Nav from './Nav';
import Sci from './Sci';
import SearchForm from './SearchForm';

export default function Header() {
    const [open, setOpen] =useState(false);
    const [on, setOn]=useState(false);


    const handleToogleMenu = () => {
        setOn(!on);

        document.body.classList.toggle('mobile-nav-active')
       
    }

  return (
    <header id="header" className='header d-flex align-items-center fixed-top'>
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <Link href="/" className="logo d-flex align-items-center">
                <h1>DigitalNews</h1>
            {/* <img src="" alt="" /> */}
            
            </Link>
            <Nav />
            <div className="position-relative">
                { //Si no está abierto el buscador mostrar todos los iconos
                    !open && (
                    <>
                    <Sci/>
                    <a className='mx-2 js-search-open' onClick={()=> setOpen(true)}>
                    <span className='bi-search'></span>
                    </a>
                    </>)
                }
                    <SearchForm active={open} onClose={()=> setOpen(false)}/>
                
                {
                    on ? (
                        <i className='bi bi-x mobile-nav-toggle' onClick={handleToogleMenu}></i>
                    ) : ( <i className='bi bi-list mobile-nav-toggle' onClick={handleToogleMenu}></i>)

                }
            
        
                
            </div>
        </div>

    </header>
  )
}
