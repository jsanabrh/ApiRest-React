import { useEffect } from 'react';
import { useCars } from '../context/CarsContext.jsx';
import CarCard from '../components/CarCard.jsx'

function CarsPages(){

    const { getCars, cars } = useCars();

    useEffect(()=>{
        getCars()
    },[]);

    if(cars.length === 0) return (<h1>No Tasks</h1>)

    return (
        <div className='grid sm: grid-cols-2 md:grid-cols-3 gap-2'>{
        cars.map(car =>(
            <CarCard car={car} key={car._id}/>
        ))}
         </div>
    )
    }

export default CarsPages;