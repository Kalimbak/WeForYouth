
import React from 'react'
import "./login.css"
import { Link } from "react-router-dom"

function Login() {
//   const formValidation = () => {};
  return (
    <div className="loginsides">
       
      <div className="leftside">
         <h2>NEW HERE ?</h2> 
         <p>Sign up and get To Connect With Other Youth</p>
         <Link to="/Signup" ><button className='signup' >SignUp</button></Link>
      </div>

      <div className="rightside">
        <div className="form">
          <div className="intro">
            <h3>Login To Your Account</h3>
          </div>
          <form action="">
            <div className="form-data">
              <div className="email">
                <input type="text" placeholder="enter your email" />
              </div>
              <div className="password">
                <input type="text" placeholder="enter your email" />
              </div>
              <div>
                <button className="button">Sign In</button>
               <Link to="/reset" className='reset'> <p >Reset Password</p></Link>
              </div>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
