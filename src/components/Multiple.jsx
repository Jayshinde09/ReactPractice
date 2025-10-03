import { useState } from "react";

function Multiple()
{
    const [name , setName] = useState("Jay");
    const [age , setAge] = useState(20);
    
    function handleAge(){
        setAge(age+1)
    }
    return(
        <div>
        <h1>{name} is {age} years old !!!!</h1>
        <button onClick={handleAge}>Increase Age</button>
        </div>
    )
}

export default Multiple ;