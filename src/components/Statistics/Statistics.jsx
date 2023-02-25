import PropTypes from 'prop-types';
import css from './Statistics.module.css'


export const Statistics = ({
    title,
    stats,
}) => {
    
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.statList}>
                {stats.map(item => {
                    return (
                    <li key={item.id} className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
                    <span className={css.label}>{item.label}</span>
                    <span className={css.percentage}>{item.percentage} %</span>
                </li>)
                })}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}