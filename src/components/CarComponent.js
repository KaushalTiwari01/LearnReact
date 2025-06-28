/*
This code is for to understand props and state, props used to share data from parents to child compoents
to make dynamic software and also state are use to handle events and task.
*/

import { useState } from "react";
const Car=(props)=>{
    const [carName, setcarName]=useState(props.defaultName)
    return (
        <>
        <div>
           <h2>Hii, i am a car</h2>
           <input type="text" placeholder="enter the car name" onChange={(e)=> setcarName(e.target.value) }/>
           <p>My car name is {carName}</p>
        </div>
        </>
    )
}
export default Car;