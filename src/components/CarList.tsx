import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../store/types/types";
import { deleteCar } from "../store";
import { FC } from "react";

const CarList: FC<any> = ({ setEditCar }) => {

    const dispatch = useDispatch();

    const { carsList, searchTerm } = useSelector((store: IStore) => {
        return {
            carsList: store.carsList.cars,
            searchTerm: store.carsList.searchTerm
        }
    });

    const handleDeleteCar = (id: string) => {
        dispatch(deleteCar(id))
    };

    const handleEditCar = (name: string, price: number) => {
        setEditCar({
            name,
            price
        })
    };

    return (
        <div className="d-flex flex-column w-50 gap-3">
            {
                carsList.map(({ id, car }, i) => {
                    return (
                        <div className="row border rounded border-secondary p-3" key={i}>
                            <div className="col-md-6 d-flex justify-content-start">
                                <span className="fs-5 fw-light text-uppercase">
                                    {
                                        car.name.includes(searchTerm.trim()) && searchTerm !== ''
                                        ? <span className="fw-bold fs-4">{car.name}</span>
                                        : <span>{car.name}</span>
                                    }
                                    - R$ {car.price}
                                </span>
                            </div>
                            <div className="col-md-6 d-flex justify-content-end gap-2">
                                <button className="btn btn-default border-0 fs-5 p-0" onClick={() => handleEditCar(car.name, car.price)}>✎</button>
                                <button className="btn btn-default text-danger border-0 fs-5 p-0" onClick={() => handleDeleteCar(id)}>❌</button>
                            </div>

                        </div>)
                })
            }
            {
                carsList.length === 0 &&
                <p className="text-danger text-center">No cars yet</p>
            }
        </div>
    );
}

export default CarList;