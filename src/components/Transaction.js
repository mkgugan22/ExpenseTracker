import React, { useContext } from 'react'
import { AppContext } from '../App'
import { ToastContainer } from 'react-toastify'

const Transaction = () => {
    const {text,setText,transAmount,setTransAmount,handleSubmit} = useContext(AppContext)
   

    return (

    <div>
      Transaction
      <div>
        <h3>Description<input type='text' placeholder='Enter Text' value={text} onChange={e=> setText(e.target.value)} required></input></h3>
      </div>
      <div>
        <h3>amount<br/> [positive - income , negative - expense]
        <br></br>
        <input type='number' placeholder='Enter Amount' value={transAmount} onChange={e=> setTransAmount(e.target.value)} required></input></h3>
      </div>
      <div>
        <button onClick={handleSubmit}>Click</button>
    
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Transaction
