import React, { useEffect, useState } from 'react';

const Players = ({player}) => {
   
    const {img, name, country, price, role}= player;

   function choosePlayerF(price) {
    const newTotal = document.getElementById("totalBalance").innerText;
    const newTotalNumber = Number(newTotal);
    const finalNewTotal = newTotalNumber - price.price;
    // console.log(price.price);
    document.getElementById("totalBalance").innerText = finalNewTotal;
   }
  
  function addPlayerF(price, name) {
    let selectedPlayer = document.createElement("div");
    selectedPlayer.className = `p-5 rounded-xl border`;
    selectedPlayer.innerHTML = `<h1 class="text-xl font-bold"> ${name} 's price is ${price}M</h1>`;

    selectedPlayers.appendChild(selectedPlayer)
    // console.log(price.price);
  }
  const selectedPlayers = document.getElementById("selectedPlayers");


    return (
        <div className='border rounded-xl px-5 pb-5'>
            <img className='w-full' src={img} alt="" />
            <h2 className='font-bold text-xl text-left'> {name} </h2>
            <div className='mb-2 flex justify-between'>
                <div>Country: {country}</div>
                <button className='btn bg-gray-300 px-4 py-1 rounded-lg'>{role}</button>
            </div>
            <hr />
            <p className='text-left font-bold text-lg'>Rating</p>
            <div className='flex justify-between'>
                <p>Price:${price}M</p>
                <button onClick={() =>  {choosePlayerF({price}); addPlayerF({price});}} className='btn bg-gray-400 border-2 px-3 py-1 rounded-xl'>Choose Player</button>
            </div>

        </div>
    );
};

export default Players;
