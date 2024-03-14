import styles from './UserMenu.module.css'
const UserMenu = () => {
    return(
        <div className={styles.container}>
            <div className={styles.userMenu}>
                <button className={styles.btn}>Profile</button>
                <button className={styles.btn}>Hide/Show balance</button>
                <button className={styles.btn}>Tariff</button>
                <button className={styles.btn}>My orders</button>
                <button className={styles.btn}>My Tickets</button>
                <button className={styles.btn}>Settings</button>
            </div>
        </div>
    )
}

export default UserMenu


