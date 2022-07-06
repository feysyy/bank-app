import React, { useState } from 'react'
import { getUser, getAccount } from '../storage/localStorage'

export default function Deposit({ setUserBalance, setSampleHistory, sampleHistory}) {
  const [ depositAmount, setDepositAmount ] = useState()
  
  function handleSubmit(e) {
    e.preventDefault()
    const result = getAccount(getUser()).balance + depositAmount
    setUserBalance(result)
    setSampleHistory([...sampleHistory, `you deposited ${depositAmount} to your account`])
    alert('Deposit Success')
    e.target.reset()
    resetState()
  }
  
  function resetState() {
    setDepositAmount(0)
  }


  return (
    <section>
      <div>Deposit</div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setDepositAmount(Number(e.target.value))}
          type="number"
          placeholder='Enter Amount'
          required
        />
        <div>
          <button>Deposit</button>
          <button type="reset">Reset</button>
        </div>
        </form>
    </section>
  )
}
