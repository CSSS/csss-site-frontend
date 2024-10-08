import React, { useState } from 'react';
import { Page, Footer } from '../components';

// TODO: Add new updated pic of ASB 9971

const rooms = [
  // {
  //   text: 'ASB 9802',
  //   image: '/static/files/main/asb9802.jpg',
  //   link: 'https://roomfinder.sfu.ca/apps/sfuroomfinder_web/?q=ASB%209802',
  //   svg: '/static/files/old-common-room.svg'
  // },
  {
    text: 'ASB 9971',
    image: '/static/files/main/asb9971.png',
    link: 'https://roomfinder.sfu.ca/apps/sfuroomfinder_web/?q=ASB%209971',
    svg: '/static/files/new-common-room.svg'
  }
];

const pop = [
  { name: 'Coke', price: '1.25' },
  { name: 'Coke Zero', price: '1.25' },
  { name: 'Dasani', price: '1.75' },
  { name: 'Mystery Monster', price: '2.75' },
  { name: 'Nestea', price: '1.25' },
  { name: 'Mystery', price: '1.00' }
];

const snacks = [
  { name: 'Chips', price: '1.50' },
  { name: 'Seaweed', price: '1.00' },
  { name: 'Candy', price: '1.50-2.00' },
  { name: 'Chocolate', price: '1.25' },
  { name: 'Chewing gum', price: '2.00' },
  { name: 'Rice Krispies', price: '0.50' },
  { name: 'Pop tarts', price: '1.00' },
  { name: 'Protein shakes', price: '3.50' }
];

export const CommonRooms = () => {
  const listSpacing = 'px-4';
  return (
    <Page style={{ fontFamily: 'Poppins, sans-serif' }}>
      <br></br>
      <br />
      <div className="flex justify-center text-3xl md:text-5xl font-bold">
        Common Rooms
      </div>

      {/* descriptions  */}
      <div className="p-8 max-w-4xl mx-auto text-lg">
        <p className="text-left py-8">
          ASB 9802 and ASB 9971, located in the Applied Sciences Building are
          the CSSS common rooms maintained by the SFU CSSS. These rooms offer
          several free services such as ⤵️
        </p>

        <table className="pl-8">
          <tbody>
            <tr>
              <td className={listSpacing}>🧊</td>
              <td>Fridge</td>
            </tr>
            <tr>
              <td className={listSpacing}>🔥</td>
              <td>Microwave</td>
            </tr>
            <tr>
              <td className={listSpacing}>☕</td>
              <td>Free coffee</td>
            </tr>
            <tr>
              <td className={listSpacing}>🥛</td>
              <td>Free milk and cereal</td>
            </tr>
            {/* <tr>  // This spade emoji does not line up with the other emojis
                                <td className='px-4'>♠️</td>
                                <td>Board games</td>
                            </tr> */}
            <tr>
              <td className={listSpacing}>😎</td>
              <td>A place to hang out with friends and meet new people</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Photos of the common rooms */}
      <div className=" mx-16 my-8 flex flex-col md:flex-row gap-8 ">
        {rooms.map((room) => {
          return (
            <div className="flex-1">
              <a href={room.link} target="_blank">
                <div className="relative h-80 overflow-hidden rounded-xl transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={room.image}
                    alt={room.text}
                    className=" inset-0 w-full h-full object-cover"
                    style={{ 'overflow-clip-margin': 'unset' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90"></div>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-8">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                      {room.text}
                    </h2>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>

      {/* svg maps of the rooms */}
      <div className="mx-16 flex flex-col md:flex-row gap-8">
        {rooms.map((room) => {
          return (
            <div className="justify-center relative w-full h-full rounded-xl bg-white py-2">
              <object height={300} width="100%" data={room.svg}></object>
            </div>
          );
        })}
      </div>

      {/*Table of prices*/}
      <div className="p-16 max-w-4xl mx-auto text-left">
        <div className="flex text-4xl sm:text-3xl md:text-4xl font-bold">
          Refreshments
        </div>
        <br></br>
        <p className="text-xl">
          ASB 9802 hosts our state of the art snack and pop vending machines
          that are regularly stocked with sweet snacks and ice cold pop. The
          CSSS takes pride in selling the cheapest snacks and pop across all of
          Burnaby campus.
        </p>
      </div>

      {/*Table of prices*/}

      <div className="justify-center flex gap-2 max-w-4xl mx-auto overflow-hidden">
        <div className="mx-16 flex flex-col md:flex-row gap-8 ">
          <div className="mx-8">
            <p className="text-center text-3xl font-bold">Snacks 🍫</p>
            <br></br>

            <div class="-m-1.5 overflow-x-auto p-1.5 min-w-full inline-block align-middle overflow-hidden">
              <table class="divide-y border rounded">
                <thead>
                  <tr className="bg-black  text-white uppercase" scope="col">
                    <th class="px-6 py-3 text-left">ITEM</th>
                    <th class="px-6 py-3 text-right">PRICE($)</th>
                  </tr>
                </thead>

                {snacks.map((snack, index) => {
                  const tdClass = 'px-6 py-4';
                  return (
                    <tbody
                      key={index}
                      className={
                        index % 2 === 0
                          ? 'bg-white text-gray-800'
                          : 'bg-gray text-white'
                      }
                    >
                      <tr className="whitespace-nowrap">
                        <td class={tdClass} style={{ textAlign: 'left' }}>
                          {snack.name}
                        </td>
                        <td class={tdClass} style={{ textAlign: 'right' }}>
                          {snack.price}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>

          <div className="flex flex-col mx-8">
            <p className="text-center text-3xl font-bold">Drinks 🥤</p>
            <br></br>
            <div class="-m-1.5 overflow-x-auto p-1.5 min-w-full inline-block align-middle overflow-hidden">
              <table class="min-w-full divide-y border rounded">
                <thead>
                  <tr className="bg-black">
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-white uppercase"
                    >
                      ITEM
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-right text-white uppercase"
                    >
                      PRICE($)
                    </th>
                  </tr>
                </thead>
                {pop.map((pop, index2) => {
                  const tdClass2 = 'px-6 py-4 whitespace-nowrap';
                  return (
                    <tbody
                      key={index2}
                      className={
                        index2 % 2 === 0
                          ? 'bg-white text-gray-800'
                          : 'bg-gray text-white'
                      }
                    >
                      <tr>
                        <td class={tdClass2} style={{ textAlign: 'left' }}>
                          {pop.name}
                        </td>
                        <td class={tdClass2} style={{ textAlign: 'right' }}>
                          {pop.price}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
      <br></br>

      <Footer />
    </Page>
  );
};
