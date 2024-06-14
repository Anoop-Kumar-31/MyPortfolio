import '../App.css'
import logo from '../img/logo2.png'
export default function Front(){
    return(
        <div class="front" >
            <section className='half' style={{marginTop:'5vh'}}>
                <h1 style={{fontSize:'5vh'}}>About Me !</h1>
                <p style={{marginTop:'4px',lineHeight:'1.3'}}>
                <b style={{fontSize:'20px'}}>Degree:</b> Bachelor of Engineering<br/>
                <b style={{fontSize:'20px'}}>Branch:</b> Computer Science Engineering<br/>
                <b style={{fontSize:'20px'}}>Origin:</b> Chandigarh, India<br/><br/>
                I have a passion for creating <strong>elegant</strong> and <strong>innovative</strong> websites, where I often develop <strong>custom logic</strong> for animations and functionality. My <strong>curiosity</strong> drives me to understand the intricacies behind each process I work on.<br/>This approach has consistently yielded <strong>successful results</strong>, particularly when collaborating with <strong>skilled</strong> colleagues.
                </p>
            </section>
            <section className='logo half'><img src={logo} alt="" /></section>
        </div>
    )
}