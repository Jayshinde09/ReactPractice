import { createContext, useContext } from "react"

const UserContext = createContext();
function Child()
{  
  const user = useContext(UserContext);
  return <h1>Hello , {user}</h1>
}

function Context()
{
    return(
        <UserContext.Provider value= "Jay">
            <Child/>
        </UserContext.Provider>
    )
}

export default Context;

