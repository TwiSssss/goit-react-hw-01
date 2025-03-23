import style from "./FriendList.module.css";
const FriendList = ({ friends }) => {
    return (
        <ul className={style.FriendList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <li key={id} className={style.friendItem}>
                    <img src={avatar} alt="Avatar" width="48" />
                    <p className={style.friendName}>{name}</p>
                    <p className={`${style.friendStatus} ${isOnline ? style.online : style.offline}`}>{isOnline ? "Online" : "Offline"}</p>
                </li>
            ))}
        </ul>
    );
};
export default FriendList;
