'use client'
import React from 'react';
import './appBtn.css';
import Link from 'next/link';

//La función AppBtn recibe como parámetro el nombre del botón que será un string
export default function AppBtn({name}: {name:string}) {
    const handleScrollTo= (section:string) =>{
        //va hacia la sección para reservar una mesa
    }
  return (
    <Link href='/' className='app-btn scrollto d-none d-lg-flex' onClick={()=> handleScrollTo('book-a-table')}>{name}</Link>
  )
}
