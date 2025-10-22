import React from 'react';
import './menuItem.css';
import Image from 'next/image';
import Link from 'next/link';

export default function MenuItem({
    item,
}:{
    item: {
    id:number;
    name:string;
    preview:string;
    price: number;
    ingredients: string;
}}) {
    
  return (
    <div className='col-lg-6 menu-item'>
    <Image src={item.preview} className='menu-img' alt='' width={70} height={70}></Image>
    <div className="menu-content">
        <Link href={`/menu/${item.id}`}>{item.name}</Link>
        <span>${item.price}</span>
    </div>
    <div className="menu-ingredients">{item.ingredients}</div>
    </div>
  )
}
