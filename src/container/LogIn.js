import React, { useState, useEffect } from 'react'
import LogInNav from '../components/LogInNav'
import { useNavigate } from 'react-router-dom';
import { getAccount, setUser } from '../storage/localStorage'

export default function LogIn() {
  // const [username, setUserName] = useState()
  // const [password, setPassword] = useState()
  const [ loginUser, setLoginUser ] = useState({
    username: "",
    password: ""
  })
  const navigate = useNavigate();

  function handleChange(e) {
    // console.log(e.currentTarget.elements)
    const data = {}
    for (const input of e.currentTarget.elements) {
      if(input.name !== null && input.name !== "") {
        data[input.name] = input.value
      }
    }
    // console.log(data)
    setLoginUser(data)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(loginUser)
    const currentUser = getAccount(loginUser.username)
    if(!currentUser || currentUser.password !== loginUser.password) {
      alert('Account does not match')
      return
    }
    setUser(loginUser.username)
    navigate('/transactions')
  }

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
        <form onChange={(e) => handleChange(e)} onSubmit={(e) => handleSubmit(e)} className='formContainer'>
          <div className='logInContainer'>
            <label className='usernameLabel'>Username: </label>
            <input
              className='usernameBox'
              // onChange={(e) => setUserName(e.target.value)}
              type='text'
              id='login'
              // value={loginUser.username}
              name="username"
              required
            />
            <label className='passwordLabel'>Password: </label>
            <input
              className='passwordBox'
              // onChange={(e) => setPassword(e.target.value)}
              type='password' 
              id='password'
              // value={loginUser.password}
              name='password'
              required
            />
          <input className='submitBtn' type='submit'/> 
          </div>
        </form>
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
