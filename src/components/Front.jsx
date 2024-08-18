import '../App.css'
import logo from '../img/logo2.png'
import React from 'react'
import { FaFileDownload } from "react-icons/fa"
import { MdFileOpen } from "react-icons/md";
export default function Front(){
    const[visibleResume, setVisibleResume] = React.useState(false);
  
    const handleResumeClick=()=>{
        setVisibleResume(!visibleResume);
    }
    return(
        <div class="front" >
            {visibleResume && 
                <span id="resumePreview">
                    <div onClick={handleResumeClick}>X</div>
                    <iframe src="https://drive.google.com/file/d/1k56iPPt9Cvem7IzJsV-dtiZQ0BmnHtxE/preview"></iframe>
                </span>
            }
            <section id="aboutmeinfo" className='half' style={{transform:'translateY(-50px)'}} >
                <div style={{marginBottom:'3vh'}}>
                    <b style={{fontSize:'60px',}}>Anoop Kumar  </b> 
                </div>
                <h1 style={{fontSize:'5vh'}}>About Me !</h1>
                <p style={{marginTop:'4px',lineHeight:'1.3'}}>
                <b style={{fontSize:'20px'}}>Degree:</b> Bachelor of Engineering<br/>
                <b style={{fontSize:'20px'}}>Branch:</b> Computer Science Engineering<br/>
                <b style={{fontSize:'20px'}}>Origin:</b> Chandigarh, India<br/><br/>
                I have a passion for creating <strong>elegant</strong> and <strong>innovative</strong> websites, where I often develop <strong>custom logic</strong> for animations and functionality. My <strong>curiosity</strong> drives me to understand the intricacies behind each process I work on.<br/>This approach has consistently yielded <strong>successful results</strong>, particularly when collaborating with <strong>skilled</strong> colleagues.
                </p>
                <a>
                    <button onClick={handleResumeClick}>
                        View Resume
                        <MdFileOpen/>
                    </button>
                </a>
                <a href="https://drive.google.com/uc?export=download&id=1k56iPPt9Cvem7IzJsV-dtiZQ0BmnHtxE">
                    <button>
                        Download Resume
                        <FaFileDownload/>
                    </button>
                </a>
            </section>
            <section className='logo half'><img src={logo} alt="" /></section>
        </div>
    )
}