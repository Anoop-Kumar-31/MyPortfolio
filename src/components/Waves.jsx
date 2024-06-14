import '../App.css';
import Nav from  './Nav';
import Front from './Front';
export default function Waves(){
    return(
        <section class="section">
            <Nav/>
            <Front/>
            <div class="wave wave1"></div>
            <div class="wave wave2"></div>
            <div class="wave wave3"></div>
            <div class="wave wave4"></div>
        </section>
    )
};