import React from 'react';

const Footer = () => {
    return (
        <div className=''>
            <div className='bg-gray-400 px-10 py-5  rounded-xl space-y-2'>
                <h3 className='font-bold text-xl'>Subscribe to our Newsletter</h3>
                <p className='text-sm'>Get the latest updates and news right in your inbox!</p>
                <div>
                    <input className='mr-4 rounded-xl pl-3' placeholder='Enter your e-mail' type="email" name="" id="" />
                    <button className='font-bold text-xs'>Subscribe</button>
                </div>
            </div>
            <div className='flex justify-between mt-5'>
                <div className='text-left space-y-2'>
                    <h2 className='font-bold text-xl'>About Us</h2>
                    <p className='w-1/2'>We are a passionate team dedicated to providing the best services to our customers.</p>
                    
                </div>
                <div className='text-left space-y-2'>
                    <h2 className='font-bold text-xl'>Quick Link</h2>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className='text-left space-y-2'>
                    <h2 className='font-bold text-xl'>Subscribe</h2>
                    <p className='w-3/4'>Subscribe to our newsletter for the latest updates.</p>
                    <div>
                        <input className='border rounded-xl p-2' placeholder='Enter your e-mail' type="email" name="" id="" />
                        <button className='border p-2 rounded-xl bg-green-500'>Subscribe</button>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Footer;