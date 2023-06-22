import React, { useContext } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import DynamicTitle from '../DynamicTitle/DynamicTitle';

const AddToy = () => {
    const {user} =useContext(AuthContext)
    DynamicTitle('AddToys')
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const description = form.description.value;
            const picture = form.picture.value;
            const seller_name = form.seller_name.value;
            const email = form.email.value;
            const price = form.price.value;
            const quantity = form.quantity.value;
            const rating = form.rating.value;
            const subcategory =  form.category.value;
            const data = {name,picture,seller_name,email,price,quantity,rating,description,subcategory}
            //console.log(data);
            Swal.fire({
                title: 'Are you sure?',
                text: "You want to Add Toy!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Add it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    fetch('https://toymarket-server-production.up.railway.app/addtoy',{
                        method:'POST',
                        headers:{
                            'Content-Type':'application/json',
                        },
                        body: JSON.stringify(data)
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        console.log(data);
                        if(data.insertedId){
                            Swal.fire(
                                'Add!',
                                'Your toy has been Added Succesfully.',
                                'success'
                            )
                            .then((result) => {
                                navigate('/mytoys');
                            })
                        }
                    })
                    }
            })
            
    }
    return (
        
        <div className='mt-10 lg:my-20'>
        <h2 className='text-center text-2xl font-extrabold pb-10 '>Add New Toy Information</h2>
        <div className='ml-[28%]'>
        <Form className='border-2 p-5 rounded-lg  w-3/5' onSubmit={handleSubmit}>
               <div className='flex gap-4'>
               <div>
               <p className='text-lg font-bold'>Name:</p>
               <input className='border rounded-lg h-12 w-72 pl-4 mb-4 border-blue-400' defaultValue='' type='text' placeholder='Toy Name' name='name' required/>
               </div>
               <br/>
                <div>
                <p className='text-lg font-bold'>PhotoUrl:</p>
               <input className='border rounded-lg h-12 w-72 mb-4 pl-4 border-blue-400' defaultValue='' placeholder='Photo Url' name='picture' required/>
               <br/>
                </div>
               </div>
               <div className='flex gap-4'>
               <div>
               <p className='text-lg font-bold'>Seller Name:</p>
               <input className='border rounded-lg h-12 w-72 pl-4 mb-4 border-blue-400' value={user?.displayName} type='text' placeholder='Seller Name' name='seller_name'/>
               </div>
               <br/>
                <div>
                <p className='text-lg font-bold'>Email:</p>
               <input className='border rounded-lg h-12 w-72 mb-4 pl-4 border-blue-400' value={user?.email} placeholder='Email' name='email' />
               <br/>
                </div>
                </div>
                <div>
                <div className='flex gap-4'>
               <div>
               <p className='text-lg font-bold'>Sub-Category:</p>
               <select name='category' className="select select-info w-72 " required>
                    <option value='science-kit'>Science kits</option>
                    <option value='math-learning-toys'>Math Learning Toys</option>
                    <option value='engineering-kits'>Engineering kits</option>
                </select>
               </div>
               <br/>
                <div>
                <p className='text-lg font-bold'>Rating:</p>
               <input className='border rounded-lg h-12 w-72 mb-4 pl-4 border-blue-400' defaultValue='' placeholder='Rating' name='rating' required />
               <br/>
                </div>
               </div>
               </div>
                <div>
                <div className='flex gap-4'>
               <div>
               <p className='text-lg font-bold'>Price:</p>
               <input className='border rounded-lg h-12 w-72 pl-4 mb-4 border-blue-400' defaultValue='' type='text' placeholder='Toy Price' name='price' required/>
               </div>
               <br/>
                <div>
                <p className='text-lg font-bold'>Quantity:</p>
               <input className='border rounded-lg h-12 w-72 mb-4 pl-4 border-blue-400' defaultValue='' placeholder='Available Quantity' name='quantity' required />
               <br/>
                </div>
               </div>
               </div>
               <p className='text-lg font-bold'>Description:</p>
               <textarea className='border rounded-lg h-20 w-full mb-4 pl-4 border-blue-400' defaultValue='' placeholder='Enter Description' name='description'  required/>
               <br/>
               
               <input className='btn btn-primary' type="submit" value="Add" />
              
           </Form>
        </div>
           </div>
    );
};

export default AddToy;