import React from 'react';
import PropTypes from 'prop-types';
import './TransactionHistory.css';

const TransactionHistory = ({ items }) => (
  <div className="transaction-history-container">
    <table className="transaction-history">
      <thead>
        <tr>
          <th className="transaction-history__header">Type</th>
          <th className="transaction-history__header">Amount</th>
          <th className="transaction-history__header">Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className="transaction-history__item">{item.type}</td>
            <td className="transaction-history__item">{item.amount}</td>
            <td className="transaction-history__item">{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
