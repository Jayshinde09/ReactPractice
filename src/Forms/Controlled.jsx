import { useState } from "react";

function Controlled()
{
    const [name , setName] = useState("");
    
    function handleSubmit(event)
    {
        event.prevent.default();
        alert(`Hello , ${name}`);
    }

    return(
        <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/>
        <button type="submit">Submit</button>

        </form>
    )
}

export default Controlled;