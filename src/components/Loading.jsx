import '../App.css';
import img from '../img/boat.png';
export default function Loading() {
    return (
        <div className="loadingbackground">
            <img src={img}/>
            <div className="loader">
                <div className="wave wave11"></div>
                <div className="wave wave22"></div>
                <div className="wave wave33"></div>
                <div className="wave wave44"></div>
                <box className="box">&nbsp; hello</box>
            </div>
        </div>
    );
}