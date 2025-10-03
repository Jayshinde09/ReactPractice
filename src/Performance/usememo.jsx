import { useMemo, useState } from "react";


function Don()
{
    const [count , setCount] = useState(0);
    const [number , setNumber] = useState(5);

    const Expensive = (num)=>
    {
        console.log("Calculating ... !");
        let result = 1;
        for(let i=1 ; i<=num*100000 ; i++)
        {
            result +=i;
        }
        return result;
    }
    const calculate = useMemo(()=>Expensive(number), [number])
    return(
        <div>
            <h2>Expensive Calculation {calculate}</h2>
            <button onClick={() => setNumber(number + 1)}>Increase Number</button>
            <button onClick={() => setCount(count + 1)}>Increase Count ({count})</button>
        </div>
    )
}

export default Don;