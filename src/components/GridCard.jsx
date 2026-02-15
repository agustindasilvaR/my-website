import { Tooltip } from "react-tooltip"

export default function GridCard(props) {
    return(
        <div className='grid-card'>
            <h4>{props.title}</h4>
            <p id="date">{props.date}</p>
            <Tooltip  place='bottom'>
                {props.tooltip}
            </Tooltip>
        </div>
    )
}