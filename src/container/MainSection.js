// import React, { useState, useEffect } from 'react'
import Header from '../components/MainHeader'
export default function MainSection() {

  return (
    <section className='mainContainer'>
      <div className='userContainer'>
        <div className='accountInfo'>
          <h1 className='balanceText'>Php 1000</h1>
          <h2 className='accNumberText'>Account Number</h2>
        </div>
        <div className='userInteraction'>
          <div className='depositBox'>Deposit</div>
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