import { useEffect, useState } from "react";

function Counter()
{
    const [count , setCount]=  useState(0);

    useEffect(() => {
    console.log("Effect running: ", count);
    }, [count]);


    function handleClick()
    {
        setCount(count+1)
    }

    function handleChange()
    {
        setCount(count-1)
    }
    return(
        <div>
        <h1>Count {count}</h1>
        <button onClick={handleClick}>Increment</button>
        <button onClick={handleChange}>Decrement</button>
        </div>
    )
}

export default Counter;