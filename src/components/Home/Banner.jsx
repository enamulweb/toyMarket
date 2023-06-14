import React from 'react';

const Banner = () => {
    return (
        <div className='lg:flex items-center lg:w-4/6 font-serif'>
            <div className='flex-grow text-center md:pt-5'>
                <h2 className='font-extrabold mt-5 lg:mt-0 text-4xl lg:text-5xl'>Let's Start</h2>
                <p className='font-semibold text-lg'>It's time to <br/>Toy Market!</p>
            </div>
            <div className=''>
        <img className='w-48 ml-[30%] mt-[5%] lg:ml-0 lg:mt-0 lg:w-96' src="https://i.ibb.co/GkD6kMs/banner.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;