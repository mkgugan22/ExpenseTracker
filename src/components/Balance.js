import React, { useContext } from 'react'
import { AppContext } from '../App'
import './balance.css'
const Balance = () => {
    const {transBalance,transIncome,transExpense} = useContext(AppContext)// the values in the app.js were these are inside the appcontext so by import it we can access it 
  return (
    <div>
      <div>
      <label for="Date">Time</label>:
                <input type="date" class="form-control" id="Date" name="Date"/>
      </div>
      <br></br>
      Balance
      <div>
        <h3 >Your Balance : ₹ {transBalance}</h3>
        </div>
        <div>
            <h3>Your Income : ₹ {transIncome}</h3>
        </div>
        <div>
            <h3>Your Expense : ₹ {transExpense}</h3>
        </div>
    </div>
  )
}

export default Balance
