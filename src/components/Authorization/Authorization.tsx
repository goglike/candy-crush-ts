import styles from './Authorization.module.css'
import {Link, NavLink, useNavigate} from "react-router-dom";
import logo from '../../../public/assets/icon.jpg'
import {useDispatch, useSelector} from "react-redux";
import {setLoginAction, setPasswordAction, validateLoginAction, validatePasswordAction} from "../../store/modules/auth/authSlice.js";
import {useState} from "react";

const Authorization = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState( '')


    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(login)
    console.log(useSelector(state => state.auth.isLoginValid))





    const handleChangeLogin = (e) => {
        const value = e.target.value;
        setLogin(value);
        dispatch(setLoginAction(value)); // Передайте значение как аргумент
    };

    const handleChangePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
        dispatch(setPasswordAction(value)); // Передайте значение как аргумент
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(validateLoginAction())
        dispatch(validatePasswordAction())
        if (login && password !== '') {
            navigate('/home')
        }

    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <img src={logo} className={styles.logo}/><h1>CandyCrush</h1>
                </div>

                <form >

                    <h1>Sign In</h1>

                    {useSelector(state => state.auth.isLoginValid)  === false ?
                        <div>Incorrect login</div>
                        : null
                    }

                    <input
                        type="text"
                        placeholder="Enter your login or Email"
                        value={login}
                        onChange={handleChangeLogin}
                    />
                    {
                        useSelector(state => state.auth.isPasswordValid) === false ?
                            <div>Incorrect password</div>
                            : null
                    }
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handleChangePassword}
                    />

                    <div>
                        <a>You are not Sign Upped?</a>
                        <NavLink id={styles.link} >Sign Up</NavLink>
                    </div>

                    <NavLink id={styles.link}>Remember your password?</NavLink>

                    <div className={styles.btnContainer}>


                            <button onClick={handleSubmit}>
                                Sign In
                            </button>


                        <button>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Authorization