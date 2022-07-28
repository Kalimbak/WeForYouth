import React from 'react'
import Navbar from '../../components/Navbar/navbar' 
import Visibility from '../../assets/visibility_off'
import './reset.css'

function reset() {
  return (
    <div className='resetPage'>
        <div className=''>
            <Navbar />
        </div>
        <div className='BodyReset'>
          <p>Reset your Password</p>
          <div className='ResetP'>
            <div className='place'>
              <input type="text" placeholder='E-mail' />
            </div>
            <div className='place'>
              <input type="text"  placeholder='Type Codes From the Email'/>
            </div>
            <div className='place'>
              <input type="text"  placeholder='New  password'/>
              <Visibility />
            </div>
            <div className='place'>
              <input type="text"  placeholder='Confirm Password'/>
              <Visibility />
            </div>
            <div className=''>
              <button className='btn'> Send</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default reset