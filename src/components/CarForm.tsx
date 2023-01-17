import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCar, changeName, changePrice, store } from "../store";
import { IStore } from "../store/types/types";

const CarForm: FC<any> = ({ editCar, setEditCar }) => {
    const dispatch = useDispatch();

    const {name, price} = useSelector((store: IStore) => {
        return {
            name: store.car.name,
            price: store.car.price,
        }
    });

    const handleChangeName = (e: any) => {
        dispatch(changeName(e.target.value))
    }

    const handleChangePrice= (e: any) => {
        dispatch(changePrice(e.target.value))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if(!editCar){
            dispatch(addCar({
                car: { name, price }
            }))
        }
        setEditCar(null)
    };

    useEffect(() => {
        if (editCar) {
            dispatch(changeName(editCar.name))
            dispatch(changePrice(editCar.price))
        }
    }, [editCar])

    return (
        <form className="p-5" style={{ maxWidth: "300px" }} onSubmit={handleSubmit}>
            <div className="mb-3">
                <h3 className="fw-normal">{ editCar ? 'Edit car' : 'Add a new car'} </h3>
            </div>
            <div className="mb-3">
                <label className="fs-5 fw-light">Name</label>
                <input required placeholder="Your car name" className="form-control" type="text" value={name} onChange={handleChangeName} />
            </div>
            <div className="mb-3">
                <label className="fs-5 fw-light">Price</label>
                <input required placeholder="0.0" className="form-control" type="number" value={price} onChange={handleChangePrice} />
            </div>
            <div className="mb-3">
                <button className="btn btn-primary w-100">{ editCar ? 'EDIT' : 'ADD'} </button>
            </div>
        </form>
    );
}

export default CarForm;