import React ,{ useState } from "react";


const Child = React.memo(({name})=>
{
   console.log("child rendered");
   return <h1>Hello {name}</h1>
})

function Momo()
{  
    const [count , setCount] = useState(0);
    return(
         <div>
        <Child name="Jay"/>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count+1)}>Decrement</button>
         </div>
    )
}

export default Momo;
//LAZY LOADING