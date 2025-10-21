'use client'

import React, {useEffect} from 'react';
import 'glightbox/dist/css/glightbox.css';
import './hero.css';
import Link from 'next/link';
import HeroBtn from '../components/HeroBtn';

export default function Hero() {

    useEffect(() => {
    // import dinámico solo en cliente
    import('glightbox').then((GLightbox) => {
      const lightbox = GLightbox.default({
        selector: '.glightbox',
      });

      return () => {
        lightbox.destroy();
      };
    });
  }, []);
  return (
    <section id='hero' className='d-flex align-items-center'>
        <div
        className='container position-relative text-center text-lg-start'
        data-aos='zoom-in'
        data-aos-delay='100'>
            <div className="row">
                <div className="col-lg-8">
                    <h1>Wellcome to yammy <span>Restaurant</span></h1>
                    <h2>Delivering great food for more than 18 years!</h2>

                    <div className="btns">
                        <HeroBtn name="our menu" target="menu" />
                        <HeroBtn name="book a table" target="book-a-table" />
                    </div>
                </div>
                <div
                className='col-lg-4 d-flex align-items-center justify-content-center position-relative'
                /* data-aos="zoom-in"
                data-aos-delay="200" */>
                    <Link href="https://www.youtube.com/watch?v=F3zw1Gvn4Mk"
                    className='glightbox play-btn'>
                        <span className='visually-hidden'>Play Video</span>
                    </Link>

                </div>
            </div>
        </div>
    </section>
  )
}
