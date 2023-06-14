import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'
const Gallery = () => {
    const images = [
        {
          original: 'https://img.freepik.com/free-vector/hand-drawn-science-background_23-2148535676.jpg?w=996&t=st=1684495751~exp=1684496351~hmac=2a68003fe0820720996c4f00e3d963564d763a2cd8153241d9d264445f45041d',
          thumbnail: 'https://img.freepik.com/free-vector/hand-drawn-science-background_23-2148535676.jpg?w=996&t=st=1684495751~exp=1684496351~hmac=2a68003fe0820720996c4f00e3d963564d763a2cd8153241d9d264445f45041d',
        },
        {
          original: 'https://img.freepik.com/free-vector/children-fixing-robot-together-white-background_1308-78181.jpg?w=900&t=st=1684495814~exp=1684496414~hmac=7c76de8f6ce51e3ab2cfb0fe89720c12311278ab720c4db9af7ccb2245569d17',
          thumbnail: 'https://img.freepik.com/free-vector/children-fixing-robot-together-white-background_1308-78181.jpg?w=900&t=st=1684495814~exp=1684496414~hmac=7c76de8f6ce51e3ab2cfb0fe89720c12311278ab720c4db9af7ccb2245569d17',
        },
        {
          original: 'https://img.freepik.com/free-vector/children-toys-set_74855-7019.jpg?w=1060&t=st=s~exp=1684495473~hmac=2b37665993fb9305feab4a3db9bb0191dec54e152eac6281c750da78ec198585',
          thumbnail: 'https://img.freepik.com/free-vector/children-toys-set_74855-7019.jpg?w=1060&t=st=s~exp=1684495473~hmac=2b37665993fb9305feab4a3db9bb0191dec54e152eac6281c750da78ec198585',
        },
      ];
    
    return (

        <div className='flex flex-col-reverse lg:flex-row lg:ml-5 lg:mr-0 lg:mt-12 items-center'>
            <div className='w-5/6  lg:w-4/12 pt-5 lg:pt-0 lg:h-[600px]'>
            <ImageGallery autoPlay={true} items={images} />
            </div>
            <div className='flex-grow lg:pl-64'>
                 <p className='font-bold text-3xl mt-10 lg:mt-0 lg:text-5xl font-serif pb-10'>Toy's Category</p>
                 <div className='font-semibold text-xl font-serif'>
                     <p>Science kits</p>
                     <p>Math Learning Toys</p>
                     <p>Engineering kits</p>
                </div>
            </div>
        </div>
        
    );
};

export default Gallery;