import { createSlice } from "@reduxjs/toolkit";
import { ICar } from "../types/types";
import { addCar } from "./carListSlice";

const carInitialState: ICar = {
    name: '',
    price: 0,
}

const carSlice = createSlice({
    name: 'car',
    initialState: carInitialState,
    reducers: {
        changeName(state, action) {
            state.name = action.payload;
        },
        changePrice(state, action) {
            state.price = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(addCar, (state) => {
            state.name = '';
            state.price= 0;
        })
    }
});

export const { changePrice, changeName } = carSlice.actions;
export const carReducer = carSlice.reducer