
import React, {useState} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
//would be kind of funny to have a counter that gives you how long youve spent clicking the buttons for the counter
//probabnly just a running counter or something maybe some words appear when you click it enough times, a litle easter egg 
return (
    <div class="d-flex flex-column align-items-center justify-content-center text-center">
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
</div>
)
}




export default Counter;