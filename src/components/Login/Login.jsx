import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { FaGoogle} from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import DynamicTitle from '../DynamicTitle/DynamicTitle';


const Login = () => {
    const {loginwithEmail,loginwithGoogle} = useContext(AuthContext)
    const [error,setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    DynamicTitle('Login')
    const from = location.state?.from?.pathname || '/'
    console.log(location)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data)
        setError('')
        loginwithEmail(data.email,data.password)
        .then(result=>{
            const loggedUser = result.user
            navigate(from,{replace:true});
        })
        .catch(err=>{
            const msg = err.message.split('/')[1];
            setError(msg)
        })
    };    

   
    return (
        <div className='mt-14 lg:my-28'>
            <h2 className='text-center text-2xl font-extrabold pb-10 '>Login Page</h2>
            <div  className='ml-[45%]'>
            <div className="flex flex-col w-2/5 border-opacity-50">
  <div className="grid rounded-box place-items-center">
            <form className='border-2 p-5 rounded-lg w-full' onSubmit={handleSubmit(onSubmit)}>
               
               <input className='border rounded-lg h-12 w-72 pl-4 mb-4 border-blue-400' defaultValue="" type='email' placeholder='Enter Your Email' {...register("email",{required: true})} required/>
               <br/>
              
               <input className='border rounded-lg h-12 w-72 mb-4 pl-4 border-blue-400' defaultValue="" placeholder='Enter Your Password' {...register("password",{required: true})} required />
               <br/>
               {
                error && <p className='text-xs text-red-600'>{error}</p>
               }
               <p className='pb-4'>Don't have an account? <Link className='link-hover text-blue-700' to='/register'>Register</Link></p>
               
               <input className='btn btn-primary' type="submit" value="Login" />
               <div className="divider">OR</div>
               <div onClick={loginwithGoogle} className="flex btn btn-primary justify-center h-12 rounded-box place-items-center"><FaGoogle/> <span className='ml-2 font-bold'>Login with Google</span></div>
           </form>
           </div>
</div>
    </div>
        </div>
    );
};

export default Login;