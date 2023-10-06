import { Database } from "../data/database"
import { useState } from "react"

export default function Selector() {

    const [selectedData, setSelectedData] = useState(false);


    function dataSelect(event) {
        console.log("estás seleccionando una opción")
        setSelectedData(Database[event.target.value])
    }

    return (
        <div >

            <select onChange={dataSelect} defaultValue="default">
                <option disabled value="default" hidden>Choose an option</option>
                {Database.map((element, id) => {
                    return (
                        <>
                            <option value={id} key={id}>

                                {element.name}

                            </option>
                        </>
                    )
                })}
            </select>
            <div className="select">
                {selectedData ?
                    <>
                        <div className="idSelector">El ID del curso es: {selectedData.id}</div>
                        <h1>{selectedData.name}</h1>
                        <h2>{selectedData?.description}</h2>
                        <img className="image" src={selectedData.img} />
                    </>
                    :
                    <div className="ternario">
                        <h1>Selecciona un curso</h1>
                    </div>
                }
            </div>
        </div>
    )
}
