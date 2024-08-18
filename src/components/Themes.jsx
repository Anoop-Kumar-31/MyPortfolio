import React, { useState, useEffect } from 'react';

export default function Themes() {

  const [theme, setTheme] = useState({primaryColor: "#36454F", accentColor: "#40E0D0", backgroundColor: "#D3D3D3", textColor: "#FFFFFF"});
  
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
          textColor: "#bfbfbf",
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
          textColor: "#bfbfbf",
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
  
  return (
    <div className='themes'>
        {buttons.map((butt, index) => (
            <button key={index} onClick={() => themeChange(butt.name)} className={`number${index}`}>
            
            </button>
        ))}
    </div>
  );
}