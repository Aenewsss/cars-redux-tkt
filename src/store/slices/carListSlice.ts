import { createSlice } from "@reduxjs/toolkit";
import { ICar, ICarList, ICars } from "../types/types";

const getTotalValue = (cars: ICars[]) => {
    if(cars.length > 0){
        const carsPrice = cars.map(({ car }) => car.price);
        return carsPrice.reduce((a, b) => a + b);
    }
    return 0
}

const listInitialState: ICarList = {
    searchTerm: '',
    cars: [],
    totalValue: 0
}

const carsListSlice = createSlice({
    name: 'carsList',
    initialState: listInitialState,
    reducers: {
        changeTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            state.cars.push({
                id: (Math.random() * 300).toString(),
                car: {
                    name: action.payload.car.name,
                    price: Number(action.payload.car.price)
                }
            });

            state.totalValue = getTotalValue(state.cars)
        },
        deleteCar(state, action) {
            const updated = state.cars.filter((car => { return car.id !== action.payload }));
            state.cars = updated;

            state.totalValue = getTotalValue(state.cars)
        }
    }
});

export const { changeTerm, addCar, deleteCar } = carsListSlice.actions;
export const carsListReducer = carsListSlice.reducer