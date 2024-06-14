import '../App.css'
export default function Nav(){
    return(
        <nav id='mySection'>
            <div style={{transform:'translateY(85px)'}}>
                <b style={{fontSize:'60px',}}>Anoop Kumar</b>
            </div>
            <ul>
            <li><a href="#mySection">About</a></li>
            <li><a href="#skillsSection">Skills</a></li>
            <li>Projects</li>
            <li>Contact</li>
            </ul>
        </nav>
    )
}