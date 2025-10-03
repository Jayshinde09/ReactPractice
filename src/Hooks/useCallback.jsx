import { useCallback, useState } from "react";

function Button({onClick ,children})
{
    console.log("Button rendered" , children);
    return <button onClick={onClick}>{children}</button>
}

function CallBack()
{
    const [count , setCount] = useState(0);

    const increment = useCallback(()=>{
        setCount((c=>c+1));
    },[]);

    return(
        <div>
            <p>Count:{count}</p>
            <Button onClick={increment}>Increase</Button>
        </div>
    )
}

export default CallBack;