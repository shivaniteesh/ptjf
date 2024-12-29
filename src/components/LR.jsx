import React,{useState} from 'react';
import '../styles/LR.css'
function LR(){
    const [email,setEmail] =useState('');
    const [Role,setRole] =useState('');
    const [password,setPassword] =useState('');
    const [confirmpassword,setconfirmPassword] =useState('');
    const [isFlipped,setisFlipped]=useState(false);
    const handleClick=()=>{
        setisFlipped(!isFlipped);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
       
        };
        const handleSubmitLogin = (event) => {
            event.preventDefault();
           }
    
        const handleSubmitRegister = (event) => {
            event.preventDefault();
            if (password !== confirmpassword) {
                alert("Passwords do not match");
                return;
            }
    };
    return(
        <div className="card" >
        <div className={`LR ${isFlipped ? 'flipped' : ''} `}>   
        <div className="Login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmitLogin}>
                <div className="Form">
               <label htmlFor="Role" >Role
                    <select id="Role"  value={Role} onChange={(e)=>setRole(e.target.value)}>
                        <option value="student" >Student</option>
                        <option value="employer" >Employer</option>
                        <option value="admin" >Admin</option>
                    </select>
                </label>
                <label htmlFor="email">Email
                <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                </label>
                <label htmlFor="password">Password
                    <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required ></input>
                </label>
                <button type="submit">Login</button>
                <p onClick={handleClick} className="toggle-link">
                                Don't have an account? Register here
                            </p>
               </div> 

            </form>
    
        </div>
        <div className="Register">
            <h1>Register</h1>
                <form onSubmit={handleSubmitRegister}>
                <div className="Form">
                <label htmlFor="email">Email
                <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                </label>
                <label htmlFor="password">Password
                    <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required ></input>
                </label>
                <label htmlFor="confirm password">Confirm Password
                    <input type="password" id="confirm password" value={confirmpassword} onChange={(e)=>setconfirmPassword(e.target.value)} required ></input>
                </label>
                <button type="submit">Register</button>
                <p onClick={handleClick} className="toggle-link">
                                Already have an account? Login here
                            </p>
               </div> 

                </form>
               
            </div>
            </div>
        </div>
        
    );
}
export default LR;
