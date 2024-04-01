export default function Article(props){

    return(

        <article className="article">
            <h3>{props.title}</h3>
            {props.children}
        </article>

    )

}