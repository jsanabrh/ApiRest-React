import { createContext, useContext, useState } from "react";
import {createCarRequest, getCarsRequest, deleteCarRequest, getCarRequest, updateCarRequest} from '../api/cars'

const CarContext = createContext();

export const useCars = () => {
    const context = useContext(CarContext);
    if (!context) throw new Error("useTasks must be used within a TaskProvider");
    return context;
  };
    
  export function CarProvider({ children }) {
    const [cars, setCars] = useState([]);
  
    const getCars = async () => {
      try {
        const res = await getCarsRequest();
        setCars(res.data)
      } catch (error) {
        console.error(error)
      } 
    };

    const createCar = async (car) => {
        const res = await createCarRequest(car);
        };

    const deleteCar = async (id)=>{
      try {
        const res = await deleteCarRequest(id)
        if(res.status === 204) setCars(cars.filter(car => car._id !== id));
      } catch (error) {
        console.log(error)
      }
    };

    const getCar = async (id) => {
      try {
        const res = await getCarRequest(id)
        return res.data
      } catch (error) {
        console.error(error);
      }
    };

    const updateCar = async (id, car) => {
      try {
        await updateCarRequest(id, car)
      } catch (error) {
        console.error(error);
      }
    }

      return (
        <CarContext.Provider
          value={{
            cars,
            createCar,
            getCars,
            deleteCar,
            getCar,
            updateCar
          }}
        >
          {children}
        </CarContext.Provider>
      );
    }