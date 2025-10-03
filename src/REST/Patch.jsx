function Patch()
{
    function handlepatch()
    {
        fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PATCH",
            headers:{"Content-type":"application/json"},
            body: JSON.stringify({
                title:"Partially updated title",
            })
        })
        .then(res=>res.json())
        .then(data=>console.log("Patched" , data));

    }

    return(
        <div>
            <h1>PATCH PARTIAL DATA</h1>
            <button onClick={handlepatch}>PATCH POST</button>
            <p>CHECK POST AFTER POINTING</p>
        </div>
    )
}

export default Patch;