import React from 'react';
import './specialsItem.css';
import Image from 'next/image';

export default function SpecialsItem(
  { item, itemSelected }: {item : {
      id: number,
    image:string,
    title: string,
    subtitle: string,
    content: string,
    active: boolean,
}, itemSelected: number}) {
  console.log(itemSelected)
  return (
    <div
    className={`tab-pane ${item.id === itemSelected  ? 'active show' : ''}`}
    id={`tab-${item.id.toString}`}
    >
        <div className="row">
            <div className='col-lg-8 details order-2 order-lg-1'>
                <h3>{item.title}</h3>
                <p className='fst-italic'>{item.subtitle}</p>
                <p>{item.content}</p>
            </div>
            <div className='col-lg-4 text-center order-1 order-lg-2'>
                <Image src={item.image} alt='' className='img-fluid' width={600} height={600}/>
            </div>
        </div>

    </div>
  )
}
