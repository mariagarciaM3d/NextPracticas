import React from 'react';
import './heroBtn.css';
import Link from 'next/link';

export default function HeroBtn({
    name,
    target,
}: {
    name:string;
    target:string;
}) {

    const handleScrollTo=(section:string)=>{};


  return (
    <Link href="/"
    onClick={()=> handleScrollTo(target)}
    className={`btn-hero animated fadeInUp scrollto ${name.includes('book') ? 'ms-4' : undefined}`}>
        {name}
    </Link>
  )
}
