import { useReducer } from "react";

function reducer(state , action)
{
    if(action.type==="INCREMENT") return {count:state.count+1};
    if(action.type=="DECREMENT") return {count:state.count-1};
    return state ;

}

function ReduceCounter()
{
    const [state , dispatch]= useReducer(reducer , {count: 0});
    return(
        <div>
            <h2>count {state.count}</h2>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
        </div>
    )
}

export default ReduceCounter;

