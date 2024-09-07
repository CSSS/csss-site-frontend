import React from 'react';
import { Page, Footer } from '../components';
import { text } from '@fortawesome/fontawesome-svg-core';

// Note image pixel sizes for the common room pics
// TODO: maybe add vending machine pics

const rooms = [
  {
    text: 'ASB 9802',
    image: '/static/files/main/asb9802.jpg', 
    link: 'https://roomfinder.sfu.ca/apps/sfuroomfinder_web/?q=ASB%209802',
    svg: '/static/files/old-common-room.svg'
  },
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

const crSVGs = [
  { name: 'old-cr-svg', link: '/static/files/old-common-room.svg' },
  { name: 'new-cr-svg', link: '/static/files/new-common-room.svg' }
];

export const CommonRooms = () => {
  return (
    <Page style={{ fontFamily: 'Poppins, sans-serif' }}>
      <br></br>
      <br />
      <div className="flex justify-center text-3xl md:text-5xl font-bold">
        Common Rooms
      </div>

      {/* descriptions  */}

      <div className="p-16 max-w-4xl mx-auto">
        <p
          className="text-left text-lg py-8"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          ASB 9802 and ASB 9971, located in the Applied Sciences Building are
          the CSSS common rooms maintained by the SFU CSSS. These rooms offer
          several free services such as ⤵️
        </p>

        <table
          className="text-lg pl-8"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <tbody>
            <tr>
              <td className="px-4">🧊</td>
              <td>Fridge</td>
            </tr>
            <tr>
              <td className="px-4">🔥</td>
              <td>Microwave</td>
            </tr>
            <tr>
              <td className="px-4">☕</td>
              <td>Free coffee</td>
            </tr>
            <tr>
              <td className="px-4">🥛</td>
              <td>Free milk and cereal</td>
            </tr>
            {/* <tr>  // This spade emoji does not line up with the other emojis
                                <td className='px-4'>♠️</td>
                                <td>Board games</td>
                            </tr> */}
            <tr>
              <td className="px-4">😎</td>
              <td>A place to hang out with friends and meet new people</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/*Photos of the common rooms*/}
      <div className="mx-16 my-8 flex flex-col md:flex-row gap-8 ">
        {rooms.map((room) => {
          return (
            <div className="flex-1">
              <a href={room.link} target="_blank">
                <div className="relative w-full h-80 overflow-hidden rounded-xl transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={room.image}
                    alt={room.text}
                    className=" inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90"></div>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-8">
                    <h2
                      className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
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
      <div className="mx-8 flex flex-col md:flex-row gap-8">
        {rooms.map((room) => {
          return (
            <div className=" justify-center flex relative w-full h-full rounded-xl bg-white">
              <object height={300} width="100%" data={room.svg}></object>
            </div>
          );
        })}
      </div>

      {/*Table of prices*/}
      <div className="p-16 max-w-4xl mx-auto">
        <div className="flex justify-start text-4xl sm:text-3xl md:text-4xl font-bold text-left">
          Refreshments
        </div>
        <br></br>
        <p
          className="text-left text-lg items-start"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          ASB 9802 hosts our state of the art snack and pop vending machines
          that are regularly stocked with sweet snacks and ice cold pop. The
          CSSS takes pride in selling the cheapest snacks and pop across all of
          Burnaby campus.
        </p>
      </div>
      <div
        className="justify-center flex flex-row gap-2 max-w-4xl mx-auto overflow-hidden"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        <div className="mx-16 my-8 flex flex-col md:flex-row gap-8 ">
          <div className=" flex flex-col m-8">
            <div className=" justify-center flex ">
              <p className="text-center text-3xl font-bold">Snacks 🍫</p>
            </div>
            <br></br>
            <div class="-m-1.5 overflow-x-auto">
              <div class="p-1.5 min-w-full inline-block align-middle">
                <div class="overflow-hidden">
                  <table class="min-w-full divide-y border rounded">
                    <thead>
                      <tr
                        className="bg-black"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
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
                    {snacks.map((snack, index) => {
                      return (
                        <tbody
                          key={index}
                          className={
                            index % 2 === 0
                              ? 'bg-white text-gray-800'
                              : 'bg-gray text-white'
                          }
                        >
                          <tr style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <td class="px-6 py-4 whitespace-nowrap text-left ">
                              {snack.name}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right ">
                              {snack.price}
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

          <div className=" flex flex-col  m-8 ">
            <div className="justify-center flex ">
              <p className="text-center text-3xl font-bold">Drinks 🥤</p>
            </div>
            <br></br>
            <div class="-m-1.5 overflow-x-auto">
              <div class="p-1.5 min-w-full inline-block align-middle">
                <div class="overflow-hidden">
                  <table
                    class="min-w-full divide-y border rounded"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
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
                            <td class="px-6 py-4 whitespace-nowrap text-left ">
                              {pop.name}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right ">
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
        </div>
      </div>
      <br></br>
      <Footer />
    </Page>
  );
};
