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
                the name is Agustín, nice to meet you! 
            </p>
            <p>
                I am a full-stack developer currently based in Spain with a
                gnawing love for learning, seeking new challenges and delivering nurturing digital experiences through coding.
            </p>
            <p>
                whenever I am far from an IDE you can find me with my camera taking lots of <a href="/lomography">pictures</a> outside, randomly
                talking to stray cats, reading an interesting book or maybe playing videogames from time to time.
            </p>
            <p>
                you can <a href="mailto:agustindaasilvarodriguez@gmail.com">contact me here</a>, I genuinely hope we can get along together :) !
            </p>
            </Article>
            <hr />
            <SocialMedia></SocialMedia>
        </>
    )
}