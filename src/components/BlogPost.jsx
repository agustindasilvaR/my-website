


export default function BlogPost(props) {
    return(


    <a href={props.url} className="text">
        <div className="blog-post">

            <p className="text" > {props.title} </p>
            <p className="text">{props.date}</p>

        </div>
    </a>
    )
}