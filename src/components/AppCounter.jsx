import { useState } from "react";

export const Appcounter = () => {

    const [counter, setCounter] = useState(1);


    return (
        <div>

            <h1>Counter: {counter}</h1>
            <button className="btn btn-primary" onClick={ ()=> setCounter(counter + 1)} >Add 1</button>
            <button className="btn btn-primary" onClick={ ()=> setCounter(counter *0)} >reset</button>
            <button className="btn btn-primary" onClick={ ()=> setCounter(counter - 1)} >sub 1 1</button>

        </div>
    )
}
