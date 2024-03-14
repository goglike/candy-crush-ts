import styles from './Settings.module.css'
import {useSelector} from "react-redux";
export const Settings = () => {
    const userName = useSelector(state => state.auth.login)
    const userPassword = useSelector(state => state.auth.password)
    return (
    <div className={styles.container}>
        <div>username: {userName}</div>
        <div>password: {userPassword}</div>
    </div>
    )
}