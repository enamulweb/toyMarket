import React, { useContext, useEffect, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import DynamicTitle from '../DynamicTitle/DynamicTitle';

const AllToys = () => {
    const [toys,setAlltoys] = useState([])
    const {user} = useContext(AuthContext)
    const [limit,setlimit]= useState(20);
    const [loading,setloading] =useState(true)
    const [searchvalue,setSearchvalue] = useState('');
    DynamicTitle('AllToys')
    useEffect(()=>{
      setloading(true)
        fetch(`https://learn-with-toys-server.vercel.app/alltoys?limit=${limit}&search=${searchvalue}`)
        .then(res=> res.json())
        .then(data=> {
          setAlltoys(data)
          setloading(false)
        })
    },[limit,searchvalue])
    const handleChange =(e)=>{
      setSearchvalue(e.target.value)
    }
    const handleSearch = (e) =>{
      e.preventDefault();
      const value = e.target.searchvalue.value;
      setSearchvalue(value)
    }
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
    const OnToast = ()=>{
      if(!user){
          toast.error("You have to log in first to view details")
      }

  }
    //console.log(toys)
    return (
        <div>
          <div className='text-center mt-5 mb-5'>
            <Form onSubmit={handleSearch}>
            <input onChange={handleChange} type="text" name='searchvalue' placeholder="Type name to search" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="submit" className='btn btn-outline ml-2' value="Search" />
            </Form>
          </div>
      {
        loading ? <>{loadingfile}</>:<>
        <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Seller Name</th>
        <th>Sub-Category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>View</th>
      </tr>
    </thead>
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
         <button onClick={OnToast} className="btn btn-primary" ><Link to ={`toy/${toy._id}`}>View Details</Link></button>
         </th>
       </tr>
         })
        }
      
    </tbody>
    
  </table>
   {
    toys.length>20 && <>
    limit && <>
    <div className='text-center mt-5 mb-10'>
    <button onClick={()=> setlimit(null)} className='btn btn-info'> See More</button>
  </div>
    </>
    
    </>
   }
</div>
        
        
        </>
      }
<ToastContainer />
        </div>
    );
};

export default AllToys;