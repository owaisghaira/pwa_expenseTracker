import React from 'react'
// import { GlobalContext } from '../ContextStore/GlobalState'

const IncomeExpense = () => {
  // const { transaction } = useContext(GlobalContext);
  // const amount = transaction.map(transaction => transaction.amount)

  // const income = amount.filter(item => item > 0).reduce((a, b) => (a += b),0)
  // console.log(income)
  // const expense = amount.filter(item => item < 0).reduce((a, b) => (a += b),0)*-1
  // console.log(expense)

  return (
    <div className="inc-exp-container">
      <div>
        <h3>Income <br /> +$5000 </h3>
      </div>
      <div>
        <h3>Expense <br /> -$4000 </h3>
      </div>
    </div>
  )
}

export default IncomeExpense
