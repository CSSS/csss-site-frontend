import React from 'react';
import { useEffect, useState } from 'react';
import { Page } from '../components';
import { useSpring, animated } from 'react-spring';
import Footer from '../components/Footer';

const sections = [

    // Note image pixel sizes for the common room pics
    // TODO: section on Vending machine with pic
    // TODO: add proper common room pictures
    // TODO: create list of food items sold and respective prices

    {
        text: 'ASB 9802',
        image: '/static/files/main/CR_Placeholder.png',
        link:'#common_rooms'
    },

    {
        text: 'ASB 9971',
        image: '/static/files/main/CR_Placeholder.png',
        link:'#common_rooms'   
    }
]

export const CommonRooms = () => {

    return (
        <Page>
                <br></br><br/>
                <div className='flex items-center justify-center text-3xl sm:text-2xl md:text-3xl font-bold leading-tight text-center'>
                    Common Rooms
                </div>
                 
                {/* descriptions  */}
               
                    <div className='p-16 max-w-4xl mx-auto'>
                        <p 
                            className="text-left text-lg items-start py-8"
                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                           
                            <a href="https://roomfinder.sfu.ca/apps/sfuroomfinder_web/?q=ASB%209802" target="_blank" 
                            className=" hover:text-red-700"> ASB 9802 </a> 
                            and 
                            <a href="https://roomfinder.sfu.ca/apps/sfuroomfinder_web/?q=ASB%209971" target="_blank"
                            className="hover:text-red-700"> ASB 9971</a>
                            , located in the Applied Sciences Building are the CSSS 
                            common rooms maintained by the SFU CSSS. These rooms offer several free services
                            such as:</p>
                           
                            <ul className="list-disc list-inside text-lg pl-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                <li> Fridge</li>
                                <li> Microwave</li>
                                <li> Free Coffee!!!</li>
                                <li> Free milk and cereal!!!</li>
                                <li> A place to hang out with friends and meet new people</li>
                            </ul>
                            
                            <p className="text-left text-lg items-start py-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies 
                            ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra 
                            nulla fringilla. Nulla facilisi. Cras fermentum odio eu feugiat pretium. Nunc ut sem vitae 
                            risus tristique posuere.
                            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut 
                            commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus 
                            id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                        </p>
                    </div>
                

                {/*Photos of the common rooms*/}
                <div className='mx-16 my-8 flex gap-2 '>
                    <div>
                        <a href={sections[0].link}>
                            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
                                <img
                                    src={sections[0].image}
                                    alt={sections[0].text}
                                    className="w-full h-full "
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90"></div>
                                <div className="absolute inset-y-0 left-0 flex items-center pl-8">
                                    <h2
                                        className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}
                                    >
                                        {sections[0].text}
                                    </h2>
                                </div>
                            </div>
                        </a>
                    </div>
                    <br></br>
                    <div>
                        <a href={sections[1].link}>
                            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
                                <img
                                    src={sections[1].image}
                                    alt={sections[1].text}
                                    className=" w-full h-full "
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90"></div>
                                <div className="absolute inset-y-0 left-0 flex items-center pl-8">
                                    <h2
                                        className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}
                                    >
                                        {sections[1].text}
                                    </h2>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <br></br>

            <br></br>
            <Footer />
        </Page>
    );
};