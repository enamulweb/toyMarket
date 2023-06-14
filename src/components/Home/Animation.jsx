import React from 'react';
import { Slide } from 'react-awesome-reveal';

const Animation = () => {
    
    return (
        <div className='mt-20 min-h-[300px] max-w-[300px] lg:max-w-[1400px]'>
            <Slide duration={1000}>
            <div className='text-center font-bold text-lg lg:text-3xl'>
                <p>Enjoy and Learn With Animation</p>
            </div>
            <div className='lg:h-[300px] mt-20 w-full flex'>
            <div className='h-50 ml-[10%] w-1/2 inline'><span><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSokDGGXuvzobr7uJnuhUO9hJxGkQfv9nZeiQ'></img></span></div>
            <div  className='h-50 w-1/2 inline object-cover' >
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhBeAiDb2oiAnsN5yvqociOuxLrIATmnp4w'/>
            </div>
            </div>
            <div className='h-[300px] mt-20 w-full flex'>
            <div className='h-50 ml-[10%] w-1/2 inline' ><span><img className='h-64' src='https://d2hw29brqn7o70.cloudfront.net/media/catalog/product/cache/1/image/720x/9df78eab33525d08d6e5fb8d27136e95/o/d/odysseybattery-hk-pc1200.jpg'></img></span></div>
            <div  className='h-50 w-1/2 inline object-cover'>
                <img src='https://cdn.xxl.thumbs.canstockphoto.com/wooden-baby-kit-for-mathematics-close-up-stock-photo_csp4750594.jpg' className='w-60'/>
            </div>
            </div>
            </Slide>

            
        </div>
    );
};

export default Animation;