function Service({title , description})
{
    return(
        <>
        <h1>Our services</h1>
        <li>
            <ul>Website Management </ul>
            <ul>App Management </ul>
            <ul>Service Management </ul>
            <ul>ML Management </ul>
        </li>
        <h2>{title}</h2>
        <h3>{description}</h3>
        </>
    )
}

export default Service;