import React, { useState } from 'react'
import { getAccount, getUser, setAccount } from "../storage/localStorage"

export default function SendMoney({ setUserBalance }) {
  const [ username, setUsername ] = useState()
  const [ sendAmount, setSendAmount ] = useState()
  function handleSubmit(e) {
    e.preventDefault()
    const result = getAccount(getUser()).balance - sendAmount
    const receiver = getAccount(username)
    if(result < 0 || !receiver) {
      alert('Something went wrong please try again')
      e.target.reset()
      resetState()
      return
    }
    setUserBalance(result)
    receiver.balance += sendAmount
    setAccount(username, receiver)
    alert('Send successfully')
    e.target.reset()
    resetState()
  }

  function resetState() {
    setUsername('')
    setSendAmount(0)
  }

  return (
    <section>
    <div>Send Money</div>
    <form onSubmit={(e) => handleSubmit(e)}>
      <input 
        onChange={(e) => setUsername(e.target.value)}
        type='text'
        placeholder="Enter username"
        required
      />
      <input
        onChange={(e) => setSendAmount(Number(e.target.value))}
        type='number'
        placeholder="Enter Amount"
        required 
      />
      <div>
        <button>Send</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  </section>
  )
}
