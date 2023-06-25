import {useForm} from 'react-hook-form';
import {useAuth} from '../context/AuthContext.jsx'
import { useEffect } from 'react';
import {useNavigate, Link} from 'react-router-dom'


function RegisterPage(){

    const {register, handleSubmit, formState:{errors}} = useForm();
    const {signup, isAuthenticated, errors: RegisterErrors} = useAuth();
    const navigate = useNavigate()

        useEffect(()=>{
            if(isAuthenticated) navigate('/cars')
        },[isAuthenticated])

    const onSub = handleSubmit(async(values) => {
        await signup(values);
    });

    return(
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
        <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
            {
                RegisterErrors.map((error, i)=>(
                    <div className='bg-red-500 p-2 text-white my-2' key={i}>
                        {error}
                    </div>
                ))
            }
            <form onSubmit={onSub}>

            <h1 className='text-3xl font-bold'>Register</h1>

                <input type="text" {...register("username", {required: true})} 
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder='Username'
                    />
                    {errors.username &&<p className='text-red-500'>Username is required</p>}

                <input type="text" {...register("name", {required: true})} 
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder='Name'
                    />
                    {errors.name &&<p className='text-red-500'>Name is required</p>}
                <input type="password" {...register("password", {required: true})} 
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder='Password'
                    />
                    {errors.password &&<p className='text-red-500'>Password is required</p>}
                <input type="text" {...register("role", {required: true})} 
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder='Role'
                    />
                    {errors.role &&<p className='text-red-500'>Role is required</p>}
                <input type="text" {...register("reserve", {required: true})} 
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder='Reserved'
                    />
                    {errors.reserve &&<p className='text-red-500'>Reserve is required</p>}
                <button type="submit" className='bg-sky-500 text-white px-4 py-2 rounded-md my-2'>
                    Register
                </button>
            </form>
            <p className='flex gap-x-2 justify-between'>Iniciar Sesion<Link to="/login" className="text-sky-500">Login</Link></p>
        </div>
        </div>
    )
}


export default RegisterPage;