import { configureStore } from "@reduxjs/toolkit";
import { addCar, deleteCar, changeTerm, carsListReducer } from "./slices/carListSlice";
import { changeName, changePrice, carReducer } from "./slices/carSlice";

const store = configureStore({
    reducer: {
        car: carReducer,
        carsList: carsListReducer
    }
});

export { store, addCar, deleteCar, changeTerm, changeName, changePrice }