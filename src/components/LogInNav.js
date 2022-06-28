import React from 'react'

export default function LogInNav() {
  return (
    <div className='logInNavContainer'>
        <div className='bankName'>Bank</div>
        <nav className='navContainer'>
            <ul className='listContainer'>
              <li>Home</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li className='signUpBtn'>Sign Up</li>
            </ul>
        </nav>
    </div>
  )
}
