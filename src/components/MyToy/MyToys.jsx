import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import { Form, useNavigate } from 'react-router-dom';
import DynamicTitle from '../DynamicTitle/DynamicTitle';
import Select from 'react-select';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(-1);
    const [email,setEmail] = useState(user.email)
    const [loading,setloading] =useState(true)
    const [toys,setMytoys] = useState([])
    DynamicTitle('MyToys');
    const handlesort = (e)=>{
        const sortValue = e.target.value;
        setSelectedOption(sortValue);
        console.log(sortValue)
    }
    useEffect(()=>{
        setloading(true)
        fetch(`https://learn-with-toys-server.vercel.app/mytoys?email=${email}&sort=${selectedOption}`)
        .then(res=> res.json())
        .then(data=> {
            setMytoys(data)
            setloading(false)
        })
    },[email,selectedOption])
    const loadingfile = <>

    <div className='lg:mx-[45%] lg:my-40'>
        <div aria-label="Loading..." role="status" className="flex items-center space-x-2">
  <svg className="h-12 w-12 animate-spin stroke-gray-500" viewBox="0 0 256 256">
    <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
    <line
      x1="195.9"
      y1="60.1"
      x2="173.3"
      y2="82.7"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"></line>
    <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
    <line
      x1="195.9"
      y1="195.9"
      x2="173.3"
      y2="173.3"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"></line>
    <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
    <line
      x1="60.1"
      y1="195.9"
      x2="82.7"
      y2="173.3"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"></line>
    <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
    <line
      x1="60.1"
      y1="60.1"
      x2="82.7"
      y2="82.7"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"></line>
  </svg>
  <span className="text-xs font-medium text-gray-500">Data Loading...</span>
</div>
        </div>
    
    </>
    const tablehead = <>
        <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Seller Name</th>
                    <th>Sub-Category</th>
                    <th>Price</th>
                    <th>Available Quantity</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
    </>
    const handleUpdate = (id)=>{
        navigate(`/update/${id}`)
    }
    const handleDelete = (id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to Delete!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://learn-with-toys-server.vercel.app/delete/${id}`,{
                    method:"DELETE",
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                .then(res=>res.json())
                .then(data=> {
                    console.log(data)
                    if(data.deletedCount>0){
                        const remaining = toys.filter(toy=> toy._id !== id)
                              Swal.fire(
                            'Delete!',
                            'Your Toy has been Delete.',
                            'success'
                        )
                        setMytoys(remaining);
                    }
                })
            
            }
          })
    }
    return (
        <div>
            <div className='flex justify-end ml-10 mr-10 items-center'>
                <h2 className='text-3xl flex-grow font-bold  mt-5 mb-5'>Toys list</h2>
                <div className=''>
                <Form>
                <select onChange={handlesort} name='price' className="select select-info w-72 ">
                    <option value='-1'>Price high to low</option>
                    <option value='1'>Price low to high</option>
                </select>
                </Form>
                </div>
            
            </div>
            
             {
                loading ? <>{loadingfile}</>:<>
                <div className="overflow-x-auto w-full">
               
               <table className="table w-full">
           {tablehead}
           <tbody>
           {
               toys?.map(toy=>{
               return <tr key={toy?._id}>
                   
               <td>
               <div className="flex items-center space-x-3">
                   <div className="avatar">
                   <div className="mask mask-squircle w-12 h-12">
                   <img src={toy?.picture}/>
                   </div>
                   </div>
               </div>
               </td>
               <td>
               {toy?.name}
               </td>
               <td>
               {toy?.seller_name}
               </td>
               <td>{toy?.subcategory}</td>
               <td> {toy?.price}</td>
               <td>{toy?.quantity}</td>
               <th>
               <button onClick={()=>handleUpdate(toy._id)} className="btn btn-info">Update</button>
               </th>
               <th>
               <button onClick={()=>handleDelete(toy._id)} className="btn btn-warning">Delete</button>
               </th>
           </tr>
               })
           }
           </tbody>
       </table>
           
       </div>
                
                </>
             }

            
        </div>
    );
};

export default MyToys;