import { useSelector } from "react-redux";
import { IStore } from "../store/types/types";

const CarValue = () => {

    const totalValue = useSelector((store: IStore) => {
        return store.carsList.totalValue
    });

    return (
        <p className="text-uppercase mt-4 fs-2 fw-light">Total value: {totalValue || 0}</p>
    );
}

export default CarValue;