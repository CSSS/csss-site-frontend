import React from "react";
import { Footer, Page } from "../components";

const committees = [
    {
        text: 'Committee #1',
        // image:,
        // link:
    },
    {
        text: 'Committee #2',
        // image:,
        // link:
    },
    {
        text: 'Committee #3',
        // image:,
        // link:
    },
    {
        text: 'Committee #4',
        // image:,
        // link:
    },
    {
        text: 'Committee #5',
        // image:,
        // link:
    },
    {
        text: 'Committee #6',
        // image:,
        // link:
    }

];

export const Committees = () => {
    return (
        <Page style={{ fontFamily: 'Poppins, sans-serif' }}>
            <br></br>
            <br />
            <div className="flex justify-center text-3xl md:text-5xl font-bold mb-8">
                Committees
            </div>
            <div className="flex justify-center text-lg md:text-2xl mb-8">
                <p>
                    A list of our committees.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-16 ">
                {committees.map((committee) => {
                return (
                 
                    <a href={committee.link} target="_blank">
                        <div className="relative w-full h-80 overflow-hidden rounded-xl transform transition-transform duration-300 hover:scale-105">
                        <img
                            // src={committee.image}
                            alt={committee.text}
                            className=" inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90"></div>
                        <div className="absolute inset-y-0 left-0 flex items-center pl-8">
                            <h2
                            className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                            {committee.text}
                            </h2>
                        </div>
                        </div>
                    </a>
                 
                );
                })}
            </div>

            <Footer />
        </Page>
    );
};