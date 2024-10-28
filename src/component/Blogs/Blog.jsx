import React from 'react';
import Players from '../Players/Players';
import Selected from '../Selected/Selected';


const Blog = () => {

    const players = 
    [
        {
          "id": 1,
          "img": "https://i.ibb.co.com/5hy4ytV/Shanto-c21f425b385cb592ce32fd6422ac92f7.webp",
          "name": "Virat Kohli",
          "country": "India",
          "price": "200",
          "role": "Batsman"
        },
        {
          "id": 2,
          "img": "https://i.ibb.co.com/K7XxXkD/images.jpg",
          "name": "Babar Azam",
          "country": "Pakistan",
          "price": "180",
          "role": "Batsman"
        },
        {
          "id": 3,
          "img": "https://i.ibb.co.com/48v1Sv5/zeerwww345400.jpg",
          "name": "Joe Root",
          "country": "England",
          "price": "350",
          "role": "Batsman"
        },
        {
          "id": 4,
          "img": "https://i.ibb.co.com/5hy4ytV/Shanto-c21f425b385cb592ce32fd6422ac92f7.webp",
          "name": "Mitchell Starc",
          "country": "Australia",
          "price": "400",
          "role": "Bowler"
        },
        {
          "id": 5,
          "img": "https://i.ibb.co.com/48v1Sv5/zeerwww345400.jpg",
          "name": "Kane Williamson",
          "country": "New Zealand",
          "price": "260",
          "role": "Batsman"
        },
        {
          "id": 6,
         "img": "https://i.ibb.co.com/74X2DG1/lllloo0090xxx.png",
          "name": "Rashid Khan",
          "country": "Afghanistan",
          "price": "300",
          "role": "Bowler"
        },
        {
          "id": 7,
          "img": "https://i.ibb.co.com/MM4F01W/gettyimages-1728951713-612x612.jpg",
          "name": "Shakib Al Hasan",
          "country": "Bangladesh",
          "price": "300",
          "role": "All-rounder"
        },
        {
          "id": 8,
          "img": "https://i.ibb.co.com/GkrZkPp/dea5f-17077459844453-1920.webp",
          "name": "Ben Stokes",
          "country": "England",
          "price": "170",
          "role": "All-rounder"
        },
        {
          "id": 9,
          "img": "https://i.ibb.co.com/5jbBqfZ/ioiiiofhdfgxn.webp",
          "name": "Trent Boult",
          "country": "New Zealand",
          "price": "140",
          "role": "Bowler"
        },
        {
          "id": 10,
          "img": "https://i.ibb.co.com/5jbBqfZ/ioiiiofhdfgxn.webp",
          "name": "David Warner",
          "country": "Australia",
          "price": "450",
          "role": "Batsman"
        },
        {
          "id": 11,
          "img": "https://i.ibb.co.com/74X2DG1/lllloo0090xxx.png",
          "name": "Jasprit Bumrah",
          "country": "India",
          "price": "320",
          "role": "Bowler"
        },
        {
          "id": 12,
          "img": "https://i.ibb.co.com/74X2DG1/lllloo0090xxx.png",
          "name": "Andre Russell",
          "country": "West Indies",
          "price": "330",
          "role": "All-rounder"
        },
        {
          "id": 13,
          "img": "https://i.ibb.co.com/Zx97c7Z/722-camedia.png",
          "name": "Faf du Plessis",
          "country": "South Africa",
          "price": "220",
          "role": "Batsman"
        },
        {
          "id": 14,
          "img": "https://i.ibb.co.com/TrcLfLJ/264f80349fee9ab497afefa361ac4755.jpg",
          "name": "Pat Cummins",
          "country": "Australia",
          "price": "200",
          "role": "Bowler"
        },
        {
          "id": 15,
          "img": "https://i.ibb.co.com/74X2DG1/lllloo0090xxx.png",
          "name": "Quinton de Kock",
          "country": "South Africa",
          "price": "230",
          "role": "Batsman"
        }
      ]
const availableArea = document.getElementById("availableArea");
const selectedArea = document.getElementById("selectedArea");
function selectedAreaF() {
 availableArea.classList.add('hidden');
 availableArea.classList.remove('block');
 selectedArea.classList.remove('hidden');
 selectedArea.classList.add('block');
};
function availableAreaF(){
  availableArea.classList.add('block');
 availableArea.classList.remove('hidden');
 selectedArea.classList.remove('block');
 selectedArea.classList.add('hidden');
}

    return (
        <div>
          <div className='flex justify-between'>
                <h3 className='font-bold text-xl'>Available Players</h3>
                <div>
                    <button onClick={() => availableAreaF()} className='px-5 focus:bg-green-500 py-2 rounded-lg'>Available</button>
                    <button onClick={() => selectedAreaF()} className='px-5 focus:bg-green-500 py-2 rounded-lg'>Selected </button>
                </div>
            </div>
            <div id='availableArea'>
            
            <div className='grid grid-cols-3 gap-5'>
             {players.map(player => <Players key={player.id} player={player}></Players>)}
              
            </div>
            </div>
            <div id='selectedArea' className='hidden'>
              <Selected></Selected>
            </div>
            
        </div>
    );
};

export default Blog;