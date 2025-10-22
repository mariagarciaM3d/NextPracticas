'use client'

import React, {useState, useEffect} from 'react';
import { filters } from '../data/data';
import './menu.css';
import SectionTitle from '../components/SectionTitle';
import MenuItem from '../components/MenuItem';
import Preloader from '../components/Preloader';


export default function Menu() {
    const [data, setData] = useState([]); //Data es donde se guarda la información que viene del servidor ('la materia prima'). Ej: El pedido de ingredientes al proveedor
    const [items, setItems] = useState([]); //Items es donde se guarda la versión lista para usar en la interfaz ('la versión preparada') Ej: Se prepara los platos para servirlos (items)

    
    //Función que pide los datos a la API (proveedor). Data son los datos crudos del servidor (ingredientes). Items son los datos listos para mostrar(Platos preparados)
    const getMenuData = () => {
        fetch('http://localhost:3000/api/menu')
            .then(res => res.json())
            .then(menu => setData(menu))
            .catch(e=>console.log(e.message));
    };

//Este useEffect llama una vez al proveedor(servidor)
    useEffect(() => {
        getMenuData(); 
    }, []);

// Y este useEffect reacciona cuando llegan los ingredientes(datos)
    useEffect(() => {
        setItems(data);
    }, [data]);

    const handleFilterActive =(id:number) => {
        filters.map(filter => {
            filter.active = false;
            if(filter.id === id) filter.active =true;
        })
    }
   
    const handleFilterChange=(id:number, category:string)=>{
        handleFilterActive(id);

        if(category === 'all'){
            setItems(data);
        } else {
            setItems(
                data.filter((item: {category:string}) => item.category === category)
            );

            const result = data.filter((item: {category:string}) => item.category === category)
            setItems(result);
        }
    };

  return (
    <section id='menu' className='menu section-bg'>
        <div className="container" data-aos='fade-up'>
            <SectionTitle title='Our Menu' subtitle='Check Our Tasty Menu'/>

            <div className="row" data-aos='fade-up' data-aos-delay='100'>
                <div className='col-lg-12 d-flex justify-content-center'>
                    <ul id="menu-filters">
                        {filters.map(filter => (
                            <li
                                key={filter.id}
                                className={`${filter.active ? 'filter-active' : undefined}`}
                                onClick={() => handleFilterChange(filter.id, filter.category)}
                            >
                                {filter.name}   
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div
              className='row menu-container'
              //AOS, libería que añade animaciones cuando haces scroll
              data-aos='fade up' //Aparece el elemento poco a poco y se mueve ligeramente hacia arriba
              data-aos-delay='200' //Espera (delay=retraso) de 0.2s anyes de empezar a aparecer
            >
                {!items ?(
                    <Preloader/>
                ) : items.length > 0 ? (
                    items.map(
                        (item: {
                            id: number;
                            name:string;
                            preview: string;
                            price:number;
                            ingredients:string;
                        }) => <MenuItem key={item.id} item={item}/>
                    )
                ) : (
                    <Preloader/>
                )}
            </div>
        </div>
    </section>
  )
}
