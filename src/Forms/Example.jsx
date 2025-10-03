import { useState } from "react";

function CheckRadio()
{
    const [agree , setAgree]= useState(false);
    const [gender , setGender] = useState("");
    const [ county , setCountry]= useState("India");

    function handleChange(e) {
    e.preventDefault();
    console.log({ agree, gender, country });
  }

    return(
        <form onSubmit={handleChange}>
            <label><input type = "checkbox" checked={agree} onChange={(e)=>setAgree(e.target.checked)}/>I agree</label>
            <div>
                <label>
                <input type = "radio" value="Male" checked= {gender==="male"} onChange={(e)=>setGender(e.target.value)}/>
                Male
                </label>
                <label>
                <input type = "radio" value="Female" checked= {gender==="Female"} onChange={(e)=>setGender(e.target.value)}/>
                FeMale</label>
            </div>

            <select value={county} onChange={(e)=>setCountry(e.target.value)}>
                <option>INDIA</option>
                <option>USA</option>
                <option>UK</option>
            </select>


        </form>
    )
}

export default CheckRadio;