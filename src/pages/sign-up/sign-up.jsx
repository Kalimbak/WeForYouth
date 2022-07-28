import React from 'react'
import Navbar from '../../components/Navbar/navbar' 
import photocamera from '../../assets/photocamera.svg'
import Visibility from '../../assets/visibility_off'
import './signup.css'

function Signup() {

  return (
    <div className='signup1'>
        <div className='nav'>
            <Navbar />
        </div>
        <div className='maincenter'>
            <div className='division1'>
            <div className='lefsideavatar'>
                    <img src={photocamera} alt=''/>
                    <span>Choose Avatar</span>
            </div> 
            </div>
            <div className='division2'>
                <p> Sign Up</p>
                <div className='formFill'>
                   <div className='gap'>
                        <input type="text" placeholder='Full Name'/>
                    </div>
                   <div className='gap'>
                        <input type="text" placeholder='Username'/>
                    </div>
                   <div className='container-select'>
                        <select className="com-slect">
                            <option value="choose your community"> Select a community</option>
                            <option value="choose your community">Drug addiction</option>
                            <option value="choose your community">Sex abuse</option>
                            <option value="choose your community">personality disorder</option>
                        </select>
                    </div>
                   <div className='gap'>
                        <input type="text" placeholder='Gender'/>
                    </div>
                   <div className='gap'>
                        <input type="text" placeholder='Age'/>
                    </div>
                   <div className='gap'>
                        <input type="text" placeholder='E-mail'/>
                    </div>
                   <div className='passW'>
                        <input type="text" placeholder='Password'/>
                        <Visibility />
                    </div>
                   <div className='passW'>
                        <input type="text" placeholder='Confirm password'/>
                        <Visibility />
                    </div>
                    <div className='subBtn'>
                        <button type="submit" >Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

  )
}

export default Signup;