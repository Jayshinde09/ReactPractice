function DeletePost()
{
    function handleDelete()
    {
        fetch("",{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>console.log("DELETED SUCCCESSFULLY" , data))
    }

    return(
        <div>
            <h1>DELETE - REMOVE POST</h1>
            <button onClick={handleDelete}>DELETE POST !</button>
            <p>Chech console after clicking</p>
        </div>
    )
}

export default DeletePost;
