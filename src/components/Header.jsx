import Tree from '../assets/img/tree.png'
import Card from './Card.jsx'



export default function Header() {

    return(
        <div className="header">
            <img src={Tree} alt="tree_psx" id="tree" />
                <h1 id='main-header'>Agustín Da Silva</h1>
            <Card>Developer and in-growth digital craftsman, always striving to deliver nurturing digital experiences.</Card>
        </div>
    )

}