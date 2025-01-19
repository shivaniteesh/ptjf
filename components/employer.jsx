import React,{useState} from "react";
import '../styles/Employer.css'
import Footer from "./Footer";
import Postjob from "./Postjob";
import Settings from "./settings";
function Employer(){
    const [active,setActive]=useState();
    const menuItems = [
        { id: "home", icon: "home-outline", label: "Home" },
        { id: "fill", icon: "create-outline", label: "Fill" },
        { id: "settings", icon: "settings-outline", label: "Settings" },
        { id: "profile", icon: "person-outline", label: "Profile" },
      ];
      
      return (
        <div className="employer">
        <div className="navigation">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`list ${active === item.id ? "active" : ""}`}
              onClick={() => setActive(item.id)}
            >
              <span className="icon">
                <ion-icon name={item.icon}></ion-icon> {/* Display the icon */}
              </span>
              <span className="text">{item.label}</span> {/* Display the label */}
            </li>
          ))}
        </ul>
      </div>
    <section className="content">
          {active==='fill'&&<Postjob/>}
          {active==='settings'&&<Settings/>}
        
    </section>
    { /* <Footer/>*/}
    </div>
      );
      
}
export default Employer;