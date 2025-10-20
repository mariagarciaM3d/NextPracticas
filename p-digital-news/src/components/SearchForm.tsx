import React from 'react';
import './searchForm.css';




export default function SearchForm({active, onClose}: {
    active:boolean;
    onClose: () => void;
  
}) {
  return (
    <div className={`search-form-wrap js-search-form-wrap ${active ? 'active': undefined}`}>
        <form action="" className="search-form d-flex align-items-center ">
            <input type="text" placeholder='Search' className='form-control ' />
            <span className="btn-close ms-2" onClick={onClose}></span>
           {/* Botón X para cerrar */}
            {/* <button type="button" className="btn-close ms-2" onClick={onClose}>
            </button> */}
        </form>
    </div>
  )
}
