import React, { useState, useEffect } from 'react'
import { setAccount } from '../storage/localStorage'

export default function SignUpModal() {
  const [ email, setEmail ] = useState()
  const [ firstname, setFirstName ] = useState()
  const [ lastname, setLastName ] = useState()
  const [ username, setUserName ] = useState()
  const [ accountNumber, setAccountNumber ] = useState()
  const [ password, setPassword ] = useState()
  const [ confirmPassword, setConfirmPassword ] = useState()


  function handleSubmit(e) {
    e.preventDefault()
    e.target.reset()
    if(confirmPassword !== password) {
      alert('Password does not match')
      return
    }
    

    const userInfo = {
      email,
      firstname,
      lastname,
      username,
      accountNumber,
      password,
      confirmPassword,
      balance: 0,
      expenses: [],
      image: "",
      history: []
    }
    setAccount(username, userInfo)
    alert('Account successfully created')
  }

  return (
    <section className='modalSection'>
      <div className='formContainer'>
        <p className='fillUpText'>Please fill up the details below:</p>
        <form className='mainForm' onSubmit={(e) => handleSubmit(e)}>
          <label></label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            id='email'
            placeholder='Email'
            required
          />
          <br></br>
          <label></label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type='text'
            id='Fullname'
            placeholder='Full name'
            required
          />
          <br></br>
          <label></label>
          <input 
            onChange={(e) => setLastName(e.target.value)}
            type='text'
            id='lastname'
            placeholder='Last name'
            required
          />
          <br></br>
          <label></label>
          <input 
            onChange={(e) => setUserName(e.target.value)}
            type='text'
            id='username'
            placeholder='Username'
            required
          />
          <br></br>
          <label></label>
          <input
            onChange={(e) => setAccountNumber(Number(e.target.value))}
            type='number'
            id='account-number'
            placeholder='Account Number'
            required
          />
          <br></br>
          <label></label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            id='signUpPassword'
            placeholder='Password'
            required
          />
          <br></br>
          <label></label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)} 
            type='password'
            id='confirm-password'
            placeholder='Confirm Password'
            required
          />
          <br></br>
          <input
            className='signUpSubmitBtn' 
            type='submit'
          />
        </form>
      </div>
    </section>
  )
}
