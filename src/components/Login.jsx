import React,{useState} from 'react';
function Login(){
    const [email,setEmail] =useState('');
    const [Role,setRole] =useState('user');
    const [password,setPassword] =useState('');
    return(
        <div className="LR">
            <div className="Register">
            <h1>Register</h1>
                <form>
                    
                </form>
            </div>
   
        <div className="Login-container">
            <h2>Login</h2>
            <form>
               Role:
                    <select id="Role" value={Role}>
                        <option value="student" >Student</option>
                        <option value="employer">Employer</option>
                        <option value="admin">Admin</option>
                    </select>
                Email:<input type="email" required></input>
                Password:<input type="password" required ></input>

            </form>
        </div>
        </div>
    );
}
export default Login;