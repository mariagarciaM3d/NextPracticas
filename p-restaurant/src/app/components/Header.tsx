'use client'

import React, {useState, useEffect} from 'react';
import './header.css';
import Link from 'next/link';
import AppBtn from './AppBtn';

export default function Header() {
     const [scroll, setScroll] = useState(0);
    
        useEffect(() => {
            const handleScroll= () => setScroll(window.scrollY);
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            }
        }, []);
  return (
    <header id='header' className={`fixed-top d-flex align-items-center ${scroll > 100 ? 'header-scrolled' : undefined}`}>
        <div className='conatiner-fluid container-xl d-flex aling-items-center justify-content-lg-between'>
            <h1 className='logo me-auto me-lg-0'>
                <Link href='/'>Restaurant</Link>
            </h1>
            {/*Para utilizar una imagen de logo */}
            {/* <Link href="index.html"className='logo me-auto me-lg-0'>
                <img src="assets/img/logo.png" alt="Comment" className="img-fluid" /></Link>
            
            */}
            <AppBtn name='Book a table'/>
        </div>
    </header>
  )
}
