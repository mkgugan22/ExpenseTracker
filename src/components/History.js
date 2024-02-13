import React, { useContext } from 'react'
import { AppContext } from '../App'
const History = () => {
  const {transHistory} = useContext(AppContext)
  return (
    <div>
      History
      {transHistory.map((e,i)=>(
     <div key={i}>
     {e.text}
     {e.transAmount}
     </div>
      ))}
    </div>
  )
}

export default History
