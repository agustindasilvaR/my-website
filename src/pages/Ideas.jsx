import NavBar from "../components/NavBar"
import useDocumentTitle from "../utils/TabTitle"
import BlogPost from "../components/BlogPost"
import Empty from "../components/Empty"


export default function Ideas() {
    useDocumentTitle('agustín - ideas')
    return(
    <>
        <NavBar></NavBar>
        {/* <BlogPost title="the art of creating" date="20/03/2024" url='/ideas/the-art-of-creating'></BlogPost>
        <BlogPost title="the art of creating" date="20/03/2024"></BlogPost>
        <BlogPost title="the feeling of striving nostalgia" date="20/03/2024"></BlogPost>
        <BlogPost title="the feeling of striving nostalgia" date="20/03/2024"></BlogPost>
        <BlogPost title="the art of creating" date="20/03/2024"></BlogPost>
        <BlogPost title="the feeling of striving nostalgia" date="20/03/2024"></BlogPost>
        <BlogPost title="the art of creating" date="20/03/2024"></BlogPost>
        <BlogPost title="the feeling of striving nostalgia" date="20/03/2024"></BlogPost>
        <BlogPost title="the art of creating" date="20/03/2024"></BlogPost>
        <BlogPost title="the feeling of striving nostalgia" date="20/03/2024"></BlogPost>
        */}

        <Empty></Empty>

    </>
    )
}