import { useState } from "react"
import CarForm from "./components/CarForm"
import CarList from "./components/CarList"
import CarSearch from "./components/CarSearch"
import CarValue from "./components/CarValue"
import { ICar } from "./store/types/types"

function App() {

  const [editCar, setEditCar] = useState<ICar>();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center border border-black" >
      <CarForm editCar={editCar} setEditCar={setEditCar}/>
      <CarSearch />
      <CarList setEditCar={setEditCar}/>
      <CarValue />
    </div>
  )
}

export default App
