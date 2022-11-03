import Details from "./Details"

function Tile ({name, image, specialty, weight, greased, HMA}) {
    const handleClick = () => {
        console.log("Hello")
        return (
            <Details/>
        // return (
        //     <div>
        //         <p> {specialty} </p>
        //     </div>
        // )
        //console.log('Hi i was clicked')
        )
    }

    return (
        <div>
            <h1>{name}
            <button onClick = {handleClick} 
            >See Details</button>
            </h1>
                <Details/>
            <img 
                height= '200px'
                alt = {name}
                src = {image}/>
        </div>
    )


}

export default Tile


// stateVar ? <Details/> : <Otherstuff/>