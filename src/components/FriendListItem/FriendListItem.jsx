import style from "./FriendListItem.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={style.friendItem}>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={style.friendName}>{name}</p>
            <p className={`${style.friendStatus} ${isOnline ? style.online : style.offline}`}>{isOnline ? "Online" : "Offline"}</p>
        </li>
    );
};
export default FriendListItem;
