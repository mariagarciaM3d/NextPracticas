'use client';

import React, {useState} from 'react';
import './header.css';
import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header id="header" className='header d-flex align-items-center fixed-top'>
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <Link href="/" className="logo d-flex align-items-center">
                <h1>DigitalNews</h1>
            {/* <img src="" alt="" /> */}
            
            </Link>
            <Nav />
        </div>

    </header>
  )
}
