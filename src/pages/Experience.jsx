import NavBar from "../components/NavBar"
import GridCard from "../components/GridCard"
import useDocumentTitle from "../utils/TabTitle"
import Article from "../components/Article"
import { Tooltip } from "react-tooltip"
import { GitHubCalendar } from 'react-github-calendar';
import Empty from "../components/Empty"

export default function Experience() {
    useDocumentTitle('agustín - experience')
    return(
    <>
        <NavBar></NavBar>
        <div className="calendar-wrapper">
            <div className="card">
                <GitHubCalendar username="agustindasilvaR"></GitHubCalendar>
            </div>
        </div>
        <Article title="projects">
            <p>these are some of the projects I have crafted so far during my journey:</p>
        </Article>
        <div id="grid-flex">
        <div className="grid">
            <a href="https://match-report-plum.vercel.app/" target="_blank" data-tooltip-id="ornatum" data-tooltip-content="tracker/companion web app for League of Legends. powered by React, Express.js and Riot API." data-tooltip-place="bottom">
                <GridCard title="match-report" date="01/2025" tooltip="tesin2"></GridCard>
            </a>
            <Tooltip id="ornatum" style={{ fontFamily: "LT Superior" }}/>
        </div>
        </div>
    </>
    )
}