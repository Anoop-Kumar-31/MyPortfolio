import '../App.css'
import Themes from './Themes'
export default function Nav(){
    return(
        <nav id='mySection'>
            <Themes/>
            <ul>
            <li><a href="#mySection">AboutMe</a></li>
            <li><a href="#skillsSection">Skills</a></li>
            <li><a href="#projectSection">Projects</a></li>
            <li><a href="#contactSection">Contacts</a></li>
            </ul>
        </nav>
    )
}
// import '../App.css';

// export default function Nav() {
//     return (
//         <nav id='mySection'>
//             <div className="name-container" style={{transform:'translateY(85px)'}} >
//                 <b className="name" style={{fontSize:'60px',}}>Anoop Kumar</b>
//                 <span className="Handwave"  style={{fontSize:'40px',}}>&nbsp;👋🏾</span>
//             </div>
//             <ul>
//                 <li><a href="#mySection">About</a></li>
//                 <li><a href="#skillsSection">Skills</a></li>
//                 <li><a href="#projectSection">Projects</a></li>
//                 <li>Contact</li>
//             </ul>
//         </nav>
//     );
// }

