import { useState } from "react";
function SimpleEvents()
{
     const [text , setText] = useState("");
     function handleClick()
     {
        alert("Jay is in Google !");
     }

     function handleChange(event)
     {
        setText(event.target.value);
     }

     function handleSubmit(event)
     {
        event.preventDefault();
        alert("Form Submitted !");
     }

     function handleMouseover()
     {
        setText("Its over");
     }

     function handleMouseleave()
     {
        setText("Its on leave ...!!!");
     }
     return(
        <div>
            <h1>React Event dom</h1>
            <button onClick={handleClick}>Click Me</button>

            <input type="text" placeholder="type here" onChange={handleChange}/>
            <p>You typed : {text}</p>

            <form onSubmit={handleSubmit}>
             <input type="text" placeholder="enter something"/>
             <button type="submit">Submit</button>

             <div onMouseOver={handleMouseover} onMouseLeave={handleMouseleave}>
                   Hover over me
             </div>
             <p>{text}</p>

            </form>
        </div>
     )
}

export default SimpleEvents;