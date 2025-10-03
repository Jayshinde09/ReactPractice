import { createContext, useContext } from "react";

const UserContext= createContext();

function Child() 
{
  const user = useContext(UserContext);
  return <h2>Hello , {user}</h2>

} 

function Create()
{
    return(
        <UserContext.Provider value="JAy">
            <div>
                <h1>Child Component</h1>
                <Child/>
            </div>
        </UserContext.Provider>
    )
}

export default Create ;