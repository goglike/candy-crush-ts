import styles from './Header.module.css'
import icon from '../../../../public/assets/icon.jpg'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";


const Header = () => {
    const userName = useSelector(state => state.auth.login)

    return (
        <header>
            <img src={icon}></img>
            <h1>CandyCrush</h1>
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/catalog">Catalog</NavLink>
                <NavLink to="/my-cart">My cart</NavLink>
                <NavLink to="/settings">Settings</NavLink>
            </nav>
            <button className={styles.userInfo}>
                <a className={styles.userName}>{userName}</a>
                <a className={styles.userBalance}>15$</a>
            </button>
        </header>
    )
}
/*const userInfo = document.querySelector('.userInfo')
userInfo.addEventListener('mouseover', () => {
    userMenu.style.zIndex = '3';
});

userInfo.addEventListener('mouseout', () => {
    userMenu.style.zIndex = '0';
});*/
export default Header
