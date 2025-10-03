import { useRef } from "react";

function InputFocus()
{
    const inputRef = useRef();

    function focusinput(){
    inputRef.current.focus;
   }

   return(
    <div>
        <input ref={inputRef} type="text" placeholder="type here ..."/>
        <button onClick={focusinput}>Focus input</button>
    </div>
   )
}

export default InputFocus;



