import React, { useState } from 'react'
import { getUser, getAccount } from '../storage/localStorage'

export default function Deposit({ setUserBalance }) {
  const [ depositAmount, setDepositAmount ] = useState()
  
  function handleSubmit(e) {
    e.preventDefault()
    const result = getAccount(getUser()).balance + depositAmount
    setUserBalance(result)
  }
  


  return (
    <section>
        <div>Deposit</div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label></label>
            <br></br>
            <input
              onChange={(e) => setDepositAmount(Number(e.target.value))}
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
