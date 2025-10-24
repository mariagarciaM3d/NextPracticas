

import React from 'react';
import './chefItem.css';
import Image from 'next/image';
import Link from 'next/link';

export default function ChefItem({item}: {
    item: {
        id:number;
        name:string;
        photo:string;
        position:string;
        delay:string;
    }
}) {
  return (
    <div className='col-lg-4 col-md-6'>
        <div className="member" data-aos='zoom-in' data-aos-delay={item.delay}>
            <Image src={item.photo} className='img-fluid' alt='' width={400} height={400}/>
            <div className="member-info">
                <div className="member-info-content">
                    <h4>{item.name}</h4>
                    <span>{item.position}</span>
                </div>
                <div className="social">
                    <Link href=''><i className='bi bi-twitter'></i></Link>
                    <Link href=''><i className='bi bi-facebook'></i></Link>
                    <Link href=''><i className='bi bi-instagram'></i></Link>
                    <Link href=''><i className='bi bi-linkedin'></i></Link>
                </div>
            </div>
        </div>
    </div>
  )
}
