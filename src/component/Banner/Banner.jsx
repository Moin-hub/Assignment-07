import React from 'react';
import BannerBackground from '../../logos/bg-shadow.png';
import BannerImage from '../../logos/banner-main.png';
const Banner = () => {
    // function App() {
    //     const backgroundStyle = {
    //       backgroundImage: url({BannerBackground}),
    //       backgroundSize: 'cover', 
    //       backgroundPosition: 'center', 
    //       height: '100vh',
          
    //     };
    // const firstBTN = document.getElementById("firstBTN");
    function oneFunction () {
        const totalBalance = document.getElementById("totalBalance").innerText;
        const totalBalanceNumber = Number(totalBalance);
        const newTotal = totalBalanceNumber + 1234567;
        document.getElementById("totalBalance").innerText = newTotal;
        console.log(newTotal);
        
        
    }

    return (
        <div className='flex flex-col items-center my-4 py-5 space-y-2'>
            
            <img src={BannerImage} alt="" />
            <h3>Assemble Your Ultimate Dream 11 Cricket Team</h3>
            <p className='text-gray-500 font-light'>Beyond Boundaries Beyond Limits</p>
            <button id='firstBTN' onClick={() => oneFunction()} className='btn bg-green-500 p-3 rounded-lg active:bg-green-600'>Claim Free Credit</button>
        </div>
    );
};
// };

export default Banner;