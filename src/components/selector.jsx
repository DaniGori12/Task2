import { Database } from "../data/database"
import { useState } from "react"


export default function Selector() {

    const [selectedData, setSelectedData] = useState(false);
    const [openMenu, setOpenMenu] = useState(false)

    function dataSelect(event) {
        console.log("estás seleccionando una opción")
        setSelectedData(Database[event.target.value])
    }

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }


    return (
        <div>
            <div className="ButtonClass">
                <button onClick={toggleMenu}> Selecciona algún curso</button>
            </div>
                <nav className={`Opening-nav ${openMenu ? 'isActive' : ''}`}>
                    <ul>
                        {Database.map((element, id) => {
                            return (
                                <li value={id} key={id} onClick={dataSelect} defaultValue="default" className="Cabecera-li">
                                    {element.name}
                                    <img src={element.img} width="20px"></img>
                                </li>
                            )
                        })}
                    </ul>
                </nav>


            <div className="select">
                {selectedData ?
                    <>
                        <div className="idSelector">El ID del curso es: {selectedData.id}</div>
                        <h1>{selectedData.name}</h1>
                        <h3>{selectedData?.description}</h3>
                        <img className="image" src={selectedData.img} />
                    </>
                    :
                    ""
                }
            </div>
        </div>
    )
}
