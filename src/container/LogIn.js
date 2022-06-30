import React, { useState, useEffect } from 'react'
import { initializeUserList } from '../storage/localStorage'
import LogInNav from '../components/LogInNav'

export default function LogIn() {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()

  useEffect(() => {
    initializeUserList()
  }, [])


  function handleSubmit(e) {
    e.preventDefault()
    // setLogUser({
    //   'username': username,
    //   'password': password
    // })
  }

  // function resetState() {

  // }

  return (
    <>
      <div>
      <LogInNav />
      </div>
      <div className='textContainer'>
        <h1>It's never been simpler to make a payment</h1>
        <p className='paragraphContainer'>
          Learn how to handle your finances in the most straightforward way possible. 
          Deposits, withdrawals, and transfers are all possible. 
          With NO LIMITS, you can send money all over the world!
        </p>
      </div>
      <section>
        <form onSubmit={(e) => handleSubmit(e)} className='formContainer'>
          <div className='logInContainer'>
            <label className='usernameLabel'>Username: </label>
            <input
              className='usernameBox'
              onChange={(e) => setUserName(e.target.value)}
              type='text'
              id='login'
              required
            />
            <label className='passwordLabel'>Password: </label>
            <input
              className='passwordBox'
              onChange={(e) => setPassword(e.target.value)}
              type='password' 
              id='password'
              required
            />
          <input className='submitBtn' type='submit'/> 
          </div>
        </form>
        {/* <div>
          {getLogUser()?.username}
        </div> */}
      </section>
      <div className='secondTextContainer'>
        <h2>
          Best Payment Services For Your Transaction
        </h2>
        <p>
          Make it easier for you to make transaction through our payment service with BANK.
        </p>
      </div>
    </>
  )
}
