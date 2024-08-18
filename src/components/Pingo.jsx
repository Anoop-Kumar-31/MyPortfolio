import img1 from '../img/thumbnail.png'
import img2 from '../img/autoback.png'
import react from '../img/icons/react.png'
import postgresql from '../img/icons/postgresql.png'
// import express from '../img/icons/expressjs.png'
import nodejs from '../img/icons/nodejs.png'
const projects=[
    {
        name:'AutoBack- Advertising Website',
        des:'AutoBack is a advertising website which is to promote the service provided by company, the product is based in automatic feedback and its logging system. The website is designed to be user-friendly and easy to navigate, with a clean and modern aesthetic. The website is responsive and mobile-friendly, ensuring that it looks great on all devices. The website is built using HTML, CSS, and JavaScript, with a focus on clean code and best practices.',
        image:`${img2}`,
        icons:[react],
        link:'https://autoback-7van.onrender.com'
    },{
        name:'Real-Time Blood Management System',
        des:`The "Heartbeat" is a conceptual website designed to address the problem of blood availability. This platform aims to connect blood donors with recipients efficiently, minimizing the time needed to secure blood for patients in critical condition. By enabling real-time tracking and communication, the system showcases a potential solution for enhancing the speed and reliability of blood donation processes, ultimately aiming to save lives through improved access to necessary blood supplies. (not responsive for mobile screens)`,
        image:`${img1}`,
        icons:[react, postgresql, nodejs],
        link:'https://bloodmanagementsystem-anoop.vercel.app/'
    },
]
export default projects;