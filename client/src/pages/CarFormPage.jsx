import {useForm} from 'react-hook-form'
import { useCars } from '../context/CarsContext';
import { useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react';

function CarFormPage(){

    const {register, handleSubmit, setValue} = useForm();
    const {createCar, getCar, updateCar} = useCars();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadCar(){
            if(params.id){
                const car = await getCar(params.id);
                setValue('platenumber', car.platenumber)
                setValue('brand', car.brand)
                setValue('state', car.state)
                setValue('dailyvalue', car.dailyvalue)
            }
        }
        loadCar()
    },[])

    const obSub = handleSubmit((data) => {
        if(params.id){
            updateCar(params.id, data)
        }else {
            createCar(data);
        }
        navigate('/cars')
    });

    return(
        <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>

            <form onSubmit={obSub}>
                <input type="text" placeholder="PlateNumber" { ...register("platenumber")} autoFocus className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'/>
                <input type="text" placeholder="Brand" { ...register("brand")} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'/>
                <input type="text" placeholder="State" { ...register("state")} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'/>
                <input type="text" placeholder="DailyValue" { ...register("dailyvalue")} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'/>
                <button className="bg-indigo-500 px-4 py-1 rounded-lg">Save</button>
            </form>
        </div>
    )
}

export default CarFormPage;