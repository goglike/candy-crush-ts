import styles from './Footer.module.css'
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.getAppContainer}>
                    <i className="fa-brands fa-google-play" id={styles.googlePlay}>
                        <a>Get app from Google Play</a>
                    </i>
                    <i className="fa-brands fa-app-store-ios" id={styles.appStore}>
                        <a>Get app from App Store</a>
                    </i>
                </div>

                <div className={styles.linksContainer} id={styles.first}>
                    <NavLink id={styles.item} to="">Delivery</NavLink>
                    <NavLink id={styles.item} to="">Vacantions</NavLink>
                    <NavLink id={styles.item} to="">Answers & questions</NavLink>
                </div>

                <div className={styles.linksContainer} id={styles.second}>
                    <NavLink id={styles.item} to="">Public Offer</NavLink>
                    <NavLink id={styles.item} to=" ">Contacts</NavLink>
                    <NavLink id={styles.item} to="">About us</NavLink>
                </div>

                <div className={styles.phoneContainer}>
                    <i className="fa-solid fa-phone">+7 (999) 333-66-99 </i>
                </div>

                <div className={styles.socialContainer}>
                    <i id={styles.item} className="fa-brands fa-vk"></i>
                    <i id={styles.item} className="fa-brands fa-youtube"></i>
                    <i id={styles.item} className="fa-brands fa-telegram"></i>
                    <i id={styles.item} className="fa-brands fa-whatsapp"></i>
                </div>
            </div>
        </footer>
    )
}
export default Footer