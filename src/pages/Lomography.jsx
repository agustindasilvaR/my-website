import NavBar from "../components/NavBar"
import useDocumentTitle from "../utils/TabTitle"
import ReactImageGallery from "react-image-gallery"
import Gallery from "../components/Gallery"
import { coru, roma2024 } from "../js/images"
import "react-image-gallery/styles/css/image-gallery.css";



export default function Home() {
    useDocumentTitle('agustín - lomography')
    return(
        <div style={{paddingBottom: "10px"}}>
        <NavBar/>
        <Gallery title="November, 2024" location="Roma, Italia">
            <ReactImageGallery items={roma2024} showPlayButton={false} showFullscreenButton={false} showNav={false}></ReactImageGallery>
        </Gallery>
        <Gallery title="January, 2023" location="A Coruña, Spain">
            <ReactImageGallery items={coru} showPlayButton={false} showFullscreenButton={false} showNav={false}></ReactImageGallery>
        </Gallery>
        </div>
    )
}