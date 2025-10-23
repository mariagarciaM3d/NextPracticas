'use client';

import React, { useState} from 'react';
import './booking.css';
import SectionTitle from '../components/SectionTitle';

type bookingType = {
        name:string,
        email:string,
        phone:string,
        date:string,
        time: string,
        people:number,
        message: string,
        validate: 'idle' | 'incomplete' | 'loading' | 'success' | 'error',
}

export default function Booking() {
    const initialState: bookingType ={
        name:'',
        email:'',
        phone:'',
        date:'',
        time: '',
        people:0,
        message: '',
        validate:'idle',
    };

    const [text, setText] = useState<bookingType>(initialState);


    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setText({
        ...text,
        [name]: name === 'people' ? Number(value) : value, // convierte a número si el campo es "people"
        validate: 'idle'
    });
    };

    const handleSubmitBooking= async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //validation
        if( !text.name || !text.email || !text.date || text.date <'today' || !text.time || text.people<=0){
            setText({...text, validate: 'incomplete'});
            return;
        }

        setText({...text, validate:'loading'});
    

        //POST request sent
        try{
            const response= await fetch ('http://localhost:3000/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(text),
            });

            if (!response.ok) throw new Error ('Server error');

            const result = await response.json();
            
                setText({...text, validate: 'success'});
                 console.log('Success:', result);
            

        } catch (error){
            setText({ ...text, validate: 'error'});
             console.error('Error:', error);

        }
    };



  return (
    <section id='book-a-table' className='book-a-table'>
        <div className="container" data-aos='fade-up'>
            <SectionTitle title='Reservation' subtitle='Book a Table'/>

            <form
            onSubmit={handleSubmitBooking}
            className='booking-form'
            data-aos='fade-up'
            data-aos-delay='100'
            >
                <div className="row">
                    <div className='col-lg-4 col-md-6 form-group'>
                        <input 
                        type="text"
                        name='name'
                        value={text.name}
                        className='form-control'
                        placeholder='Your name'
                        onChange={handleTextChange} />
                    </div>
                    <div className='col-lg-4 col-md-6 form-group mt-3 mt-md-0'>
                        <input
                        type='email'
                        className='form-control'
                        name='email'
                        value={text.email}
                        placeholder='Your email'
                        onChange={handleTextChange}/>
                    </div>
                    <div className='col-lg-4 col-md-6 form-group mt-3 mt-md-0'>
                        <input
                        type='text'
                        className='form-control'
                        name='phone'
                        value={text.phone}
                        placeholder='Your phone'
                        onChange={handleTextChange}/>
                    </div>
                    <div className='col-lg-4 col-md-6 form-group mt-3'>
                        <input
                        type='date'
                        className='form-control'
                        name='date'
                        value={text.date}
                        placeholder='Date'
                        onChange={handleTextChange}/>
                    </div>
                    <div className='col-lg-4 col-md-6 form-group mt-3'>
                        <input
                        type='time'
                        className='form-control'
                        name='time'
                        value={text.time}
                        placeholder='Time'
                        onChange={handleTextChange}/>
                    </div>
                    <div className='col-lg-4 col-md-6 form-group mt-3'>
                        <input
                        type='number'
                        className='form-control'
                        name='people'
                        value={text.people}
                        placeholder='# of people'
                        onChange={handleTextChange}/>
                    </div>
                     <div className='form-group mt-3'>
                        <textarea
                        className='form-control'
                        name='message'
                        rows={5}
                        value={text.message}
                        placeholder='Message'
                        onChange={handleTextChange}
                        ></textarea>
                    </div>
                    <div className='mb-3'>
                        {text.validate === 'loading' && (
                            <div className="loading">Send Booking</div>
                        )}
                        {text.validate === 'incomplete' && (
                            <div className="error-message">
                                Please fill in all above details for booking a table
                            </div>
                        )}
                        {text.validate === 'success' && (
                            <div className="sent-message">
                                Your booking request was sent. We will call back or send an
                                Email to confirm your reservation. Thank you!

                            </div>
                        )}
                        {text.validate === 'error' && (
                            <div className="error-message">Server Error
                            </div>
                        )}

                    </div>
                    <div className='text-center'>
                        <button type='submit'>Book a table</button>
                    </div>

                </div>

            </form>

        </div>

    </section>
)}
