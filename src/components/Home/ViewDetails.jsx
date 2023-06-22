import React, { useEffect, useState } from 'react';
import { FaBox, FaCoins, FaDollarSign, FaEnvelope, FaMale, FaPager, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
    const {id} = useParams();
    const [toy,setToy] = useState([])
    const {name,picture,description,price,quantity,rating,subcategory,seller_name,email} = toy || {}
    useEffect(()=>{
        fetch(`https://toymarket-server-production.up.railway.app/viewtoys/${id}`)
        .then(res=> res.json())
        .then(data=> {
            data.map(t=> setToy(t))
        })
    },[id])
    //console.log(toy)
    return (
        <div className='font-serif bg-gray-500 text-white'>
            <div className="card pt-20 pb-20 w-5/6 lg:card-side">
            <div className='ml-20 flex-grow text-center'>
            <h2 className="font-extrabold text-3xl">{name}</h2>
            <figure><img className='w-96 rounded-2xl mt-5' src={picture} alt="Album"/></figure>
            </div>
            <div className="card-body font-bold mt-16">
                { (seller_name && email) && <>
                        <h2 className="text-lg flex gap-2"><FaMale className='h-8 pt-1 pb-1 border-2 w-8 border-white rounded-full'/> <span>{seller_name}</span></h2>
                <h2 className="text-lg flex gap-2"><FaEnvelope className='h-8 pt-1 pb-1 border-2 w-8 border-white rounded-full'/> <span>{email}</span></h2>
                        </>
                }
                <h2 className="text-lg flex gap-2"><FaBox className='h-8 pt-1 pb-1 border-2 w-8 border-white rounded-full'/> <span>{subcategory}</span></h2>
                <h2 className="text-lg flex gap-2"><FaCoins className='h-8 pt-1 pb-1 border-2 w-8 border-white rounded-full'/> <span>{quantity}</span></h2>
                <h2 className="text-lg flex gap-2"><FaStar className='h-8 pt-1 pb-1 border-2 w-8 border-white rounded-full'/> <span>{rating}</span></h2>
                <h2 className="text-lg flex gap-2"><FaDollarSign className='h-8 pt-1 pb-1 border-2 w-8 border-white rounded-full'/> <span>{price}</span></h2>
                <h2 className="text-lg flex gap-2"><FaPager className='h-8 pt-1 pb-1 border-2 w-8 border-white rounded-full'/> <span>{description}</span></h2>
            </div>
            </div>
        </div>
    );
};

export default ViewDetails;