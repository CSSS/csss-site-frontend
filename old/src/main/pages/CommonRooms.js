import React from 'react';
import { Page, Footer } from '../components';

// TODO: Add new updated pic of ASB 9971

const rooms = [
  {
    text: 'ASB 9971',
    image: '/static/files/main/asb9971.png',
    link: 'https://roomfinder.sfu.ca/apps/sfuroomfinder_web/?q=ASB%209971',
    svg: '/static/files/new-common-room.svg'
  }
];

const headers = ['ITEM', 'PRICE($)'];

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

{
  /* descriptions */
}
const Description = () => {
  const listSpacing = 'px-4';
  return (
    <div>
      <br></br>
      <br />
      <div className="flex justify-center text-3xl md:text-5xl font-bold">
        Common Room
      </div>

      <div className="p-8 max-w-4xl mx-auto text-lg">
        <p className="text-left py-8">
          ASB 9971 located in the Applied Sciences Building is the CSSS's very
          own common room. This room offers several services and amenities ⤵️
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
    </div>
  );
};

{
  /* Photos of the common room */
}
const CRPhoto = () => {
  return (
    <div>
      <div className="mx-16 md:px-16 my-16">
        {rooms.map((room) => {
          return (
            <div className="flex-1 lg:mx-16">
              <a href={room.link} target="_blank">
                <div className="flex items-center justify-center relative h-96 w-full overflow-hidden rounded-xl transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={room.image}
                    alt={room.text}
                    className="items-center w-full h-full object-cover"
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
    </div>
  );
};

{
  /* svg map of the room */
}
const Maps = () => {
  return (
    <div>
      <div className=" mx-16 md:px-16 my-16 ">
        {rooms.map((room) => {
          return (
            <div
              className="flex-1 justify-center relative h-auto w-auto rounded-xl
            bg-white"
            >
              <object height={300} width="100%" data={room.svg}></object>
            </div>
          );
        })}
      </div>
    </div>
  );
};

{
  /*Refreshments*/
}
const Refreshments = () => {
  return (
    <div>
      <div className="p-16 max-w-4xl mx-auto text-left">
        <div className="flex text-4xl sm:text-3xl md:text-4xl font-bold">
          Refreshments
        </div>
        <br></br>
        <p className="text-xl">
          ASB 9971 hosts our state of the art snack and pop vending machines
          that are regularly stocked with sweet snacks and ice cold pop. The
          CSSS takes pride in selling the cheapest snacks and pop across all of
          Burnaby campus.
        </p>
      </div>
    </div>
  );
};

{
  /*Creates tables*/
}
const Table = ({ data, headers }) => {
  return (
    <div className="-m-1.5 overflow-x-auto p-1.5 min-w-full">
      <table className="divide-y border rounded">
        <thead>
          <tr className="bg-black text-white uppercase">
            {headers.map((header, index) => (
              <th key={index} className="px-6 py-3 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={
                index % 2 === 0
                  ? 'bg-white text-gray-800'
                  : 'bg-gray text-white'
              }
            >
              <td className="px-6 py-4 text-left whitespace-nowrap">
                {item.name}
              </td>
              <td className="px-6 py-4 text-right whitespace-nowrap">
                {item.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

{
  /*Table of prices*/
}
const PriceTables = () => {
  return (
    <div>
      <div className="justify-center flex gap-2 max-w-4xl mx-auto overflow-hidden">
        <div className="mx-16 flex flex-col lg:flex-row gap-8 ">
          <div className="mx-8">
            <p className="text-center text-3xl font-bold">Snacks 🍫</p>
            <br></br>
            <Table data={snacks} headers={headers} />
          </div>
          <div className="mx-8">
            <p className="text-center text-3xl font-bold">Drinks 🥤</p>
            <br></br>
            <Table data={pop} headers={headers} />
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
};

{
  /*Main export function */
}
export const CommonRooms = () => {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Page>
        <Description />
        <CRPhoto />
        <Maps />
        <Refreshments />
        <PriceTables />
        <Footer />
      </Page>
    </div>
  );
};
