import css from './FriendList.module.css';
import PropTypes from 'prop-types';


export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <li key={id} className={css.item}>
                        <span className={css.isOnline} style={{backgroundColor: isOnline? 'green' : 'red'}}>{isOnline}</span>
                   <img className={css.avatar} src={avatar} alt={name} width="48" />
                    <p className={css.name}>{name}</p>
                </li>
               )
           } )}
        </ul>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};
