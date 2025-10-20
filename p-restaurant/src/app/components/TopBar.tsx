'use client'

import React, {useState, useEffect} from 'react';
import './topBar.css';
import Link from 'next/link';

export default function TopBar() {

    const [scroll, setScroll] = useState(0);

    useEffect(() => {

        //El useEffect con [] asegura que se registre solo al montar el componente y se limpie al desmontar.
        //scroll se actualizará sin crear listeners múltiples
        const handleScroll= () => setScroll(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

  return (
    <div id='topbar' className={`d-flex align-items-center fixed-top ${scroll >100 ? 'topbar-scrolled' : undefined}`}>
        <div className='container d-flex justify-content-center justify-content-md-between'>
            <div className='contact-info d-flex align-items-center'>
                <i className='bi bi-phone d-flex align-items-center'>
                    <span>+34 666777888</span>
                </i>
                <i className='bi bi-clock d-flex align-items-center ms-4'>
                    <span>Mon-Sat: 11AM - 23PM</span>
                </i>
            </div>
            <div className='languages d-none d-md-flex align-items-center'>
                <ul>
                    <li>EN</li>
                    <li>
                        <Link href='#'>ES</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
