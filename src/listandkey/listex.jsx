function FruitList()
{
    const fruits = ["mango" ,"apple" , "peanut" , ];
    return(
        <ul>
            {fruits.map((fruit)=>(
                <li>{fruit}</li>
            ))}
            
        </ul>
    )
}

export default FruitList;