import React from "react";
import { useState } from "react";

export const AddCalculator = () => {
    let[Total, setTotal] = useState(0)
    const onhandleClick =(value) => {
    setTotal(Total += value)
    }

    return (
        <>
            <button onClick={()=>onhandleClick(1)}>Add1</button>
            <button onClick={()=>onhandleClick(2)}>Add 2</button>
            <button onClick={()=>onhandleClick(3)}>Add 3</button>
            <br></br>
            Total: {Total}
        </>
    )
}