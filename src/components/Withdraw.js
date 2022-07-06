import { useState } from "react"
import { getAccount, getUser } from "../storage/localStorage"
// import React {} from 'react'

export default function Withdraw({ setUserBalance }) {
    const [ withdrawAmount, setWithdrawAmount ] = useState()

    function handleSubmit(e) {
        e.preventDefault()
      // const result = getAccount(getUser()).balance - withdrawAmount
      // setUserBalance(result)
      // if(result < 0) {
      //   alert('Insufficient Balance')
      // }
      const result = getAccount(getUser()).balance - withdrawAmount
      const invalid = getAccount(getUser()).balance
      if(result >= 0) {
        setUserBalance(result)
      } else if( result < 0) {
        setUserBalance(invalid)
        alert('insufficient balance')
      }
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
          <button>Reset</button>
        </div>
      </form>
    </section>
  )
}
