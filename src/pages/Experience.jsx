import NavBar from "../components/NavBar"
import GridCard from "../components/GridCard"
import useDocumentTitle from "../utils/TabTitle"
import Article from "../components/Article"
import { Tooltip } from "react-tooltip"

export default function Experience() {
    useDocumentTitle('agustín - experience')
    return(
    <>
        <NavBar></NavBar>
        <Article title="projects">
            <p>these are some of the projects I have crafted so far during my journey:</p>
        </Article>
        <div id="grid-flex">
        <div className="grid">
            <a href="" data-tooltip-id="ornatum" data-tooltip-content="My final degree project: consists of a similar application to Pinterest, but orientated to clothing-only posts. Built with Angular and Flask." data-tooltip-place="bottom"><GridCard title="Ornatum" date="09/2023" tooltip="tesin2"></GridCard></a>
            <Tooltip id="ornatum" style={{ fontFamily: "LT Superior" }}/>
            <a href="" data-tooltip-id="portfolio" data-tooltip-content="This is the web page you are currently at. After developing my first portfolio while I was studying two years ago, I decided to make a new one from scratch with a better vision and ideas. Built with React." data-tooltip-place="bottom"><GridCard title="Web Portfolio" date="03/2024" tooltip="testing"></GridCard></a>
            <Tooltip id="portfolio" style={{ fontFamily: "LT Superior" }}/>
        </div>
        </div>
    </>
    )
}