import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import {  Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'
import Swal from 'sweetalert2';


const Category = () => {
    const [category,setCategory] = useState('science-kit')
    const {user} = useContext(AuthContext)
    const [loading,setloading]= useState(true)
    const [toys,setAlltoys] = useState([])
    const navigate = useNavigate()
    const location = useLocation();
    const handleCategory = (value)=>{
        setCategory(value)
    }
    const OnToast = (id)=>{
        if(!user){
            Swal.fire({
                text: "You have to log in first to view details",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ok'
              }).then((result) => {
                if (result.isConfirmed) {
                    location.state = `toy/${id}`
                  navigate(location.state)
                }
              })
        }
        if(user){
                navigate(`toy/${id}`)
            }
        
    }

    
    useEffect(()=>{
        setloading(true)
        fetch(`https://learn-with-toys-server.vercel.app/alltoy/${category}`)
        .then(res=> res.json())
        .then(data=> {
            setAlltoys(data)
            setloading(false)
        })
    },[category])
    const loadingfile = <>
    <div className='mx-[30%] my-20 lg:mx-[45%] lg:my-40'>
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
    const categories = <>
     <div className='grid mt-12 lg:grid-cols-3 pl-5 pr-5 gap-4'>
                {
                    toys?.map(toy=> 
                        <div className="card lg:w-[400px] glass" key={toy?._id}>
                            <figure><img className='w-96 h-52' src={toy?.picture} alt="car!"/></figure>
                            <div className="card-body">
                                <h2 className="card-title">{toy?.name}</h2>
                                { toy?.seller_name && 
                                    <p>Seller: <span>{toy?.seller_name}</span></p>
                                }
                                <p>Category: {toy?.subcategory}</p>
                                <div className='flex'>
                                <p>Price: {toy?.price}</p>
                                <p className='flex'>Rating:  <Rating
                                    style={{ maxWidth: 120 ,maxHeight:50 }}
                                    value={toy?.rating}
                                    readOnly
                                    /></p>
                                </div>
                                <div className="card-actions mt-4 justify-end">
                                {/* <Link to ={`alltoys/${toy._id}`}  ><button onClick={OnToast} className="btn btn-primary" >View Details</button></Link> */}
                                <button onClick={()=>OnToast(toy._id)} className="btn btn-primary" >View Details</button>
                                </div>
                            </div>
                            
                        </div>
                        
                        )
                }
                
            </div> 
            
    
    </>


    return (
        <div className='font-serif mt-12'>
            <div>
                <p className='text-center text-2xl font-bold'>Educational and Learning Toys</p>
                <p className='text-center text-xl pt-5'>Categories</p>
            </div>
            <div>
            <Tabs>
                <TabList className='text-center'>
                <Tab onClick={()=>handleCategory('science-kit')}>Science kits</Tab>
                <Tab onClick={()=>handleCategory('math-learning-toys')}>Math Learning Toys</Tab>
                <Tab onClick={()=>handleCategory('engineering-kits')}>Engineering kits</Tab>
                </TabList>
    

                <TabPanel className='border-t-2'>
                    {
                        loading ? <>{loadingfile}</>:<>{categories}</>
                    }
                </TabPanel>
                <TabPanel>
                {
                        loading ? <>{loadingfile}</>:<>{categories}</>
                }
                </TabPanel>
                <TabPanel>
                {
                    loading ? <>{loadingfile}</>:<>{categories}</>
                }
                </TabPanel>
            </Tabs>
            <ToastContainer />
            </div>
           
        </div>
    );
};

export default Category;