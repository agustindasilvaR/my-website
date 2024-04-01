export default function Card(props) {
    return(
        <div id='card'>
            <p id='caption'>{props.children}</p>
        </div>
    )
}