import styles from "./Profile.module.css";
const Profile = ({ username, tag, location, stats, image }) => {
    return (
        <div className={styles.profile}>
            <div className={styles.profileInfo}>
                <img className={styles.profileAvatar} src={image} alt={tag} />
                <p className={styles.profileNames}>{username}</p>
                <p className={styles.profileTag}>@{tag}</p>
                <p className={styles.profileLocation}>{location}</p>
            </div>

            <ul className={styles.profileStats}>
                <li className={styles.statsItem}>
                    <span className={styles.statsLabel}>Followers</span>
                    <span className={styles.statsValue}>{stats.followers}</span>
                </li>
                <li className={styles.statsItem}>
                    <span className={styles.statsLabel}>Views</span>
                    <span className={styles.statsValue}>{stats.views}</span>
                </li>
                <li className={styles.statsItem}>
                    <span className={styles.statsLabel}>Likes</span>
                    <span className={styles.statsValue}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};
export default Profile;
