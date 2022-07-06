import React, { useState, useEffect } from 'react'
import { getAccount, setAccount, getUser} from '../storage/localStorage';

export default function Expenses({ userBalance }) {
  const [ expenseName, setExpenseName ] = useState()
  const [ expenseAmount, setExpenseAmount ] = useState()
  const [ expenseList, setExpenseList ] = useState(getAccount(getUser()).expenses)
  
  const expenseTotal = () => {
    let total = 0
    getAccount(getUser()).expenses.forEach(({expenseAmount}) => {
      total += expenseAmount
    });
    return total
  }
  const [ balanceExpense, setBalanceExpense ] = useState(userBalance - expenseTotal())

  useEffect(() => {
    setBalanceExpense(userBalance - expenseTotal())
  }, [userBalance])
  

  function handleSubmit(e) {
    e.preventDefault()
    const user_current = getAccount(getUser())
    const expenseItem = {
      expenseName,
      expenseAmount
    }
    user_current.expenses.push(expenseItem)
    setAccount(getUser(), user_current)
    setExpenseList(getAccount(getUser()).expenses)
    const balanceTotal = userBalance - expenseTotal()
    setBalanceExpense(balanceTotal)
    e.target.reset()
    resetState();
  }

  function resetState() {
    setExpenseName('')
    setExpenseAmount(0)
  }

  return (
    <section>
      <div>Balance with Expenses: {balanceExpense} </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setExpenseName(e.target.value)} 
          type="text"
          placeholder='Enter expense name'
          required
        />
        <input 
          onChange={(e) => setExpenseAmount(Number(e.target.value))}
          type='number'
          placeholder='Enter Amount'
          required
        />
        <button type='submit'>Add</button>
        <button type='reset'>Reset</button>
      </form>
      <div className=''>
        {
          expenseList?.map((each, index) => {
            return (
              <div key={index}>{each.expenseName} - {each.expenseAmount}</div>
            )
          })
        }
      </div>
    </section>
  )
}
