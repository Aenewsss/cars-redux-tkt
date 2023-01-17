import { useDispatch, useSelector } from "react-redux"
import { IStore } from "../store/types/types";
import { changeTerm } from "../store";

const CarSearch = () => {

    const dispatch = useDispatch();

    const searchTerm = useSelector((store: IStore) =>{
        return store.carsList.searchTerm
    })

    const handleChangeTerm = (e: any) => {
        dispatch(changeTerm(e.target.value))
    }

    return <input onChange={handleChangeTerm} value={searchTerm} type="text" className="w-50 form-control border-dark mb-5" placeholder="Search your car" />
}

export default CarSearch;