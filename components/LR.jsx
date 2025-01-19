import React,{useState} from 'react';
import '../styles/LR.css';

import {useNavigate} from 'react-router-dom';

function LR(){
    const [email,setEmail] =useState('');
    const [Role,setRole] =useState('admin');
    const [password,setPassword] =useState('');
    const [confirmpassword,setconfirmPassword] =useState('');
    const [isFlipped,setisFlipped]=useState(false);
    const [pno,setpno]=useState();
    const navigate=useNavigate();
    const handleClick=()=>{
        setisFlipped(!isFlipped);
    }
   
        const handleSubmitLogin = (event) => {
            event.preventDefault();
            {Role==='employer'&& navigate('/Employer')}
            {Role==='student'&& navigate('/Student')}
           

           }
        const handleFP=(event)=>{
            console.log('fp');
        };
    
        const handleSubmitRegister = (event) => {
            event.preventDefault();
            if (password !== confirmpassword) {
                alert("Passwords do not match");
                return;
            }
            navigate('Details', { state: { role: Role } });
    };
    return(
        <div className="card" >
  
         
        
        <div className={`LR ${isFlipped ? 'flipped' : ''} `}>   
        <div className="Login-container">
            <h2 id='h2'>Login</h2>
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
                <p onClick={handleFP} className="toggle-link">
                                Forgot password
                            </p>
                <p onClick={handleClick} className="toggle-link">
                                Don't have an account? Register here
                            </p>
               </div> 

            </form>
    
        </div>
        <div className="Register">
            <h2 id='h2'>Register</h2>
                <form onSubmit={handleSubmitRegister}>
                <div className="Form">
                <label htmlFor="Role" >Role
                    <select id="Role"  value={Role} onChange={(e)=>setRole(e.target.value)}>
                        <option value="student" >Student</option>
                        <option value="employer" >Employer</option>
                    </select>
                </label>
                <label htmlFor="email">Email
                <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                </label>
                <label htmlFor="password">Password
                    <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required ></input>
                </label>
                <label htmlFor="confirm password">Confirm Password
                    <input type="password" id="confirm password" value={confirmpassword} onChange={(e)=>setconfirmPassword(e.target.value)} required ></input>
                </label>
                <label htmlFor="phone number">Phone number
                    <input type="tel" id="phone number" value={pno} onChange={(e)=>setpno(e.target.value)} required ></input>
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
