
import React, {useState, useEffect} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

return (
    <>
    <h1 class="m-2"> Counter App </h1>
    <h3 class="m-2"> Count is: {counter} </h3>
    <div class="container">
        <div class="row row-cols-1">
            <div class="col m-1">
                <button type="button" class="btn btn-primary" onClick={() => {setCounter(counter + 1)}}>Increment</button>
            </div>
            <div class="col m-1"> 
                <button type="button" class="btn btn-primary" onClick={() => {counter === 0? setCounter(0) : setCounter(counter -1)}}>Decrement</button>
            </div>
            <div class="col m-1">
                <button type="button" class="btn btn-primary" onClick={() => {setCounter(0)}}>Reset</button>
            </div>
            
        </div>
    </div>
</>
)
}




export default Counter;