import Car from '../models/car.model.js'

export const getCars = async (req, res) => {
    const cars = await Car.find({user: req.user.id}).populate('user')
    res.json(cars)
};

export const createCar = async (req, res) => {
    const {platenumber, brand, state, dailyvalue} = req.body
    const newCar = new  Car({
        platenumber,brand, state, dailyvalue, user: req.user.id
    })
    const savedCar = await newCar.save();
    res.json(savedCar)
};

export const getCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id).populate('user');
        if(!car) return res.status(404).json({message:'Carro no encontrado'})
        res.json(car)
    } catch (error) {
        return res.status(404).json({message: "Car not found"})
    }
};

export const deleteCar = async (req, res) => {
    try {
        const car = await Car.findByIdAndDelete(req.params.id);
        if(!car) return res.status(404).json({message:'Carro no encontrado'})
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({message: "Car not found"})
    }
};

export const updateCar = async (req, res) => {
    try {
        const car = await Car.findByIdAndUpdate(req.params.id, req.body, {new:true})
        if(!car) return res.status(404).json({message:'Carro no encontrado'})
        res.json(car)
    } catch (error) {
        return res.status(404).json({message: "Car not found"})
    }
};