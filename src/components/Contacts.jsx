import React from 'react'; // Import React for component creation
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BsFillSendArrowUpFill } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
export default function Contacts() {
  const handleEmailClick = () => {
    console.log("Email triggered");
    window.location.href = `https://mail.google.com/mail?view=cm&fs=1&to=amt312002@gmail.com&su=Visited your portfolio`;
  };
  return (
    <div className="contact">
      <b style={{ fontSize: '10vh' }}>Contacts</b>
      <hr />
      <br />
      <section className="detail">
        <div>
          <h1>Name:</h1>
          <p>Anoop Kumar</p>
        </div>
        <div>
          <h1>Email:</h1>
          <p>amt312002@gmail.com</p>
        </div>
        <div>
          <h1>Phone:</h1>
          <p>+91 798-534-5837</p>
        </div>
        <button id="email" onClick={handleEmailClick}>
          Send Email<BsFillSendArrowUpFill/>
        </button>
        <div id="myLinks">
        <a href="https://www.linkedin.com/in/anoop--kumar/"><button>
          <TiSocialLinkedinCircular/>
        </button></a>
        <a href="https://github.com/Anoop-Kumar-31"><button id="github">
          <VscGithub style={{transform:'scale(1.7)'}}/>
        </button></a>
        </div>
      </section>
    </div>
  );
}