import { Link } from "react-router-dom";
import { useCars } from "../context/CarsContext";
function CarCard({car}){

    const {deleteCar} = useCars()

    return(
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-lg">
                <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{car.platenumber}</h1>
                <div className="flex gap-x-2 items-center">
                    <button 
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                    onClick={()=>{
                        deleteCar(car._id);
                    }} >Delete</button>
                    <Link to={`/cars/${car._id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Edit</Link>
                </div>
                </header>
                <p className="text-slate-300">{car.brand}</p>
                <p className="text-slate-300">{car.state}</p>
                <p className="text-slate-300">{car.dailyvalue}</p>  
            </div>
    )
}

export default CarCard;