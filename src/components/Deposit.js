import React, { useState } from 'react'
import { getLogUser, setLogUser } from '../storage/localStorage'

export default function Deposit() {
  const [ depositAmount, setDepositAmount ] = useState()
  const [ currentUser, setCurrentUser ] = useState(getLogUser())


  function handleSubmit(e) {
    e.preventDefault()
    // let currentBalance = currentUser.balance
    // currentBalance += depositAmount
    // setLogUser(currentUser)
    console.log(currentUser)
  }
  
  function checkValidity() {

  }

  return (
    <section>
        <div>Deposit</div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label></label>
            <br></br>
            <input
              onChange={(e) => setDepositAmount(e.target.value)}
              type="number"
              placeholder='Enter Amount'
              required
            />
            <div>
              <button>Deposit</button>
              <button>Reset</button>
            </div>
        </form>
    </section>
  )
}
