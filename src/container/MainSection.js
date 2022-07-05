// import React, { useState, useEffect } from 'react'
import Header from '../components/MainHeader'
import Deposit from '../components/Deposit'
import { getLogUser, removeLogUser } from '../storage/localStorage'
import { useNavigate } from 'react-router-dom';


export default function MainSection() {
  const navigate = useNavigate()
  const currentUser = getLogUser()

  return (
    <section className='mainContainer'>
      <div>Hello, {currentUser.firstname}</div>
      <div className='userContainer'>
        <div className='accountInfo'>
          <h1 className='balanceText'>Balance: {currentUser.balance}</h1>
          <h2 className='accNumberText'>Account Number: {currentUser.accountNumber}</h2>
        </div>
        <div className='userInteraction'>
          <div className='depositBox'><Deposit /></div>
          <div className='sendMoneyBox'>Send Money</div>
          <div className='withdrawBox'>Withdraw</div>
          <div className='friendsBox'>Friends</div>
        </div>
      </div>

      <div className='expensesContainer'>
        <h3>EXPENSES</h3>
        <div>

        </div>
      </div>
      <button onClick={() => {
        removeLogUser() 
        navigate('/') 
      }}>
        Log Out
      </button>
    </section>
  )
}




// function MainSection() {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default MainSection