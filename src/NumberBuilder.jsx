import React from "react";
//import usState
import { useState } from "react";

export const NumberBuilder = () => {
    let[counter, setCounter] = useState(0)
    let[stringCounter, setStringCounter]= useState('')

    const handleAddNum = ()=>{
        setCounter(++counter)
        setStringCounter(stringCounter+counter)
    }

    const handleReset = ()=> {
        setCounter(0)
        setStringCounter('')
    }

    return (
        <div>
            {/* add onClick */}

            <button onClick={()=>handleAddNum()}>Add Number</button>
            <button onClick={()=>handleReset()}>Reset</button>
            <br></br>
            Numbers: {stringCounter}
        </div>
    )
}