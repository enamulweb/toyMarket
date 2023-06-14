import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import DynamicTitle from '../DynamicTitle/DynamicTitle';


const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {createUserWithEmail,updateUserData} = useContext(AuthContext)
    DynamicTitle('Register')
    const [error,setError] = useState('')
    const navigate = useNavigate()
    const onSubmit = (data) =>{
        setError('')
        console.log(data)
        if(data.password.length<8){
            return setError('Password Must Be Eight Character')
        }
        createUserWithEmail(data.email, data.password)
        .then(result=>{
            const user = result.user
            updateUserData(user,data.name,data.photourl)
            console.log(user)
            navigate('/')
            
        })
        .catch(err=>{
            const msg = err.message.split('/');
            setError(msg)
        })
    }; 
    return (
        <div className='mt-14 lg:my-28'>
            <h2 className='text-center text-2xl font-extrabold pb-10 '>Please Register</h2>
            <div  className='ml-[45%]'>
            <form className='border-2 p-5 rounded-lg w-2/5' onSubmit={handleSubmit(onSubmit)}>
            <input className='border rounded-lg h-12 w-72 pl-4 mb-4 border-blue-400' defaultValue="" type='text' placeholder='Enter Your Name' {...register("name",{required: true})} required/>
               <br/>
               <input className='border rounded-lg h-12 w-72 pl-4 mb-4 border-blue-400' defaultValue="" type='text' placeholder='Enter Your Photourl' {...register("photourl",{required: true})} required/>
               <br/>
               <input className='border rounded-lg h-12 w-72 pl-4 mb-4 border-blue-400' defaultValue="" type='email' placeholder='Enter Your Email' {...register("email",{required: true})} required/>
               <br/>
              
               <input className='border rounded-lg h-12 w-72 pl-4 mb-4 border-blue-400' defaultValue="" placeholder='Enter Your Password' {...register("password",{required: true})} required />
               <br/>
               {
                error && <p className='text-xs text-red-600'>{error}</p>
               }
               <input className='btn btn-primary' type="submit" value="Register" />
               <p className='pt-4'>Already have an account? <Link className='link-hover text-blue-700' to='/login'>Login</Link></p>
           </form>
            </div>
        
        
        </div>
    );
};

export default Register;