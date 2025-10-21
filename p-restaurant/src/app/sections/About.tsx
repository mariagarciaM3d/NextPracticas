import React from 'react';

import "./about.css";
import Image from 'next/image';


export default function About() {
  return (
    <section id='about' className='about'>
        <div className="container" data-aos='fade-up'>
            <div className="row">
                <div 
                className='col-lg-6 order-1 order-lg-2'
                data-aos='zoom-in'
                data-aos-delay='100' 
                >
                    <div className="about-img">
                        <Image src="/asset/images/about.jpg" alt='About' width={600} height={400}/>
                    </div>
                </div>
                <div className='col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content'>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                    <p className="fst-italic">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque dignissimos magni, 
                        maiores temporibus veritatis facilis, dolores assumenda distinctio reiciendis 
                        soluta beatae dolor laborum? Modi vitae laboriosam rem et commodi repellat.
                    </p>
                    <ul>
                        <li>
                            <i className='bi bi-check-circle'></i>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </li>
                        <li>
                            <i className='bi bi-check-circle'></i>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </li>
                        <li>
                            <i className='bi bi-check-circle'></i>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </li>
                    </ul>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Sit voluptates illo ullam sapiente autem est vitae facere nostrum explicabo fugit minima officiis magnam odit,
                         in asperiores blanditiis ab repudiandae. Quia.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
