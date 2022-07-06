import React, { useState, useEffect } from 'react';
import Deposit from '../components/Deposit';
import Withdraw from '../components/Withdraw';
import { useNavigate } from 'react-router-dom';
import { getAccount, setAccount, getUser, removeUser} from '../storage/localStorage';


export default function MainSection() {
  const navigate = useNavigate()
  const currentUser = getAccount(getUser())
  const [ userBalance, setUserBalance ] = useState(currentUser.balance)

  useEffect(() => {
    const user_current = getAccount(getUser())
    user_current.balance = userBalance
    setAccount(getUser(), user_current) //updating the info/balance inside the local storage
  }, [userBalance])
  
  return (
    <section className='mainContainer'>
      <div>Hello, {currentUser.firstname}</div>
      <div className='userContainer'>
        <div className='accountInfo'>
          <h1 className='balanceText'>Balance: {userBalance}</h1>
          <h2 className='accNumberText'>Account Number: {currentUser.accountNumber} </h2>
        </div>
        <div className='userInteraction'>
          <div className='depositBox'><Deposit setUserBalance={setUserBalance}/></div>
          <div className='withdrawBox'><Withdraw setUserBalance={setUserBalance}/></div>
          <div className='sendMoneyBox'>Send Money</div>
          <div className='friendsBox'>Friends</div>
        </div>
      </div>

      <div className='expensesContainer'>
        <h3>EXPENSES</h3>
        <div>

        </div>
      </div>
      <button onClick={() => {
        removeUser()
        navigate('/') 
      }}>
        Log Out
      </button>
    </section>
  )
}
