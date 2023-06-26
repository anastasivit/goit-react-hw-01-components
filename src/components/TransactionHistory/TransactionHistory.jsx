import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <div className={styles['transaction-history-container']}>
    <table className={styles['transaction-history']}>
      <thead>
        <tr>
          <th className={styles['transaction-history__header']}>Type</th>
          <th className={styles['transaction-history__header']}>Amount</th>
          <th className={styles['transaction-history__header']}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={styles['transaction-history__item']}>{type}</td>
            <td className={styles['transaction-history__item']}>{amount}</td>
            <td className={styles['transaction-history__item']}>{currency}</td>
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
