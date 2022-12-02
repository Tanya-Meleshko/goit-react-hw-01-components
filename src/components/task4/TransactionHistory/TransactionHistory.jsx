import React from 'react'
import s from './TransactionHistory.module.css'
import PropTypes from 'prop-types'
import Transaction from '../Transaction/Transaction'


const TransactionHistory = ({items}) => {
  return (
      <table className={s.transactionHistory}>
          
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  

          {items.map(item => (
                <tbody key ={item.id}>
                <Transaction  
                  type={item.type}
                  amount={item.amount}
                  currency={item.currency}>
                </Transaction>
                </tbody>
          ))}

</table>
  )
}


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
  }).isRequired
  ).isRequired
}

export default TransactionHistory