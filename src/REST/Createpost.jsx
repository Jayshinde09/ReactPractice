function Createpost()
{ 
    function handleCreate()
    {
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify({
                title:"My new post",
                body:"My learning request",
                userid : 1,
            }),
        })
        .then(res=>res.json())
        .then(data=>console.log("Created:" , data))

    }

    return(
        <div>
            <h2>Create Post</h2>
            <button onClick={handleCreate}>Create New Post</button>
            <p>Check console after clicking</p>
        </div>
    )

}

export default Createpost;