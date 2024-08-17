import React from 'react';
import { useEffect, useState } from 'react';
import { Page } from '../components';
import { useSpring, animated } from 'react-spring';
import Footer from '../components/Footer';
import { text } from '@fortawesome/fontawesome-svg-core';

const rooms = [

    // Note image pixel sizes for the common room pics
    // TODO: section on Vending machine with pic
    // TODO: add proper common room pictures
    // TODO: create list of food items sold and respective prices

    {   text: 'ASB 9802',
        image: '/static/files/main/CR_Placeholder.png',
        link:'#common_rooms' },
    {   text: 'ASB 9971',
        image: '/static/files/main/CR_Placeholder.png',
        link:'#common_rooms' }
]

const pop = [

    {name: 'Coke',price: '1.25'},
    {name: 'Coke Zero',price: '1.25'},
    {name: 'Dasani',price: '1.75'},
    {name: 'Monster',price: '2.75'},
    {name:'Nestea', price: '1.25'},
    {name:'Mystery', price: '1.00'}

]

export const CommonRooms = () => {

    return (
        <Page>
                <br></br><br/>
                <div className='flex items-center justify-center text-6xl sm:text-3xl md:text-5xl font-bold leading-tight text-center'>
                ✨ Common Rooms ✨
                </div>
                 
                {/* descriptions  */}
               
                <div className='p-16 max-w-4xl mx-auto'>
                    <p 
                            className="text-left text-lg items-start py-8"
                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                           
                            <a href="https://roomfinder.sfu.ca/apps/sfuroomfinder_web/?q=ASB%209802" target="_blank" 
                            className=" hover:text-red-700 font-extrabold"> ASB 9802 </a> 
                            and 
                            <a href="https://roomfinder.sfu.ca/apps/sfuroomfinder_web/?q=ASB%209971" target="_blank"
                            className="hover:text-red-700 font-extrabold"> ASB 9971</a>
                            , located in the Applied Sciences Building are the CSSS 
                            common rooms maintained by the SFU CSSS. These rooms offer several free services
                            such as ⤵️
                    </p>
                           
                    <ul className="list-disc list-inside text-lg pl-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <li> Fridge 🧊</li>
                        <li> Microwave 🔥</li>
                        <li> Free Coffee ☕</li>
                        <li> Free milk and cereal 🥛</li>
                        <li> Board games ♠️</li>
                        <li> A place to hang out with friends and meet new people 😎</li>
                    </ul>
                </div>

                {/*Photos of the common rooms*/}
                <div className='mx-16 my-8 flex gap-8 '>
                    <div>
                        <a href={rooms[0].link}>
                            <div className="relative w-full h-full overflow-hidden rounded-2xl transform transition-transform duration-300 hover:scale-125">
                                <img
                                    src={rooms[0].image}
                                    alt={rooms[0].text}
                                    className="w-full h-full "
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90"></div>
                                <div className="absolute inset-y-0 left-0 flex items-center pl-8">
                                    <h2
                                        className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}
                                    >
                                        {rooms[0].text}
                                    </h2>
                                </div>
                            </div>
                        </a>
                    </div>
                    <br></br>
                    <div>
                        <a href={rooms[1].link}>
                            <div className="relative w-full h-full overflow-hidden rounded-2xl transform transition-transform duration-300 hover:scale-125">
                                <img
                                    src={rooms[1].image}
                                    alt={rooms[1].text}
                                    className=" w-full h-full "
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90"></div>
                                <div className="absolute inset-y-0 left-0 flex items-center pl-8">
                                    <h2
                                        className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}
                                    >
                                        {rooms[1].text}
                                    </h2>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                
                {/*Table of prices*/}
                <div className='p-16 max-w-4xl mx-auto'>
                    <div className='flex items-center justify-start text-4xl sm:text-3xl md:text-4xl font-bold leading-tight text-left'>
                    🍫 Snacks and Drinks 🥤
                    </div><br></br>
                    <p className="text-left text-lg items-start"
                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                        ASB 9802 hosts our state of the art snack and pop vending machines that are regularly 
                        stocked with sweet snacks and ice cold pop. The CSSS takes pride in selling the 
                        cheapest snacks and pop across all of Burnaby campus.
                    </p>
                </div>
                <div className='justify-center items-center flex flex-row gap-8'>
                    <div className=' flex flex-col m-8 '>
                        <div className=' items-center justify-center flex '>
                            <p className='text-center text-xl font-bold'>Drinks 🥤
                            </p>
                        </div><br></br>
                        <div className='flex justify-center items-center border-separate rounded-lg '>
                            <table class="table-column-group rounded-lg">
                                <thead>
                                    <tr>
                                        <th className='text-cyan-500 items-center border-spacing-10 border border-red-800'>Drink</th>
                                        <th className='text-cyan-500 items-center border-spacing-10 border border-red-800'>Price ($)</th>
                                        {/* <th>Popularity</th> */}
                                    </tr>
                                </thead>
                            {pop.slice(0,6).map((pop,index) => (
                                <tbody>
                                    <tr>
                                        <td className='text-black items-center border bg-slate-400'>{pop.name}</td>
                                        <td className='text-cyan-200 justify-center align-middle items-center border bg-black'>{pop.price}</td>
                                        {/* <td>1961</td> */}
                                    </tr>
                                </tbody>
                            ))}
                            </table>
                        </div><br></br>
                    </div>

                    <div className=' flex flex-col  m-8 '>
                        <div className=' items-center justify-center flex '>
                            <p className='text-center text-xl font-bold'>Drinks 🥤
                            </p>
                        </div><br></br>
                        <div className='flex justify-center items-center border-separate rounded-lg '>
                            <table class="table-column-group rounded-lg">
                                <thead>
                                    <tr>
                                        <th className='text-cyan-500 items-center border-spacing-10 border border-red-800'>Drink</th>
                                        <th className='text-cyan-500 items-center border-spacing-10 border border-red-800'>Price ($)</th>
                                        {/* <th>Popularity</th> */}
                                    </tr>
                                </thead>
                            {pop.slice(0,6).map((pop,index) => (
                                <tbody>
                                    <tr>
                                        <td className='text-black items-center border bg-slate-400'>{pop.name}</td>
                                        <td className='text-cyan-200 justify-center align-middle items-center border bg-black'>{pop.price}</td>
                                        {/* <td>Number of stars</td> */}
                                    </tr>
                                </tbody>
                            ))}
                            
                        
                            </table>
                        </div><br></br>
                    </div>
                </div>
                
            <br></br>
            <Footer />
        </Page>
    );
};