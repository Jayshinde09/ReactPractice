import { useMemo, useState } from "react";

function Expensive()
{
    const[count , setCount] = useState(0);
    const [text , setText] =  useState("");
    
    const expensiveValue = useMemo(()=>{
        console.log("Calculating ..... !");
        return count*1000;

    }, [count]);

    return(
        <div>
         <h2>Expensive count : {expensiveValue}</h2>
         <button onClick={()=>setCount(count+1)}>Increase Button</button>
         <input value= {text} onChange={(e)=>setText(e.target.value)}/>
        </div>
    )
}

export default Expensive;