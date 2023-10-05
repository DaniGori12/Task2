import { Database } from "../data/database"
import { useState } from "react"

export default function Selector() {

    const [selectedData, setSelectedData] = useState();

    function dataSelect(event) {
        setSelectedData(Database[event.target.value])
    }

    return (
        <div >
  
            <select onChange={dataSelect}>
                {Database.map((element, id) => {
                    return (
                        <option value={id} key={id}>

                            <>{element.name}</>
 
                        </option>
                    )
                })}
            </select>
  <div className="select">
            { selectedData ? 
                <>
<div className="idSelector">El ID del curso es: {selectedData.id}</div>
                    <h1>{selectedData.name}</h1>
                    <h2>{selectedData?.description}</h2>
                    <img className="image" src={selectedData.img} />
                </> 
            : <h1>Selecciona un curso</h1>
            }
  </div>
        </div>
    )
}
