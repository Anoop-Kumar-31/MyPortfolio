import img1 from '../img/bloodmanagement.png'
import img2 from '../img/autoback.png'
import img3 from '../img/amazonclone.png'
import react from '../img/icons/react.png'
// import postgresql from '../img/icons/postgresql.png'
import express from '../img/icons/express.png'
import nodejs from '../img/icons/nodejs.png'
import mongodb from '../img/icons/mongodb.png'
import firebase from '../img/icons/firebase.png'
import next from '../img/icons/nextjs.png'
const projects=[
    {
        name:'Amazon Clone',
        des:'Amazon Clone is a full-stack e-commerce website that replicates the functionality of the Amazon website. The website allows users to browse products, add them to a shopping cart, and proceed to checkout. The website is built using NextJs for the front end,firebase for the signin page authentication process, and for future updates MongoDB for the database. The website features a  user authentication, and a shopping cart system. The website is deployed on Vercel, a company which itself have developed NextJs framework on React.',
        image:`${img3}`,
        icons:[next, firebase],
        link:'https://anoopsamazon.vercel.app/'

    },{
        name:'Real-Time Blood Management System',
        des:`The "Heartbeat" is a conceptual website designed to address the problem of blood availability. This platform aims to connect blood donors with recipients efficiently, minimizing the time needed to secure blood for patients in critical condition. By enabling real-time tracking and communication, the system showcases a potential solution for enhancing the speed and reliability of blood donation processes, ultimately aiming to save lives through improved access to necessary blood supplies. (not responsive for mobile screens)`,
        image:`${img1}`,
        icons:[mongodb, express, react, nodejs],
        link:'https://bloodmanagementsystem-anoop.vercel.app/'
    },{
        name:'AutoBack- Advertising Website',
        des:'AutoBack is a advertising website which is to promote the service provided by company, the product is based in automatic feedback and its logging system. The website is designed to be user-friendly and easy to navigate, with a clean and modern aesthetic. The website is responsive and mobile-friendly, ensuring that it looks great on all devices. The website is built using ReactJs, with a focus on clean code and best practices.',
        image:`${img2}`,
        icons:[react],
        link:'https://autoback-7van.onrender.com'
    },
]
export default projects;