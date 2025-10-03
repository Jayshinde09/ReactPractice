function Update()
{
    function handleUpdate()
    {
        fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method:"PUT",
            headers: {"Content-type" :"application/json"},
            body: JSON.stringify({
                id:1 ,
                title:"Updated post",
                body:"This replaces the whole post",
                userId:1,
            }),

        })
        .then(res=>res.json())
        .then(data=>console.log("Updated" , data));

    }

    return(
        <div>
            <h2>Put update status</h2>
            <button onClick={handleUpdate}>Update Post 1</button>
            <p>Chech console after clicking</p>
        </div>
    )
}

export default Update;