import { useEffect, useState } from "react";

function GetPost()
{
    const [posts , setPost] = useState([]);
    useEffect(()=>
    {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then((res)=>res.json())
        .then((data)=>setPost(data));

    }, []);

    return(
        <div>
        <h1>GET FETCH POST</h1>
        <ul> 
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong> - {post.body}
          </li>
        ))}
      </ul>
        </div>
    )
}

export default GetPost;