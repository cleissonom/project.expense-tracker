import React from 'react'

export function Transaction({ transaction, key }) {
   const flow = transaction.amount
   const sign = flow < 0 ? '-' : '';

   return (
      <li className={flow > 0 ? 'plus' : 'minus'}>
         {transaction.text} <span>{sign}${(flow < 0 ? Math.abs(flow) : flow).toFixed(2)}</span><button className="delete-btn">x</button>
      </li>
   )
}


