import { useState } from "react";

function MultiForm()
{
    const [formData , setformData] = useState({
        username:" ",
        email: " ",
    });

    function handleChange(e)
    {
         setformData({...formData , [e.target.name] : e.target.value})
    }

    function handleSubmit(e)
    {
       e.preventDefault();
       console.log(formData);

    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
            />

            <input 
            type="text"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            />

            <button type="submit">Submit</button>
        </form>
    )

}

export default MultiForm;