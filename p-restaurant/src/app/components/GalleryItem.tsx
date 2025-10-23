'use client';

import React, {useEffect} from 'react';
import GLightbox from 'glightbox';
import './galleryItem.css';
import Link from 'next/link';
import Image from 'next/image';

export default function GalleryItem({item} : {
    item: {
        id:number,
        image:string,
    };
}) {
    useEffect(() => {
    // Importamos GLightbox dinámicamente (solo en el cliente)
    //Solo se ejecuta en el cliente cuando el componente ya está montado.
    import('glightbox').then((module) => {
      const GLightbox = module.default;
      GLightbox({
        selector: '.gallery-lightbox',
      });
    });
  }, []);


  return (
    <div className='col-lg-3 col-md-4'>
        <div className="gallery-item">
            <Link 
            href={item.image} 
            className='gallery-lightbox' 
            data-gall='gallery-item'>

            <Image
            width={500}
            height={300}
            style= {{
                width:'100%',
                height:'auto',
            }}
            src={item.image}
            alt=''
            className='img-fluid'/>

            </Link>
        </div>
    </div>
  )
}
