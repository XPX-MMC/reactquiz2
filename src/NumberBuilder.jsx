import React, {useState} from "react";

export const NumberBuilder = () => {
    let [numString, setNumString] = useState('');
    let [counter, setCounter] = useState(0);

    const addNumberClick = () => {
        setNumString(`${numString} ${++counter}`);
        
        setCounter(counter);
    }

    const resetClick = () => {
        setNumString('');
        setCounter(0);
    }

    return (
        <>
            <button onClick={addNumberClick}>Add Number</button>
            <button onClick={resetClick}>Reset</button>
            <br></br>
            Numbers: 
            <span id="main-text">{numString}</span>
        </>
    )
}