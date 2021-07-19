import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export function Transaction({ transaction, key }) {
   const { deleteTransaction } = useContext(GlobalContext)

   const flow = transaction.amount
   const sign = flow < 0 ? '-' : '';

   return (
      <li className={flow > 0 ? 'plus' : 'minus'}>
         {transaction.text} <span>{sign}${(flow < 0 ? Math.abs(flow) : flow).toFixed(2)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
      </li>
   )
}


