'use client';

import React, {useState, useEffect} from 'react';
import './specials.css';
import SectionTitle from '../components/SectionTitle';
import { specialsFilters } from '../data/data';
import Link from 'next/link';
import Preloader from '../components/Preloader';
import SpecialsItem from '../components/SpecialsItem';

//Tipo de objeto
type SpecialItem = {
    id: number,
    image:string,
    title: string,
    subtitle: string,
    content: string,
    active: boolean,
}

export default function Specials() {
  const [data, setData]=useState<SpecialItem []>([]);
  const [items, setItems]=useState<SpecialItem []>([]);

  const [itemSelected, setItemSelected]=useState(1);

  const getSpecialsData= ()=>{
    fetch(`http://localhost:3000/api/specials`)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(e => console.log(e.message));
  };

  useEffect(() => {
    getSpecialsData();
  }, []);

  useEffect(() => {
    setItems(data);
  }, [data]);

  const handleSpecialChange=(id:number)=>{
    setItemSelected(id)
    /* const updatedItems = items.map(
      (item: {
        id: number,
        image:string,
        title: string,
        subtitle: string,
        content: string,
        active: boolean,

      })=> {
        item.active=false;
        if (item.id === id) item.active=true;
        return item;

      }
    );
    console.log(updatedItems)
    setItems(updatedItems); */
  };

  return (
    <section id='specials' className='specials'>
      <div className="container" data-aos='fade-up'>
        <SectionTitle title='Specials' subtitle='Check Our Specials'/>

        <div className="row" data-aos='fade-up' data-aos-delay='100'>
          <div className="col-lg-3">
            <ul className='nav nav-tabs flex-colum'>
              {specialsFilters.map(filter => (
                <li  key={filter.id} className={` nav-item nav-link ${filter.id === itemSelected ? 'active show' : ''}`}
                  onClick={()=> handleSpecialChange(filter.id)}>
                    {filter.name}
                  
                </li>
              ))}
            </ul>
          </div>
          <div className='col-lg-9 mt-4 mt-lg-0'>
            <div className="tab-content">
              {!items ? (
                <Preloader/>
              ) : items.length > 0 ? (
                items.map(
                  (item: {
                    id:number;
                    image:string,
                    title: string,
                    subtitle: string,
                    content: string,
                    active: boolean,

                  }) => <SpecialsItem key={item.id} item={item} itemSelected={itemSelected} />
                )

              ) : (
                <Preloader/>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
