import Details from "./Details"
import {useState} from "react"

function Tile ({name, image, specialty, weight, greased, HMA}) {
    const [HogDetails, setHogDetails] = useState(false)
    
    const handleClick = () => {
        setHogDetails (!HogDetails) 
    }
    console.log(HogDetails)
    return (
        <div>
            <h1>{name}
            <button onClick = {handleClick} 
            >See Details</button>
            </h1>
            
            <img 
                height= '200px'
                alt = {name}
                src = {image}/>
        </div>
    )


}

export default Tile


// stateVar ? <Details/> : <Otherstuff/>