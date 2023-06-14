import React, { useEffect, useState } from 'react';
import { Form, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import DynamicTitle from '../DynamicTitle/DynamicTitle';

const Update = () => {
    const {id} = useParams();
    const [toy,setToy] = useState([])
    const navigate = useNavigate();
    DynamicTitle('Update')
    const {description,price,quantity} = toy || {}
    useEffect(()=>{
        fetch(`https://learn-with-toys-server.vercel.app/viewtoys/${id}`)
        .then(res=> res.json())
        .then(data=> {
            data.map(t=> setToy(t))
        })
    },[id])
    const handleSubmit = e =>{
        e.preventDefault()
        const form = e.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const data = {
            price,quantity,description
        }
        console.log(data)
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to Update!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
          }).then((result) => {
            if (result.isConfirmed) {    
                fetch(`https://learn-with-toys-server.vercel.app/updatetoy/${id}`,{
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res=> res.json())
                .then(data=> {
                    if(data.modifiedCount>0){
                              Swal.fire(
                                    'Update!',
                                    'Your toy has been Updated.',
                                    'success'
                                )
                                .then((result) => {
                                    navigate('/mytoys');
                                })
                    }
            
            },[])
            
            }
          })
    }
    return (
        <div className='mt-14 lg:my-28'>
            <h2 className='text-center text-2xl font-extrabold pb-10 '>Update Information</h2>
            <div  className='ml-[40%]'>
            <Form className='border-2 p-5 rounded-lg w-2/5' onSubmit={handleSubmit}>
               <p className='text-lg font-bold'>Price:</p>
               <input className='border rounded-lg h-12 w-72 pl-4 mb-4 border-blue-400' defaultValue={price} type='text' placeholder='Enter Price' name='price'/>
               <br/>
                <p className='text-lg font-bold'>Quantity:</p>
               <input className='border rounded-lg h-12 w-72 mb-4 pl-4 border-blue-400' defaultValue={quantity} placeholder='Enter Quantity' name='quantity' />
               <br/>
               <p className='text-lg font-bold'>Description:</p>
               <textarea className='border rounded-lg h-12 w-72 mb-4 pl-4 border-blue-400' defaultValue={description} placeholder='Enter Description' name='description'  />
               <br/>
               
               <input className='btn btn-primary' type="submit" value="Update" />
              
           </Form>
           </div>
        </div>
    );
};

export default Update;