import React, { useState } from 'react'
import SignUpModal from "./SignUpModal"

export default function LogInNav() {
  const [ showform, setShowForm ] = useState(false)

  return (
    <>
      <div className='logInNavContainer'>
          <div className='bankName'>Bank</div>
          <nav className='navContainer'>
              <ul className='listContainer'>
                <li>Home</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <button
                  className='signUpBtn'
                  onClick={() => setShowForm(!showform)}
                >
                  Sign Up
                </button>
              </ul>
          </nav>
      </div>
      {showform && (<SignUpModal />)}
      
    </>
  )
}
