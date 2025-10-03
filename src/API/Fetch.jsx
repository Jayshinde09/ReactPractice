import { useEffect, useState } from "react";

function Userlist()
{
    const [ user , setUser] = useState([])
    useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/users")
       .then(response=>response.json())
       .then(data=>setUser(data));

    }, []);

    return(
        <div>
            <h1>DATA FETCH SUCCESSFULLY</h1>
            <ul>
                {user.map(user=>
                    <li key= {user.id}>{user.name} ({user.email})</li>
                )}
            </ul>
        </div>
    )
}

export default Userlist;