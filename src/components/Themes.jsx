import React, { useState, useEffect } from 'react';

{/* <input 
    className="" 
    type="color" 
    onChange={this.changeTheme.bind(this)}
    style={{"--base":this.state.color}}
/> */}

// /* Royal Blue ----------------------------------*/
//     /* --primary-color: #4169E1; 
//     --accent-color: #FFD700;
//     --background-color: #F0F0F0; 
//     --text-color: #333333;  */

//   /* Navy Blue and Orange----------------------- */
//     /* --primary-color: #001F3F;
//     --accent-color: #FF851B;
//     --background-color: #FFFFFF;
//     --text-color: #000000; */

//   /* Teal and Coral ----------------------------*/
//   /* --primary-color: #008080;
//   --accent-color: #FF7F50;
//   --background-color: #E0FFFF;
//   --text-color: #2F4F4F; */

//   /* Dark Purple and Mint Green */
//   /* --primary-color: #4B0082;
//   --accent-color: #98FF98;
//   --background-color: #FFFFF0;
//   --text-color: #000000; */

//   /* Charcoal and Turquoise */
//   --primary-color: #36454F;
//   --accent-color: #40E0D0;
//   --background-color: #D3D3D3;
//   --text-color: #FFFFFF;


// CHANGE TO Const

export default function Themes() {
  const [theme, setTheme] = useState({
    primaryColor: "#36454F",
    accentColor: "#40E0D0",
    backgroundColor: "#D3D3D3",
    textColor: "#FFFFFF",
  });

  function themeChange(str) {
    switch (str) {
      case "RB":
        setTheme({
          primaryColor: "#333333",
          accentColor: "#4169E1",
          backgroundColor: "#F0F0F0",
          textColor: "#FFD700",
        });
        break;
      case "NBO":
        setTheme({
          primaryColor: "#001F3F",
          accentColor: "#FF851B",
          backgroundColor: "#FFFFFF",
          textColor: "#000000",
        });
        break;
      case "TC":
        setTheme({
          primaryColor: "#008080",
          accentColor: "#FF7F50",
          backgroundColor: "#E0FFFF",
          textColor: "#2F4F4F",
        });
        break;
      case "DPMG":
        setTheme({
          primaryColor: "#300053",
          accentColor: "#98FF98",
          backgroundColor: "#FFFFF0",
          textColor: "#000000",
        });
        break;
      default:
        setTheme({
          primaryColor: "#36454F",
          accentColor: "#40E0D0",
          backgroundColor: "#D3D3D3",
          textColor: "#FFFFFF",
        });
        break;
    }
  }  
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', theme.primaryColor);
    root.style.setProperty('--accent-color', theme.accentColor);
    root.style.setProperty('--background-color', theme.backgroundColor);
    root.style.setProperty('--text-color', theme.textColor);
  }, [theme]);
  const buttons=[
    {
        name: "DPMG",
        title: "Dark Purple and Mint Green",
    },
    {
        name: "NBO",
        title: "Night Blue and Orange",
    },
    {
        name: "TC",
        title: "Teal and Coral",
    },
    {
        name: "RB",
        title: "Royal Blue",
    },
    {
        name: "CT",
        title: "Charcoal and Turquoise",
    }]
  return (
    <div className='themes'>
      {/* <button onClick={() => themeChange("DPMG")}>Dark Purple and Mint Green </button>
      <button onClick={() => themeChange("NBO")} >Night Blue and Orange </button>
      <button onClick={() => themeChange("TC")} >Teal and Coral</button>
      <button onClick={() => themeChange("RB")} >Royal Blue</button>
      <button onClick={()=>themeChange("CT")}>Charcoal and Turquoise</button> */}
        {buttons.map((butt, index) => (
            <button key={index} onClick={() => themeChange(butt.name)} className={`number${index}`}>
            
            </button>
        ))}
    </div>
  );
}