import styles from "./Home.module.css"
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className={styles.container}>
            <h1>Taste the magic with our irresistible purple treats!</h1>
            <h2>More than 500+ sweets and this just a beginning</h2>
            <div className={styles.btnContainer}>
                <Link to="/login">
                    <button>
                        Sign in
                    </button>
                </Link>
                <button>
                    Sign Up
                </button>
            </div>
        </div>
    )

}
export default Home