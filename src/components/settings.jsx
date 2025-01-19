import React,{useState} from "react";
import '../styles/settings.css';
function Settings(){
    const [theme,setTheme]=useState('light');
    const [language,setLanguage]=useState('en');
    const [password,setPassword]=useState();
    const [Newpassword,setNewpassword]=useState();
    const [confirmpassword,selectConfirmpassword]=useState();
    const handlethemechange=()=>{
        setTheme(theme=='light'?'dark':'light');
    }
    return(
       
        <div className="`settings${theme}`">
        <h2>Settings</h2>
        <div className="theme">
            <label htmlFor="theme-toggle">Theme:</label>
            <input type="checkbox" id="theme-toggle" checked={theme=='dark'} onChange={handlethemechange}/>
            <span className="slider"></span>
        </div>
        <div className="language-settings">
            <label htmlFor="language-select">Language:</label>
            <select id="language-select" value={language}>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="te">Telugu</option>
                <option value="hi">Hindi</option>
                <option value="ta">Tamil</option>

            </select>
        </div>
        <div className="password-settings">
            <h3>Change Password</h3>
            <input type="password" placeholder="Current Password" value={password} />
            <input type="password" placeholder="New Password" value={Newpassword} />
            <input type="password" placeholder="Confirm Password" value={confirmpassword} />
            <button>Change Password</button>
        </div>
        <div className="delete-account">
            <h3>Delete Account</h3>
            <p>****Warning**** This action is irreversible</p>
            <button>Delete Account</button>
        </div>
        </div>
    );
}
export default Settings;