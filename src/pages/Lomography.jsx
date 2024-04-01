import NavBar from "../components/NavBar"
import useDocumentTitle from "../utils/TabTitle"
import ReactImageGallery from "react-image-gallery"
import Gallery from "../components/Gallery"
import { coru } from "../js/images"
import "react-image-gallery/styles/css/image-gallery.css";



export default function Home() {
    useDocumentTitle('agustín - lomography')
    return(
        <>
        <NavBar></NavBar>
        <Gallery title="??" location="A Coruña, Galicia">
            <ReactImageGallery items={coru} showPlayButton={false} showFullscreenButton={false} showNav={false}></ReactImageGallery>
        </Gallery>
        </>
    )
}