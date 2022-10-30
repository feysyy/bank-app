import { useState } from "react"
import { getAccount, getUser } from "../storage/localStorage"
// import React {} from 'react'

export default function Withdraw({ setUserBalance }) {
    const [ withdrawAmount, setWithdrawAmount ] = useState()

    function handleSubmit(e) {
        e.preventDefault()
      const result = getAccount(getUser()).balance - withdrawAmount
      if(result < 0) {
        alert('insufficient balance')
        e.target.reset()
        return
      }
      setUserBalance(result)
      alert('withdraw success')
      resetState()
    }

    function resetState() {
      setWithdrawAmount(0)
    }
  return (
    <section>
      <div>Withdraw</div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setWithdrawAmount(Number(e.target.value))}
          type='number'
          placeholder="Enter Amount"
          required 
        />
        <div>
          <button>Withdraw</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </section>
  )
}
