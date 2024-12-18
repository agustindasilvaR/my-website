import NavBar from "../components/NavBar"
import Article from "../components/Article"
import useDocumentTitle from "../utils/TabTitle"
import SocialMedia from "../components/SocialMedia"
import MyThree from "../components/MyThree"


export default function Home() {
    useDocumentTitle('agustín - home')
    return(
        <>
        <head>
            <title>agustín</title>
        </head>
            <NavBar></NavBar>
            <MyThree></MyThree>
            <Article title="" id="about">
            <h2>hi! / ¡hola! / こんにちは! </h2>
            <p>
                i’m Agustín, a web developer based in Spain who loves blending creativity and technology to craft meaningful digital experiences on the web.            
            </p>
            <p>
            when i’m not coding, you’ll often find me:
            <ul>
                <li><a href="/lomography">capturing the world</a> through my camera</li>
                <li>reading (essays or manga)</li>
                <li>watching cat videos (a universal joy)</li>
                <li>hiking in nature</li>
                <li>at the cinema</li>
            </ul>
            </p>
            <p>
                feel free to reach out, i'm always open to connect with like-minded individuals and maybe even creating something cool together.
            </p>
            <p>
                you can <a href="mailto:agustindasilvar.dev@gmail.com">contact me here</a>, i genuinely hope we can get along. :)
            </p>
            </Article>
            <hr />
            <SocialMedia></SocialMedia>
        </>
    )
}