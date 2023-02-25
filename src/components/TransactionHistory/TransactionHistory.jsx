import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({transactions}) => {
    return (
<table className={css.transactionHistory}>
  <thead className={css.thead}>
    <tr>
      <th className={css.th}>Type</th>
      <th className={css.th}>Amount</th>
      <th className={css.th}>Currency</th>
    </tr>
  </thead>

            <tbody>{
                transactions.map(({ id, type, amount, currency }) => {
                    return (
                        <tr className={css.tr} key={id}>
                          <td className={css.td}>{type}</td>
                          <td className={css.td}>{amount}</td>
                          <td className={css.td}>{currency}</td>
                       </tr>
                )
            })}
 
  </tbody>
</table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
}