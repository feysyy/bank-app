import React, { useState, useEffect } from 'react';
import Deposit from '../components/Deposit';
import Withdraw from '../components/Withdraw';
import { useNavigate } from 'react-router-dom';
import { getAccount, setAccount, getUser, removeUser} from '../storage/localStorage';
import SendMoney from '../components/SendMoney';
import Expenses from '../components/Expenses';


export default function MainSection() {
  const navigate = useNavigate()
  const currentUser = getAccount(getUser())
  const [ userBalance, setUserBalance ] = useState(currentUser.balance)
  const [ sampleHistory, setSampleHistory ] = useState([])

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
          <div className='depositBox'>
            <Deposit 
              setUserBalance={setUserBalance} 
              setSampleHistory={setSampleHistory} 
              sampleHistory={sampleHistory}
            />
          </div>
          <div className='withdrawBox'><Withdraw setUserBalance={setUserBalance}/></div>
          <div className='sendMoneyBox'><SendMoney setUserBalance={setUserBalance}/></div>
          <div className='friendsBox'>
            <p>History</p>
            <div>
              {sampleHistory?.map((each, index) => {
                  return (
                    <div key={index}> {each} </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className='expensesContainer'><Expenses userBalance={userBalance}/></div>
      <button onClick={() => {
        removeUser()
        navigate('/') 
      }}>
        Log Out
      </button>
    </section>
  )
}
