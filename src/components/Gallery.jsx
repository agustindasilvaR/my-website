export default function Gallery(props) {


    return(

        <article className="article">
            <h3>{props.title} - {props.location}</h3>
            {props.children}
        </article>

    )

}