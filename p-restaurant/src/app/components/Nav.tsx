// 'use client'

import React from 'react';
import './nav.css';
import { navs } from '../data/data';
import Link from 'next/link';



export default function Nav() {
 
   const handleScrollTo = (section :string)=> {
    const element =document.querySelector(section);
    if(element) element.scrollIntoView({behavior: 'smooth'});
   }


  return (
    <nav id='navbar' className="navbar order-last order-lg-0">
        <ul className='nav-list'>
            {navs.map(nav => (
                <li key={nav.id}>
                    <Link href='/' className={`nav-link scrollto ${nav.active ? 'active' : undefined}`} onClick={() => handleScrollTo(nav.target)}>
                    {nav.name === 'Home' ? 
                        <i className='bi bi-house-door-fill'></i>
                     : 
                        nav.name
                    }
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}
